import { RefObject, useCallback } from "react";
import { UsePIPProps, UsePIPResult } from "../../models";

/**
 * **`usePIP`**:
 * @see [(Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/usePIP)
 * @param {UsePIPProps} param - {@link UsePIPProps}
 * @returns {UsePIPResult} result {@link UsePIPResult}
 */
export const usePIP = ({ onOpen, onOpened, onClose, onError, target }: UsePIPProps): UsePIPResult => {
	const isSupported = "pictureInPictureElement" in document;

	const openPIP = useCallback(() => {
		const element = (target as RefObject<HTMLVideoElement>)?.current
			? (target as RefObject<HTMLVideoElement>).current
			: target as HTMLVideoElement;
		if (!("pictureInPictureElement" in document)) {
			return Promise.resolve();
		}
		const onOpenCb = (e: PictureInPictureEvent) => {
			!!onOpen && onOpen(e)
		};
		const onCloseCb = (e: PictureInPictureEvent) => {
			!!onClose && onClose(e);
		};

		element!.addEventListener("enterpictureinpicture", onOpenCb as EventListenerOrEventListenerObject, { capture: true, once: true });

		return element!.requestPictureInPicture()
			.then(pip => {
				!!onOpened && onOpened(pip);
				element!.addEventListener("leavepictureinpicture", onCloseCb as EventListenerOrEventListenerObject, {capture: true, once: true});
			})
			.catch(err => {
				if (onError) {
					onError(err);
				} else {
					throw err;
				}
			});
	}, [onOpen, onOpened, onClose, onError, target]);

	const closePIP = useCallback(() => {
		if (!("pictureInPictureElement" in document)) {
			return Promise.resolve();
		}
		return document.exitPictureInPicture()
			.catch(err => {
				if (onError) {
					onError(err);
				} else {
					throw err;
				}
			});
	}, [onError]);

	return { isSupported, openPIP, closePIP };
}