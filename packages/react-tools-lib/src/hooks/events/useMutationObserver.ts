import { RefCallback, useCallback, useRef } from "react"
import { useEffectOnce } from "../lifecycle";

/**
 * **`useMutationObserver`**: Hook to use Mutation Observer. Refer to [Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMutationObserver)
 * @param {MutationCallback} cb - The function which will be called on each DOM change that qualifies given the observed node or subtree and options. The callback takes as input two parameters: __mutationList__ and __observer__.
 * @param {MutationObserverInit} [opts] - An options object allowing you to set options for the observation.
 * @returns {[RefCallback<T>, ()=>void, ()=>void, () => MutationRecord[]|undefined]} result - array with: cb for ref component attribute to observe, function to _disconnect_ observer, function _takeRecords_ to take observer records not yet processed, function to _reconnect_ observer.
 */
export const useMutationObserver = <T extends Element>(cb: MutationCallback, opts?: MutationObserverInit): [RefCallback<T>, () => void, () => void, () => MutationRecord[] | undefined] => {
	const observer = useRef<MutationObserver>();
	const working = useRef(true);
	const nodeRef = useRef<T>();

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
				observer.current = new MutationObserver(cb);
				observer.current.observe(node, opts);
			}
		}, [cb, opts]),
		useCallback(() => {
			if (working.current) {
				working.current = false;
				if (!!observer.current && !!nodeRef.current) {
					observer.current.disconnect();
				}
			}
		}, []),
		useCallback(() => {
			if (!working.current) {
				working.current = true;
				if (!!observer.current && !!nodeRef.current) {
					observer.current.observe(nodeRef.current, opts);
				}
			}
		}, [opts]),
		useCallback(() => observer.current?.takeRecords(), []),
	]
}