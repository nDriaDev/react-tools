export type PermissionNamePolyfill = "midi" | "ambient-light-sensor" | "accessibility-events" | "clipboard-read" | "clipboard-write" | "payment-handler" | "idle-detection" | "periodic-background-sync" | "system-wake-lock" | "window-management" | "window-placement" | "local-fonts" | "top-level-storage-access" | "captured-surface-control" | "persistent-storage" | "storage-access" | "accelerometer" | "background-fetch" | "bluetooth" | "camera" | "display-capture" | "geolocation" | "gyroscope" | "magnetometer" | "microphone" | "nfc" | "notifications" | "push" | "screen-wake-lock" | "speaker-selection";

export type TPermissionName = PermissionName | PermissionNamePolyfill
export type TPermissionState = PermissionState | "not supported" | "asking";

export type UsePermissionResult = [TPermissionState, () => Promise<TPermissionState>]
