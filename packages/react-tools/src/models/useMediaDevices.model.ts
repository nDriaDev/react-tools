export type UseMediaDevicesProps = "devicesList" | "supportedConstraintsList" | "DisplayCapture" | "mediaInputCapture";

export type UseMediaDevicesResult = ((onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaDeviceInfo[]>) | ((onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => MediaTrackSupportedConstraints) | ((options?: DisplayMediaStreamOptions, onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaStream>) | ((constraints?: MediaStreamConstraints, onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaStream>);

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
