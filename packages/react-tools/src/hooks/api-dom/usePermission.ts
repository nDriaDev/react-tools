import { useCallback, useMemo, useRef } from "react";
import { TPermissionState, TPermissionName, UsePermissionResult } from "../../models";
import { detectBrowser } from "../../utils";
import { useSyncExternalStore } from "../state";

const WEBKIT_PERMISSIONS = ["accelerometer", "background-fetch", "bluetooth", "camera", "display-capture", "geolocation", "gyroscope", "magnetometer", "microphone", "midi", "nfc", "notifications", "push", "screen-wake-lock", "speaker-selection"];
const FIREFOX_PERMISSIONS = ["geolocation", "notifications", "push", "persistent-storage", "midi", "storage_access", "screen-wake-lock"];
const CHROME_PERMISSIONS = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "background-fetch", "background-sync", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "screen-wake-lock", "nfc", "display-capture", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler", "idle-detection", "periodic-background-sync", "system-wake-lock", "storage-access", "window-management", "window-placement", "local-fonts", "top-level-storage-access", "captured-surface-control"];

/**
 * **`usePermission`**: Hook to query the status of API permissions attributed to the current context. Refer to [PermissionAPI](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API).
 * @param {TPermissionName} permission - name of the API whose permissions you want to query.
 * @returns {UsePermissionResult} result
 * Array of two elements:
 * - first element: current state of the request permission: one of __'asking'__, __'granted'__, __'denied'__, __'prompt'__ or __'not supported'__.
 * - second element: function to manual query fot permission status.
 */
export function usePermission(permission: TPermissionName): UsePermissionResult {
	const permissionStateRef = useRef<TPermissionState>("asking");
	const asked = useRef(false);
	const notifyRef = useRef<() => void>();

	if (!asked.current) {
		asked.current = true;
		navigator.permissions.query({ name: permission as PermissionName })
			.then(stat => {
				permissionStateRef.current = stat.state;
				stat.onchange = () => {
					permissionStateRef.current = stat.state;
					notifyRef.current && notifyRef.current();
				}
				notifyRef.current && notifyRef.current();
			})
			.catch(() => {
				const browser = detectBrowser();
				if (browser === "firefox" && !FIREFOX_PERMISSIONS.includes(permission)) {
					permissionStateRef.current = "not supported";
					notifyRef.current && notifyRef.current();
				}
				if (browser === "safari" && !WEBKIT_PERMISSIONS.includes(permission)) {
					permissionStateRef.current = "not supported";
					notifyRef.current && notifyRef.current();
				}
				if (["edge", "chrome", "opera"].includes(browser) && !CHROME_PERMISSIONS.includes(permission)) {
					permissionStateRef.current = "not supported";
					notifyRef.current && notifyRef.current();
				}
				if (browser === "No detection") {
					permissionStateRef.current = "prompt";
					notifyRef.current && notifyRef.current();
				}
			})
	}

	const query = useCallback(() => {
		return navigator.permissions.query({ name: permission as PermissionName })
			.then(stat => {
				permissionStateRef.current = stat.state;
				stat.onchange = () => {
					permissionStateRef.current = stat.state;
					notifyRef.current && notifyRef.current();
				}
				notifyRef.current && notifyRef.current();
				return stat.state as TPermissionState;
			})
			.catch(err => {
				const browser = detectBrowser();
				if (browser === "firefox" && !FIREFOX_PERMISSIONS.includes(permission)) {
					return "not supported" as TPermissionState;
				}
				if (browser === "safari" && !WEBKIT_PERMISSIONS.includes(permission)) {
					return "not supported" as TPermissionState;
				}
				if (["edge", "chrome", "opera"].includes(browser) && !CHROME_PERMISSIONS.includes(permission)) {
					return "not supported" as TPermissionState;
				}
				throw err;
			})
	}, [permission])

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			return () => {
				notifyRef.current = undefined;
			}
		}, []),
		useMemo(() => {
			let status: TPermissionState = "asking";
			return () => {
				status !== permissionStateRef.current && (status = permissionStateRef.current);
				return status;
			}
		}, [])
	);

	return [state, query];
}