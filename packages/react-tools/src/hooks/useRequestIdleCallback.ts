import { useCallback, useRef } from "react"

/**
 * **`useRequestIdleCallback`**: Hook to use [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) in React. The __options__ parameter differs from _IdleRequestOptions_ type: it adds the possibility to pass another property __unsupportedBehavior__ to specify what do if requestIdleCallback is not supported.
 * @param {(deadline?: IdleDeadline | DOMHighResTimeStamp | void)=> void} cb -callback that should be called in the near future.
 * @param {IdleRequestOptions & { unsupportedBehavior: "animationFrame"|"timeout"|"immediatly" }} [opts] - Contains optional configuration parameters.
 * @returns {[()=>void, ()=>void]} result - array where functions to invoke and cancel execution.
 */
export const useRequestIdleCallback = (cb: (deadline?: IdleDeadline | DOMHighResTimeStamp | void) => void, opts?: {timeout: number , unsupportedBehavior?: "animationFrame" | "timeout" | "immediatly" }): [() => void, () => void] => {
	const {timeout, unsupportedBehavior} = opts || {};
	const idRequest = useRef<number|null>();

	const invoke = useRef(
		requestIdleCallback !== undefined
			? (fn: typeof cb, opt: {timeout?: number})=> requestIdleCallback(cb, opt)
			: unsupportedBehavior
				? unsupportedBehavior === "immediatly"
					? undefined
					: unsupportedBehavior === "animationFrame"
						? (fn: typeof cb) =>requestAnimationFrame(fn)
						: (fn: typeof cb, opt: { timeout?: number }) =>setTimeout(()=>cb, opt.timeout)
				: () => { }
	);
	const cancel = useRef(
		requestIdleCallback !== undefined
			? cancelIdleCallback
			: unsupportedBehavior
				? unsupportedBehavior === "immediatly"
					? undefined
					: unsupportedBehavior === "animationFrame"
						? cancelAnimationFrame
						: clearTimeout
				: () => { }
	);

	return [
		useCallback(() => {
			let id;
			if (invoke.current) {
				id = invoke.current(cb, { timeout: timeout });
			}
			idRequest.current = id ? id as unknown as number : undefined;
		}, [cb, timeout]),
		useCallback(() => idRequest.current && cancel.current && cancel.current(idRequest.current), [])
	];
}