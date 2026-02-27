import { useCallback } from "react";
import { UseVibrateResult } from "../../models";

/**
 * **`useVibrate`**: Hook to use device vibration hardware.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useVibrate)
 * @returns {UseVibrateResult} result {@link UseVibrateResult}
 */
export const useVibrate = (): UseVibrateResult => {
	const isSupported = !!navigator && ("vibrate" in navigator || "mozVibrate" in navigator);

	const vibrate = useCallback((pattern: number | number[]) => {
		!!navigator && ("vibrate" in navigator || "mozVibrate" in navigator)
			? "vibrate" in navigator
				? navigator.vibrate(pattern)
				: (navigator as { mozVibrate: (patrn: typeof pattern) => void }).mozVibrate(pattern)
			: void 0;
	}, []);

	const cancel = useCallback(() => {
		!!navigator && ("vibrate" in navigator || "mozVibrate" in navigator)
			? "vibrate" in navigator
				? navigator.vibrate(0)
				: (navigator as { mozVibrate: (patrn: number) => void }).mozVibrate(0)
			: void 0;
	}, []);

	return {
		isSupported,
		vibrate,
		cancel
	}
}