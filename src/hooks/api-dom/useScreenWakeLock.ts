import { useCallback, useMemo, useRef } from "react"
import { useSyncExternalStore } from "../state";
import { UseScreenWakeLockProps, UseScreenWakeLockResult } from "../../models";

/**
 * **`useScreenWakeLock`**:
 * @see [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useScreenWakeLock)
 * @param {UseScreenWakeLockProps["onRelease"]} [onRelease] - {@link UseScreenWakeLockProps}
 * @returns {UseScreenWakeLockResult} result {@link UseScreenWakeLockResult}
 */
export const useScreenWakeLock = (onRelease?: UseScreenWakeLockProps["onRelease"]): UseScreenWakeLockResult => {
	const notifyRef = useRef<() => void>();
	const internalWakeLock = useRef<WakeLockSentinel>();
	const listener = useRef<(ev: Event)=>unknown>((evt: Event) => {
		onRelease?.(evt);
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