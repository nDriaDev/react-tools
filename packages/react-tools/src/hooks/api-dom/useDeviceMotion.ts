import { useCallback, useRef } from "react";
import { useSyncExternalStore } from "../state"
import { DeviceMotionProps } from "../../models";

const listeners = new Set<(evt:DeviceMotionEvent) => void>();
const handler = (evt: DeviceMotionEvent) => listeners.forEach(l => l(evt));

/**
 * **`useDeviceMotion`**: Hook to handle [device motion](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicemotion_event). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useDeviceMotion)
 * @returns {DeviceMotionProps} props - device motion properties.
 */
export const useDeviceMotion = (): DeviceMotionProps => {
	const prev = useRef<DeviceMotionProps>({
		isSupported: !!window && "DeviceMotionEvent" in window,
		acceleration: null,
		accelerationIncludingGravity: null,
		interval: null,
		rotationRate: null
	});
	const curr = useRef<DeviceMotionProps>();


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