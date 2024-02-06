import { useCallback } from "react";

/**
 * **`useVibrate`**: Hook to use device vibration hardware. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useVibrate)
 * @returns {{isSupported: boolean, vibrate: ((pattern: number | number[]) => void), cancel: ()=>void}} result - object with:
 * - _isSupported_: boolean to detect if vibration is supported or not.
 * - _vibrate_: function to activate device vibration hardware.
 * - _cancel_: function to stop vibration running.
 */
export const useVibrate = ():{isSupported: boolean, vibrate: ((pattern: number | number[]) => void), cancel: ()=>void} => {
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