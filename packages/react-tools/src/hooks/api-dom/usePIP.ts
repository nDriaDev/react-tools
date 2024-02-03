import { RefObject, useCallback } from "react";
import { UsePIPProps, UsePIPResult } from "../../models";

/**
 * **`usePIP`**: Hook to use PIP [(Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/usePIP)
 * @param {UsePIPProps} param - object
 * @param {RefObject<HTMLVideoElement>|HTMLVideoElement} param.target - element to PIP.
 * @param {()=>void} [param.onOpen] - function that will be executed on PIP opening.
 * @param {(pip: PictureInPictureWindow)=>void} [param.onOpened] - function that will be executed when PIP is opened.
 * @param {(evt: PictureInPictureEvent)=>void} [param.onClose] - function that will be executed on PIP closing.
 * @param {(err: unknown)=>void} [param.onError] - function that will be executed when error is throwing.
 * @returns {UsePIPResult} result
 * Object with three properties:
 * - __isSupported__: boolean that indicates if PIP is supported or not.
 * - __openPIP__: function to open PIP.
 * - __closePIP__: function to close PIP.
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