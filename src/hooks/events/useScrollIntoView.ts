import { useCallback, useRef } from "react";
import { useEventListener } from "./useEventListener";
import { useReducedMotion } from "../api-dom/useReducedMotion";
import { UseScrollIntoViewProps, UseScrollIntoViewResult } from "../../models";

function easeInOutSine(x: number): number {
	return -(Math.cos(Math.PI * x) - 1) / 2;
}

function startPoint<E extends Element>(parent: E|null|undefined, axis: "x" | "y") {
	const scroll = axis === "x" ? "scrollLeft" : "scrollTop";
	return (parent
		? parent[scroll]
		: document.body[scroll] + document.documentElement[scroll]) ?? 0;
}

function getDelta<T extends Element, E extends Element>(axis: "x" | "y", target: T | null | undefined, parent: E | null | undefined, alignment: "start" | "center" | "end", offset: number) {
	if (!target) {
		return 0;
	}
	const parentElement = parent || document.body;
	const parentPosition = parentElement.getBoundingClientRect();
	const targetPosition = target.getBoundingClientRect();

	const getDiff = (property: 'top' | 'left'): number =>
		targetPosition[property] - parentPosition[property];

	if (axis === 'y') {
		const diff = getDiff('top');

		if (diff === 0) return 0;

		if (alignment === 'start') {
			const distance = diff - offset;

			return distance;
		}

		const parentHeight = parent ? parentPosition.height : window.innerHeight;

		if (alignment === 'end') {
			const distance = diff + offset - parentHeight + targetPosition.height;

			return distance;
		}

		if (alignment === 'center') {
			return diff - parentHeight / 2 + targetPosition.height / 2;
		}

		return 0;
	} else {
		const diff = getDiff('left');

		if (diff === 0) return 0;

		if (alignment === 'start') {
			const distance = diff - offset;

			return distance;
		}

		const parentWidth = parent ? parentPosition.width : window.innerWidth;

		if (alignment === 'end') {
			const distance = diff + offset - parentWidth + targetPosition.width;

			return distance;
		}

		if (alignment === 'center') {
			return diff - parentWidth / 2 + targetPosition.width / 2;
		}

		return 0;
	}
}


/**
 * **`useScrollIntoView`**: Hook to scroll an element into view.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useScrollIntoView)
 * @template E - The scrollable container element type. Defaults to `null`, which means the nearest scrollable ancestor is used automatically.
 * @template T - The element type to scroll into view.
 * @param {UseScrollIntoViewProps<E>} param - {@link UseScrollIntoViewProps}
 * @returns {UseScrollIntoViewResult<T>} result {@link UseScrollIntoViewResult}
 */
export const useScrollIntoView = <T extends Element, E extends Element | null = null>({ duration = 1000, axis = "y", animation = easeInOutSine, offset = 0, cancelable = false, onFinish, scrollableElement }: UseScrollIntoViewProps<E>): UseScrollIntoViewResult<T> => {
	const idAnimatedFrame = useRef<number>();
	const startTime = useRef(0);
	const stopping = useRef(false);

	const targetRef = useRef<T>(null);

	const reducedMotion = useReducedMotion();

	const cancel = useCallback(() => {
		if (idAnimatedFrame.current) {
			cancelAnimationFrame(idAnimatedFrame.current);
			idAnimatedFrame.current = undefined;
		}
	}, []);

	const shouldStop = useCallback(() => cancelable && (stopping.current = true), [cancelable]);

	useEventListener({ type: "wheel", listener: shouldStop, listenerOpts: { passive: true } });
	useEventListener({ type: "touchmove", listener: shouldStop, listenerOpts: { passive: true } });

	const scroll = useCallback((alignment: "start" | "center" | "end" = "start") => {
		stopping.current = false;
		cancel();
		startTime.current = 0;
		const parent = typeof scrollableElement === "function"
			? scrollableElement() as E
			: (scrollableElement as React.RefObject<E>)?.current
				? (scrollableElement as React.RefObject<E>).current
				: scrollableElement as E;
		const initialPoint = startPoint(parent, axis);
		const delta = getDelta(axis, targetRef.current, parent, alignment, offset);

		function animateScroll() {
			if (startTime.current === 0) {
				startTime.current = performance.now();
			}

			const now = performance.now();
			const elapsed = now - startTime.current;

			const progressTime = reducedMotion || duration === 0 ? 1 : elapsed / duration;

			const distance = initialPoint + delta * animation(progressTime);

			const method = axis === "x" ? "scrollLeft" : "scrollTop";
			parent
				? (parent[method] = distance)
				: (document.body[method] = distance, document.documentElement[method] = distance)

			if (!stopping.current && progressTime < 1) {
				idAnimatedFrame.current = requestAnimationFrame(animateScroll);
			} else {
				onFinish && onFinish();
				startTime.current = 0;
				idAnimatedFrame.current = undefined;
				cancel();
			}
		}
		animateScroll();
	}, [animation, axis, cancel, duration, offset, onFinish, reducedMotion, scrollableElement]);

	return {
		targetRef,
		scroll,
		cancel
	}
}