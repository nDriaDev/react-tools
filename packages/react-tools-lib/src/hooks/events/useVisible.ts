import { RefCallback, useCallback, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { useEffectOnce } from "../lifecycle";

/**
 * **`useVisible`**: Hook to know if an element is visible and optionally the visible area ration of the element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useVisible)
 * @param {{root?: Element|Document|null, rootMargin?: string, threshold?: number|number[], withRatio?: boolean}} opts - object to set options to observation.
 * @returns {[RefCallback<T>, boolean] | [RefCallback<T>, boolean, number]} result - callback for ref element attribute to observe, a boolean to known if element is visible or not and eventually the element ratio.
 */
function useVisible<T extends Element>(opts?: undefined): [RefCallback<T>, boolean];
function useVisible<T extends Element>(opts?: IntersectionObserverInit & { withRatio?: undefined }): [RefCallback<T>, boolean];
function useVisible<T extends Element>(opts?: IntersectionObserverInit & { withRatio?: true }): [RefCallback<T>, boolean, number];
function useVisible<T extends Element>(opts?: IntersectionObserverInit & { withRatio?: boolean }): [RefCallback<T>, boolean] | [RefCallback<T>, boolean, number] {
	const nodeRef = useRef<T>();
	const observer = useRef<ResizeObserver>();
	const notifRef = useRef<() => void>();
	const prevState = useRef({ isVisible: false, ratio: 0 });
	const currentState = useRef({ isVisible: false, ratio: 0 });

	useEffectOnce(() => () => {
		nodeRef.current = undefined;
		observer.current?.disconnect();
		observer.current = undefined;
	});

	const refCb = useCallback((node: T) => {
		if (!node) {
			return;
		}
		if (node && (!nodeRef.current || nodeRef.current !== node)) {
			nodeRef.current = node;
			observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
				const { isIntersecting, intersectionRatio } = entries[0];
				currentState.current = {
					isVisible: isIntersecting,
					ratio: intersectionRatio
				}
				if (isIntersecting !== prevState.current.isVisible || intersectionRatio !== prevState.current.ratio) {
					notifRef.current && notifRef.current();
				}
			}, {root: opts?.root, rootMargin: opts?.rootMargin, threshold: opts?.threshold});
			observer.current.observe(node);
		}
	}, [opts?.root, opts?.rootMargin, opts?.threshold])

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			return () => {
				notifRef.current = undefined;
			}
		}, []),
		useCallback(() => {
			if (currentState.current.isVisible !== prevState.current.isVisible || currentState.current.ratio !== prevState.current.ratio) {
				prevState.current = currentState.current;
			}
			return opts?.withRatio
				? prevState.current
				: prevState.current.isVisible
		}, [opts?.withRatio])
	);

	if (opts?.withRatio) {
		return [
			refCb,
			(state as {isVisible: boolean, ratio: number}).isVisible,
			(state as {isVisible: boolean, ratio: number}).ratio
		]
	}

	return [
		refCb,
		state as boolean
	];
}

export { useVisible };