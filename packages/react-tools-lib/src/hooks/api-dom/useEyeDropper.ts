import { useCallback } from "react";

/**
 * **`useEyeDropper`**: Hook to use [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useEyeDropper)
 * @param {Object} opts - options.
 * @param {()=>void} [opts.onStart] - function that will be executed on __open__ invocation.
 * @param {(result: `#${string}`) => void} [opts.onFinish] - function that will be on __open__ retuns.
 * @returns {{isSupported: boolean, open: (signal?: AbortSignal) => Promise<`#${string}`>|Promise<void>}} result - __isSupported__ to known if EyeDropper API is supported and __share__ function to use EyeDropper API.
 */
export const useEyeDropper = ({ onStart, onFinish }: { onStart?: () => void, onFinish?: (result: `#${string}`) => void } = {}) => {
	const isSupported = !!window && "EyeDropper" in window;

	const open = useCallback((signal?: AbortSignal) => {
		if (!!window && "EyeDropper" in window) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const eyeDropper = new (window as any).EyeDropper();
			return Promise.resolve(onStart && onStart())
				.then(() => eyeDropper.open({ signal }))
				.then(({ sRGBHex }: { sRGBHex: `#${string}`}) => {
					onFinish && onFinish(sRGBHex);
					return sRGBHex;
				})
				.catch(err => {
					throw err;
				})
		} else {
			return Promise.resolve();
		}
	}, [onFinish, onStart]);

	return {
		isSupported,
		open
	}
}