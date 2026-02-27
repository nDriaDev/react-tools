/**
 * Prop accepted by [useMediaDevices](https://react-tools.ndria.dev/hooks/api-dom/useMediaDevices)
 *
 */
export type UseMediaDevicesProps = "devicesList" | "supportedConstraintsList" | "DisplayCapture" | "mediaInputCapture";

/**
 * Represents the return type of [useMediaDevices](https://react-tools.ndria.dev/hooks/api-dom/useMediaDevices), which varies depending on the `action`
 * parameter passed to the hook. Each variant corresponds to a specific `MediaDevices` API method.
 *
 * @remarks
 * This is a union of four function signatures — one per supported action:
 *
 * - **`"devicesList"`** — Returns a function that calls `enumerateDevices()` and resolves with
 *   the list of available media input/output devices. Optionally registers a `devicechange`
 *   listener for the lifetime of the component.
 *
 * - **`"supportedConstraintsList"`** — Returns a function that calls `getSupportedConstraints()`
 *   and returns an object describing which media track constraints the browser supports.
 *   Optionally registers a `devicechange` listener.
 *
 * - **`"DisplayCapture"`** — Returns a function that calls `getDisplayMedia()` and resolves with
 *   a `MediaStream` capturing a screen, window, or tab. Accepts optional
 *   {@link DisplayMediaStreamOptions} and an optional `devicechange` listener.
 *
 * - **`"mediaInputCapture"`** — Returns a function that calls `getUserMedia()` and resolves with
 *   a `MediaStream` from a camera and/or microphone. Accepts optional
 *   {@link MediaStreamConstraints} and an optional `devicechange` listener.
 *
 * @param onDevicesChange - Optional callback invoked whenever the set of available media devices
 *   changes (i.e. on the `devicechange` event). Available on all four variants as the last
 *   parameter. Not supported in all browsers — the hook throws if `ondevicechange` is not
 *   available and this argument is provided.
 * @param options - (`"DisplayCapture"` variant only) Options forwarded to `getDisplayMedia()`.
 *   See {@link DisplayMediaStreamOptions}.
 * @param constraints - (`"mediaInputCapture"` variant only) Constraints forwarded to
 *   `getUserMedia()`. See {@link MediaStreamConstraints}.
 *
 */
export type UseMediaDevicesResult = (
	(onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaDeviceInfo[]>) |
	((onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => MediaTrackSupportedConstraints) |
	((options?: DisplayMediaStreamOptions, onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaStream>) |
	((constraints?: MediaStreamConstraints, onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaStream>
);

/**The CaptureController interface provides methods that can be used to further manipulate a capture session separate from its initiation via MediaDevices.getDisplayMedia().*/
export interface CaptureController {
	/**controls whether the captured tab or window will be focused when an associated MediaDevices.getDisplayMedia() Promise fulfills, or whether the focus will remain with the tab containing the capturing app.*/
	setFocusBehavior: (
		/**An enumerated value that describes whether the user agent should transfer focus to the captured display surface, or keep the capturing app focused. Possible values are focus-captured-surface (transfer focus) and no-focus-change (keep focus on the capturing app).*/
		focusBehavior: "focus-captured-surface" | "no-focus-change"
	) => void;
}

export type TDisplayMediaStreamOptions = DisplayMediaStreamOptions & {
	controller?: CaptureController;
}
