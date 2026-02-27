import { useRef } from "react"
import { useEffectOnce } from "../lifecycle";
import { TDisplayMediaStreamOptions, UseMediaDevicesProps, UseMediaDevicesResult } from "../../models";

let mediaDevicesOnChangeAttached = false;
const mediaDevicesListeners = new Set<(evt: Event) => Promise<void> | void>();

/**
 * **`useMediaDevices`**:
 * @see [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface methods, that give access to any hardware source of media data.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useMediaDevices)
 * @param {UseMediaDevicesProps} param - {@link UseMediaDevicesProps}
 * @returns {UseMediaDevicesResult} result {@link UseMediaDevicesResult}
 */
function useMediaDevices(action: "devicesList"): (onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaDeviceInfo[]>;
function useMediaDevices(action: "supportedConstraintsList"): (onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => MediaTrackSupportedConstraints;
function useMediaDevices(action: "DisplayCapture"): (options?: DisplayMediaStreamOptions, onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaStream>;
function useMediaDevices(action: "mediaInputCapture"): (constraints?: MediaStreamConstraints, onDevicesChange?: ((evt: Event) => void | Promise<void>) | undefined) => Promise<MediaStream>;
function useMediaDevices(action: UseMediaDevicesProps): UseMediaDevicesResult {
	const listener = useRef<(evt: Event) => Promise<void> | void>();

	if (!mediaDevicesOnChangeAttached) {
		!!navigator.mediaDevices && "ondevicechange" in navigator.mediaDevices && (navigator.mediaDevices.ondevicechange = (evt: Event) => {
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