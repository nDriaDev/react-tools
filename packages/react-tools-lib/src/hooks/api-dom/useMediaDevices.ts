import { useRef } from "react"
import { useEffectOnce } from "../lifecycle";
import { TDisplayMediaStreamOptions, UseMediaDevicesProps, UseMediaDevicesResult } from "../../models";

let mediaDevicesOnChangeAttached = false;
const mediaDevicesListeners = new Set<(evt: Event) => Promise<void> | void>();

/**
 * **`useMediaDevices`**: Hook to use [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface methods, that give access to any hardware source of media data. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useMediaDevices)
 * @param {UseMediaDevicesProps} action - it is a string that identifies which method to return as a result. It can be _devicesList_, _supportedConstraintsList_, _DisplayCapture_, or _mediaInputCapture_.
 * @returns {UseMediaDevicesResult} result - the function returned by __action__ parameter value.
 * if __action__ is:
 * - _devicesList_: so _result_ is __enumeratedDevices__ method of MediaDevices interface.
 * - _supportedConstraintsList_: so _result_ is __getSupportedConstraints__ method of MediaDevices interface.
 * - _DisplayCapture_: so _result_ is __getDisplayMedia__ method of MediaDevices interface.
 * - _mediaInputCapture_: so _result_ is __getUserMedia__ method of MediaDevices interface.
 */
function useMediaDevices(action: "devicesList"): (onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaDeviceInfo[]>;
function useMediaDevices(action: "supportedConstraintsList"): (onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => MediaTrackSupportedConstraints;
function useMediaDevices(action: "DisplayCapture"): (options?: DisplayMediaStreamOptions, onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaStream>;
function useMediaDevices(action: "mediaInputCapture"): (constraints?: MediaStreamConstraints, onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaStream>;
function useMediaDevices(action: UseMediaDevicesProps): UseMediaDevicesResult {
	const listener = useRef<(evt: Event) => Promise<void> | void>();

	if (!mediaDevicesOnChangeAttached) {
		!!navigator.mediaDevices?.ondevicechange && (navigator.mediaDevices.ondevicechange = (evt: Event) => {
			mediaDevicesListeners.forEach(l => l(evt));
		})
		mediaDevicesOnChangeAttached = true;
	}

	const getDevicesList = useRef(async (onDevicesChange?: (evt: Event) => Promise<void> | void) => {
		if (!navigator.mediaDevices?.enumerateDevices) {
			throw Error("getDevicesList not supported");
		}
		if (onDevicesChange) {
			if (!("ondevicechange" in navigator.mediaDevices)) {
				throw Error("onDevicesChange not supported");
			}
			listener.current = onDevicesChange;
			mediaDevicesListeners.add(listener.current);
		}
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
			stream.getTracks().forEach(t => t.stop());
		} catch (error) {
			void 0;
		}
		return navigator.mediaDevices.enumerateDevices();
	});

	const getSupportedConstraintsList = useRef((onDevicesChange?: (evt: Event) => Promise<void> | void) => {
		if (!navigator.mediaDevices?.getSupportedConstraints) {
			throw Error("getSupportedConstraintsList not supported");
		}
		if (onDevicesChange) {
			if (!("ondevicechange" in navigator.mediaDevices)) {
				throw Error("onDevicesChange not supported");
			}
			listener.current = onDevicesChange;
			mediaDevicesListeners.add(listener.current);
		}
		return navigator.mediaDevices.getSupportedConstraints()
	});

	const getDisplay = useRef((options?: TDisplayMediaStreamOptions, onDevicesChange?: (evt: Event) => Promise<void> | void) => {
		if (!navigator.mediaDevices?.getDisplayMedia) {
			throw Error("getDisplay not supported");
		}
		if (onDevicesChange) {
			if (!("ondevicechange" in navigator.mediaDevices)) {
				throw Error("onDevicesChange not supported");
			}
			listener.current = onDevicesChange;
			mediaDevicesListeners.add(listener.current);
		}
		return navigator.mediaDevices.getDisplayMedia(options);
	});

	const getMediaInput = useRef((constraints?: MediaStreamConstraints, onDevicesChange?: (evt: Event) => Promise<void> | void) => {
		const userMediaRef = navigator.mediaDevices.getUserMedia ?? (navigator.mediaDevices as { webkitGetUserMedia?: typeof navigator.mediaDevices.getUserMedia }).webkitGetUserMedia ?? (navigator.mediaDevices as { mozGetUserMedia?: typeof navigator.mediaDevices.getUserMedia }).mozGetUserMedia ?? null;
		if (!userMediaRef) {
			throw Error("getMediaInput not supported");
		}
		if (onDevicesChange) {
			if (!("ondevicechange" in navigator.mediaDevices)) {
				throw Error("onDevicesChange not supported");
			}
			listener.current = onDevicesChange;
			mediaDevicesListeners.add(listener.current);
		}
		return userMediaRef!(constraints);
	});

	useEffectOnce(() => () => {
		!!listener.current && mediaDevicesListeners.delete(listener.current)
	});

	return action === "devicesList"
		? getDevicesList.current
		: action === "supportedConstraintsList"
			? getSupportedConstraintsList.current
			: action === "DisplayCapture"
				? getDisplay.current
				: getMediaInput.current;
}

export { useMediaDevices };