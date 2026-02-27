import { RefObject } from "react";

/**
 * Props for the [usePIP](https://react-tools.ndria.dev/hooks/api-dom/usePIP).
 */
export interface UsePIPProps {
	/** The `<video>` element to enter Picture-in-Picture mode. Accepts a `RefObject` or a direct reference. */
	target: RefObject<HTMLVideoElement> | HTMLVideoElement;
	/** Called when the PIP window is requested (before it opens). */
	onOpen?: (evt: Event) => void;
	/**
	 * Called when the PIP window has successfully opened.
	 * @param pipWindow - The `PictureInPictureWindow` object, providing `width` and `height`.
	 */
	onOpened?: (pipWindow: PictureInPictureWindow) => void;
	/** Called when the PIP window is closed (video returns to its original position). */
	onClose?: (evt: PictureInPictureEvent) => void;
	/** Called if the PIP request or close operation fails. */
	onError?: (err: unknown) => void;
}

/**
 * Result object returned by [usePIP](https://react-tools.ndria.dev/hooks/api-dom/usePIP).
 */
export interface UsePIPResult {
	/** `true` when the Picture-in-Picture API is supported by the current browser. */
	isSupported: boolean;
	/** Request Picture-in-Picture mode for the target video element. */
	openPIP: () => Promise<void>;
	/** Exit Picture-in-Picture mode, returning the video to its original container. */
	closePIP: () => Promise<void>;
}
