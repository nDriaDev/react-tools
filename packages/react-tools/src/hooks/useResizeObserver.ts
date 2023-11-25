import { RefCallback, useCallback, useRef } from "react"

/**
 * **`useResizeObserver`**: Hook to use Resize Observer. Refer to [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
 * @param {ResizeObserverCallback} cb - The function called whenever an observed resize occurs. The callback is called with two parameters: __entries__ and __observer__.
 * @param {ResizeObserverOptions} [opts] - An options object allowing you to set options for the observation.
 * @returns {[RefCallback<T>, ()=>void, ()=>void]} result - array with: cb for ref component attribute to observe, function to _disconnect_ observer, function to _reconnect_ observer.
 */
export const useResizeObserver = <T extends Element>(cb: ResizeObserverCallback, opts?: ResizeObserverOptions):[RefCallback<T>, () => void, () => void] => {
	const observer = useRef<ResizeObserver>();
	const working = useRef(true);
	const nodeRef = useRef<T>();

	return [
		useCallback((node: T) => {
			nodeRef.current = node;
			if (!working.current) {
				return;
			}
			if (!node) {
				if (observer.current) {
					observer.current.disconnect();
					observer.current = undefined;
					nodeRef.current = undefined;
					working.current = true;
				}
			} else {
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