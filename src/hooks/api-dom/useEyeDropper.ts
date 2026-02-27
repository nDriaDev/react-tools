import { useCallback } from "react";
import { UseEyeDropperProps, UseEyeDropperResult } from "../../models";

/**
 * **`useEyeDropper`**:
 * @see [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useEyeDropper)
 * @param {UseEyeDropperProps} param - {@link UseEyeDropperProps}
 * @returns {UseEyeDropperResult} result {@link UseEyeDropperResult}
 */
export const useEyeDropper = ({ onStart, onFinish }: UseEyeDropperProps = {}): UseEyeDropperResult => {
	const isSupported = !!window && "EyeDropper" in window;

	const open = useCallback((signal?: AbortSignal) => {
		if (!!window && "EyeDropper" in window) {
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