import { useCallback, useRef } from "react";
import { useSyncExternalStore } from "../state"
import { UseDeviceMotionResult } from "../../models";

const listeners = new Set<(evt:DeviceMotionEvent) => void>();
const handler = (evt: DeviceMotionEvent) => listeners.forEach(l => l(evt));

/**
 * **`useDeviceMotion`**:
 * @see [device motion](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicemotion_event).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useDeviceMotion)
 * @returns {UseDeviceMotionResult} result {@link UseDeviceMotionResult}
 */
export const useDeviceMotion = (): UseDeviceMotionResult => {
	const prev = useRef<UseDeviceMotionResult>({
		isSupported: !!window && "DeviceMotionEvent" in window,
		acceleration: null,
		accelerationIncludingGravity: null,
		interval: null,
		rotationRate: null
	});
	const curr = useRef<UseDeviceMotionResult>();


	return useSyncExternalStore(
		useCallback(notif => {
			const listener = (evt: DeviceMotionEvent) => {
				const { acceleration, accelerationIncludingGravity, interval, rotationRate } = evt;
				curr.current = {
					isSupported: true,
					acceleration,
					accelerationIncludingGravity,
					rotationRate,
					interval
				};
				notif();
			};
			if (!!window && "DeviceMotionEvent" in window) {
				listeners.add(listener);
				listeners.size === 1 && addEventListener("devicemotion", handler);
			}
			return () => {
				if (!!window && "DeviceMotionEvent" in window) {
					listeners.delete(listener);
					listeners.size === 0 && window.removeEventListener("devicemotion", handler)
				}
			}
		}, []),
		useCallback(() => {
			if (
				curr.current &&
				(
					prev.current.isSupported !== curr.current.isSupported ||
					prev.current.acceleration?.x !== curr.current.acceleration?.x ||
					prev.current.acceleration?.y !== curr.current.acceleration?.y ||
					prev.current.acceleration?.z !== curr.current.acceleration?.z ||
					prev.current.accelerationIncludingGravity?.x !== curr.current.accelerationIncludingGravity?.x ||
					prev.current.accelerationIncludingGravity?.y !== curr.current.accelerationIncludingGravity?.y ||
					prev.current.accelerationIncludingGravity?.z !== curr.current.accelerationIncludingGravity?.z ||
					prev.current.rotationRate?.alpha !== curr.current.rotationRate?.alpha ||
					prev.current.rotationRate?.beta !== curr.current.rotationRate?.beta ||
					prev.current.rotationRate?.gamma !== curr.current.rotationRate?.gamma ||
					prev.current.interval !== curr.current.interval
				)
			) {
				prev.current = curr.current;
			}
			return prev.current;
		}, [])
	);
}