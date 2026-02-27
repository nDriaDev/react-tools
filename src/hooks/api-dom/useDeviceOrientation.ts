import { useCallback, useRef } from "react";
import { useSyncExternalStore } from "../state"
import { UseDeviceOrientationResult } from "../../models";

const listeners = new Set<(evt:DeviceOrientationEvent) => void>();
const handler = (evt: DeviceOrientationEvent) => listeners.forEach(l => l(evt));

/**
 * **`useDeviceOrientation`**:
 * @see [device orientation](https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useDeviceOrientation)
 * @returns {UseDeviceOrientationResult} result {@link UseDeviceOrientationResult}
 */
export const useDeviceOrientation = (): UseDeviceOrientationResult => {
	const prev = useRef<UseDeviceOrientationResult>({
		isSupported: !!window && "DeviceOrientationEvent" in window,
		absolute: null,
		alpha: null,
		beta: null,
		gamma: null
	});
	const curr = useRef<UseDeviceOrientationResult>();


	return useSyncExternalStore(
		useCallback(notif => {
			const listener = (evt: DeviceOrientationEvent) => {
				const { absolute, alpha, beta, gamma } = evt;
				curr.current = {
					isSupported: true,
					absolute,
					alpha,
					beta,
					gamma
				};
				notif();
			};
			if (!!window && "DeviceOrientationEvent" in window) {
				listeners.add(listener);
				listeners.size === 1 && addEventListener("deviceorientation", handler);
			}
			return () => {
				if (!!window && "DeviceOrientationEvent" in window) {
					listeners.delete(listener);
					listeners.size === 0 && window.removeEventListener("deviceorientation", handler)
				}
			}
		}, []),
		useCallback(() => {
			if (
				curr.current &&
				(
					prev.current.isSupported !== curr.current.isSupported ||
					prev.current.absolute !== curr.current.absolute ||
					prev.current.alpha !== curr.current.alpha ||
					prev.current.beta !== curr.current.beta ||
					prev.current.gamma !== curr.current.gamma
				)
			) {
				prev.current = curr.current;
			}
			return prev.current;
		}, [])
	);
}