import { useCallback, useMemo, useRef } from "react"
import { useSyncExternalStore } from ".";

/**
 * **`useScreenWakeLock`**: Hook to use [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API).
 * @param {(evt?:Event)=>void} [onRelease] - function that will be executed on release event.
 * @returns {[{isSupported: boolean, type: "screen"|null, isActive: boolean|null}, ()=>Promise<void>, ()=>Promise<void>]} result - An array with three element:
 * - 1. __info__: object with these properties:
 * 		- _isSupported_: returns a boolean to know if API is available.
 * 		- _type_: return a string representation of the currently acquired WakeLock type.
 * 		- _isActive_: returns a boolean indicating whether the WakeLockSentinel has been activated.
 * - 2. __acquire__: function to request a WakeLock.
 * - 3. __release__: function to release a WakeLock.
 */
export const useScreenWakeLock = (onRelease?: (evt?: Event) =>void): [{isSupported: boolean, type: "screen"|null, isActive: boolean|null}, ()=>Promise<void>, ()=>Promise<void>] => {
	const notifyRef = useRef<() => void>();
	const internalWakeLock = useRef<WakeLockSentinel>();
	const listener = useRef<(ev: Event)=>any>((evt: Event) => {
		onRelease!(evt);
		notifyRef.current && notifyRef.current();
	})
	const acquire = useRef(async () => {
		if (!!navigator && "wakeLock" in navigator) {
			internalWakeLock.current = await navigator.wakeLock.request("screen");
			onRelease && internalWakeLock.current.addEventListener("release", listener.current);
			notifyRef.current && notifyRef.current();
		}
	});
	const release = useRef(async () => {
		if (internalWakeLock.current) {
			await internalWakeLock.current.release();
			internalWakeLock.current.removeEventListener("release", listener.current);
			internalWakeLock.current = undefined;
			notifyRef.current && notifyRef.current();
		}
	});

	const value = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			return () => {
				notifyRef.current = undefined;
			}
		}, []),
		useMemo(() => {
			let info: {isSupported: boolean, type: "screen" | null, isActive: boolean | null} = {
				isSupported: !!navigator && "wakeLock" in navigator,
				type: null,
				isActive: null,
			};
			return () => {
				const isSupported = !!navigator && "wakeLock" in navigator;
				let type=null, isActive=null;
				if (internalWakeLock.current) {
					type = internalWakeLock.current.type;
					isActive = !internalWakeLock.current.released;
				}
				if (isSupported !== info.isSupported || type !== info.type || isActive !== info.isActive) {
					info = {
						isSupported,
						type,
						isActive: isActive
					};
				}
				return info;
			}
		}, [])
	);

	return [value, acquire.current, release.current];
}