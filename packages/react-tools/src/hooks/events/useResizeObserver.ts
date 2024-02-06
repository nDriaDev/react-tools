import { RefCallback, useCallback, useRef } from "react"
import { useEffectOnce } from "../lifecycle";

/**
 * **`useResizeObserver`**: Hook to use Resize Observer. Refer to [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useResizeObserver)
 * @param {ResizeObserverCallback} cb - The function called whenever an observed resize occurs. The callback is called with two parameters: __entries__ and __observer__.
 * @param {ResizeObserverOptions} [opts] - An options object allowing you to set options for the observation.
 * @returns {[RefCallback<T>, ()=>void, ()=>void]} result - array with: cb for ref component attribute to observe, function to _disconnect_ observer, function to _reconnect_ observer.
 */
export const useResizeObserver = <T extends Element>(cb: ResizeObserverCallback, opts?: ResizeObserverOptions):[RefCallback<T>, () => void, () => void] => {
	const observer = useRef<ResizeObserver>();
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
				observer.current = new ResizeObserver(cb);
				observer.current.observe(node, opts);
			}
			if (cbRef.current !== cb && observer.current && node) {
				cbRef.current = cb;
				observer.current?.disconnect();
				observer.current = undefined;
				observer.current = new ResizeObserver(cb);
				observer.current.observe(node, opts);
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
				!!observer.current && !!nodeRef.current && observer.current?.observe(nodeRef.current!, opts)
			}
		}, [opts])
	]
}