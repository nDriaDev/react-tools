import { useCallback, useRef } from "react"
import { UseIdleCallbackProps, UseIdleCallbackResult } from "../../models";

/**
 * **`useIdleCallback`**: Hook to invoke a callback when the browser is idle.
 * @see [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) in React. The __options__ parameter differs from _IdleRequestOptions_ type: it adds the possibility to pass another property __unsupportedBehavior__ to specify what do if requestIdleCallback is not supported.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useIdleCallback)
 * @param {UseIdleCallbackProps["cb"]} cb - {@link UseIdleCallbackProps["cb"]}
 * @param {UseIdleCallbackProps["opts"]} [opts] - {@link UseIdleCallbackProps["opts"]}
 * @returns {UseIdleCallbackResult} result {@link UseIdleCallbackResult}
 */
export const useIdleCallback = (cb: UseIdleCallbackProps["cb"], opts?: UseIdleCallbackProps["opts"]): UseIdleCallbackResult => {
	const { timeout } = opts || {};
	const isSupported = "requestIdleCallback" in window;
	const idRequest = useRef<number|null>();

	const invoke = useRef(
		"requestIdleCallback" in window
			? (fn: typeof cb, opt: {timeout?: number})=> requestIdleCallback(fn, opt)
			: opts && "unsupportedBehavior" in opts
				? opts.unsupportedBehavior === "immediatly"
					? undefined
					: opts.unsupportedBehavior === "animationFrame"
						? (fn: typeof cb) =>requestAnimationFrame(fn as unknown as FrameRequestCallback)
						: (fn: typeof cb, opt: { timeout?: number }) =>setTimeout(fn, opt.timeout)
				: () => { }
	);
	const cancel = useRef(
		"requestIdleCallback" in window
			? cancelIdleCallback
			: opts && "unsupportedBehavior" in opts
				? opts.unsupportedBehavior === "immediatly"
					? undefined
					: opts.unsupportedBehavior === "animationFrame"
						? cancelAnimationFrame
						: clearTimeout
				: () => { }
	);

	return [
		isSupported,
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
