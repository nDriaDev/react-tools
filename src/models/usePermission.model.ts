/**
 * Extended set of permission names beyond the standard `PermissionName` type.
 * Includes vendor-specific and draft API permissions supported by various browsers.
 */
export type PermissionNamePolyfill =
	| "midi"
	| "ambient-light-sensor"
	| "accessibility-events"
	| "clipboard-read"
	| "clipboard-write"
	| "payment-handler"
	| "idle-detection"
	| "periodic-background-sync"
	| "system-wake-lock"
	| "window-management"
	| "window-placement"
	| "local-fonts"
	| "top-level-storage-access"
	| "captured-surface-control"
	| "persistent-storage"
	| "storage-access"
	| "accelerometer"
	| "background-fetch"
	| "bluetooth"
	| "camera"
	| "display-capture"
	| "geolocation"
	| "gyroscope"
	| "magnetometer"
	| "microphone"
	| "nfc"
	| "notifications"
	| "push"
	| "screen-wake-lock"
	| "speaker-selection";

/**
 * Union of the standard `PermissionName` and the extended `PermissionNamePolyfill`.
 * Used by [usePermission](https://react-tools.ndria.dev/hooks/api-dom/usePermission).
 */
export type TPermissionName = PermissionName | PermissionNamePolyfill;

/**
 * Possible permission states returned by `usePermission`.
 * Extends the standard `PermissionState` with:
 * - `"not supported"` — the Permissions API or the specific permission name is not available.
 * - `"asking"` — a permission request is currently in progress.
 */
export type TPermissionState = PermissionState | "not supported" | "asking";

/**
 * Result tuple returned by [usePermission](https://react-tools.ndria.dev/hooks/api-dom/usePermission).
 */
export type UsePermissionResult = [
	/** current permission state (`"granted"`, `"denied"`, `"prompt"`, `"not supported"`, `"asking"`). */
	TPermissionState,
	/** `requestPermission()` — triggers a permission request and returns the resulting state. */
	() => Promise<TPermissionState>
];
