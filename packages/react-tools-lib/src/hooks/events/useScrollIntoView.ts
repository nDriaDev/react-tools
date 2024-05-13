import { useCallback, useRef } from "react";
import { useEventListener } from "./useEventListener";
import { useReducedMotion } from "../api-dom/useReducedMotion";

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
 * **`useScrollIntoView`**: Hook to scroll an element into view. [See demo](https://react-tools.ndria.dev/#/hooks/events/useScrollIntoView)
 * @param {Object} param
 * @param {number} [param.duration=1000] - animation duration in milliseconds.
 * @param {"x"|"y"} [param.axis="x"] - scrolling axis.
 * @param {(t:number)=>number} [param.animation=easeInOutSine] - easing animation function. Refer to [https://easings.net/](https://easings.net/).
 * @param {number} [param.offset=0] - additional distance.
 * @param {boolean} [param.cancelable=false] - to establish if animation can be interrupted by user scroll.
 * @param {()=>void} [param.onFinish] - callback to be executed when animation ends.
 * @param {(()=>E)|E|React.RefObject<E|null>} [param.scrollableElement] - scrollable parent element, ref or function that returns element.
 * @returns {{targetRef: React.MutableRefObject<T|null>, scroll: (alignment?: "start"|"center"|"end")=>void, cancel: ()=>void}} result - a __targetRef__ to target element, a __scroll__ function to start scrolling, a __cancel__ function to cancel scrolling.
 */
export const useScrollIntoView = <T extends Element, E extends Element | null = null>({ duration = 1000, axis = "y", animation = easeInOutSine, offset = 0, cancelable = false, onFinish, scrollableElement }: { duration?: number, axis?: "x" | "y", animation?: (t: number) => number, offset?: number, cancelable?: boolean, onFinish?: () => void, scrollableElement: (()=>E)|E|React.RefObject<E|null> }): { targetRef: React.MutableRefObject<T | null>, scroll: (alignment?: "start" | "center" | "end") => void, cancel: () => void } => {
	const idAnimatedFrame = useRef<number>();
	const startTime = useRef(0);
	const stopping = useRef(false);

	const targetRef = useRef<T>(null);

	const reducedMotion = useReducedMotion();

	const cancel = useCallback(() => idAnimatedFrame.current && cancelAnimationFrame(idAnimatedFrame.current), []);

	const shouldStop = useCallback(() => cancelable && (stopping.current = true), [cancelable]);

	useEventListener({ type: "wheel", listener: shouldStop, listenerOpts: { passive: true } });
	useEventListener({ type: "touchmove", listener: shouldStop, listenerOpts: { passive: true } });

	const scroll = useCallback((alignment: "start" | "center" | "end" = "start") => {
		stopping.current = false;
		cancel();
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