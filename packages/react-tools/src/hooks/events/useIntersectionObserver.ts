import { RefCallback, useCallback, useRef } from "react"
import { useEffectOnce } from "../lifecycle";

/**
 * **`useIntersectionObserver`**: Hook to use Intersection Observer. Refer to [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
 * @param {IntersectionObserverCallback} cb - The function which is called when the percentage of the target element is visible crosses a threshold. The callback is called with two parameters: __entries__ and __observer__.
 * @param {IntersectionObserverInit} [opts] - An options object allowing you to set options for the observation.
 * @returns {[RefCallback<T>, ()=>void, ()=>void]} result - array with: callback for ref element attribute to observe, function to _disconnect_ observer, function to _reconnect_ observer.
 */
export const useIntersectionObserver = <T extends Element>(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit):[RefCallback<T>, () => void, () => void] => {
	const observer = useRef<IntersectionObserver>();
	const working = useRef(true);
	const nodeRef = useRef<T>();
	const cbRef = useRef(cb);

	useEffectOnce(() => () => {
		nodeRef.current = undefined;
		observer.current?.disconnect();
		observer.current = undefined;
	});

	return [
		useCallback((node: T) => {
			if (!working.current || !node) {
				return;
			}
			if (node && (!nodeRef.current || nodeRef.current !== node)) {
				nodeRef.current = node;
				observer.current = new IntersectionObserver(cb, opts);
				observer.current.observe(node);
			}
			if (cbRef.current !== cb && observer.current && node) {
				cbRef.current = cb;
				observer.current?.disconnect();
				observer.current = undefined;
				observer.current = new IntersectionObserver(cb, opts);
				observer.current.observe(node);
			}
		}, [cb, opts]),
		useCallback(() => {
			if (working.current) {
				working.current = false;
				!!observer.current && !!nodeRef.current && observer.current.unobserve(nodeRef.current);
			}
		}, []),
		useCallback(() => {
			if (!working.current) {
				working.current = true;
				!!observer.current && !!nodeRef.current && observer.current?.observe(nodeRef.current!)
			}
		}, [])
	]
}