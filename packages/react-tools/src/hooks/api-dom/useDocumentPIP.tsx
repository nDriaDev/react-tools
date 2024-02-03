import { PropsWithChildren, useCallback, useMemo, useRef } from "react";
import { DocumentPIPOptions, DocumentPictureInPictureEvent, UseDocumentPIPProps, UseDocumentPIPResult } from "../../models";
import { createPortal } from "react-dom";
import { useEffectOnce, useRerender } from "../lifecycle";

/**
 * **`useDocumentPIP`**: Hook to use Document PIP [(Document-Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useDocumentPIP)
 * @param {UseDocumentPIPProps} param - object
 * @param {DocumentPIPOptions} [param.options] - object
 * @param {boolean} [param.options.inheritCSS] - boolean that indicates if PIP window will inherit CSS from main window.
 * @param {Object} [param.options.window] - object
 * @param {number} [param.options.width=450] - number that indicates PIP window width. Default value is 450.
 * @param {number} [param.options.height=300] - number that indicates PIP window height. Default value is 300.
 * @param {()=>void} [param.onOpen] - function that will be executed on PIP opening.
 * @param {(evt: DocumentPictureInPictureEvent)=>void} [param.onOpened] - function that will be executed when PIP is opened.
 * @param {(evt: PageTransitionEvent)=>void} [param.onClose] - function that will be executed on PIP closing.
 * @param {(err: unknown)=>void} [param.onError] - function that will be executed when error is throwing.
 * @returns {UseDocumentPIPResult} result
 * Object with four properties:
 * - __isSupported__: boolean that indicates if PIP is supported or not.
 * - __openPIP__: function to open PIP.
 * - __closePIP__: function to close PIP.
 * - __PipWindow__: Component that wraps the element to render in Document Picture in Picture.
 */
export const useDocumentPIP = ({ options: { inheritCSS, window: wind } = { window: { height: 300, width: 450 } }, onOpen, onOpened, onClose, onError }: UseDocumentPIPProps): UseDocumentPIPResult => {
	const isSupported = "documentPictureInPicture" in window;
	const attached = useRef(false);
	const windowRef = useRef<Window>();
	const update = useRerender();
	const documentPIP = useRef(isSupported ? (window as unknown as Window & { documentPictureInPicture: EventTarget & {requestWindow: (opts: {width: number, height: number})=>Promise<Window>} }).documentPictureInPicture : null);

	const onEnter = useCallback((evt: DocumentPictureInPictureEvent) => {
		!!onOpened && onOpened(evt);
	}, [onOpened]);

	const openPIP = useCallback(async (opts?: DocumentPIPOptions) => {
		try {
			const width = opts?.window?.width ?? wind?.width;
			const height = opts?.window?.height ?? wind?.height;
			if (!documentPIP.current || !width || !height) {
				return Promise.resolve();
			}
			!!onOpen && onOpen();
			const window = await documentPIP.current.requestWindow({
				width,
				height
			});

			window.addEventListener("pagehide", evt => {
				!!onClose && onClose(evt);
				windowRef.current = undefined;
			}, { capture: true, once: true });

			if (opts?.inheritCSS || inheritCSS) {
				[...document.styleSheets].forEach(styleSheet => {
					try {
						const cssRules = [...styleSheet.cssRules]
							.map((rule) => rule.cssText)
							.join("");
						const style = document.createElement("style");

						style.textContent = cssRules;
						window.document.head.appendChild(style);
					} catch (e) {
						const link = document.createElement("link");
						if (styleSheet.href == null) {
							return;
						}
						link.rel = "stylesheet";
						link.type = styleSheet.type;
						link.media = styleSheet.media.toString();
						link.href = styleSheet.href;
						window.document.head.appendChild(link);
					}
				})
			}
			windowRef.current = window;
			update();
		} catch (error) {
			if (onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [onClose, onError, onOpen, inheritCSS, wind?.height, wind?.width, update]);

	const closePIP = useCallback(() => {
		windowRef.current && windowRef.current.close();
		update();
	}, [update]);

	const PipWindow = useMemo(() => {
		return ({ children }: PropsWithChildren) => {
			if (!windowRef.current) {
				return null;
			}
			return createPortal(
				children,
				windowRef.current.document.body
			)
		}
	}, []);

	if (documentPIP.current && !attached.current) {
		attached.current = true;
		documentPIP.current.addEventListener("enter", onEnter as EventListenerOrEventListenerObject);
	}

	useEffectOnce(() => () => {
		documentPIP.current && documentPIP.current.removeEventListener("enter", onEnter as EventListenerOrEventListenerObject);
	})

	return {
		isSupported,
		openPIP,
		PipWindow,
		closePIP
	}
}