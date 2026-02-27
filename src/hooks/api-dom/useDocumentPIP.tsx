import { PropsWithChildren, useCallback, useRef } from "react";
import { DocumentPIPOptions, UseDocumentPIPProps, UseDocumentPIPResult } from "../../models";
import { createPortal } from "react-dom";
import { useEffectOnce, useRerender } from "../lifecycle";

/**
 * **`useDocumentPIP`**:
 * @see [(Document-Picture-in-Picture API)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Picture-in-Picture_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useDocumentPIP)
 * @param {UseDocumentPIPProps} param - {@link UseDocumentPIPProps}
 * @returns {UseDocumentPIPProps} result {@link UseDocumentPIPProps}
 */
export const useDocumentPIP = ({ options = {}, onOpen, onOpened, onClose, onError }: UseDocumentPIPProps): UseDocumentPIPResult => {
	const { inheritCSS = false, window: wind = { width: 450, height: 300 } } = options;
	const isSupported = typeof window !== "undefined" && "documentPictureInPicture" in window;
	const windowRef = useRef<Window>();
	const update = useRerender();

	useEffectOnce(() => {
		if (!isSupported) {
			return
		}
		const api = (window as any).documentPictureInPicture;
		const handleEnter = (evt: any) => onOpened?.(evt);
		api.addEventListener('enter', handleEnter);
		return () => api.removeEventListener('enter', handleEnter);
	})

	const openPIP = useCallback(async (opts?: DocumentPIPOptions) => {
		try {
			if (!isSupported) {
				return;
			}
			const api = (window as any).documentPictureInPicture;
			const width = opts?.window?.width ?? wind?.width;
			const height = opts?.window?.height ?? wind?.height;
			onOpen?.();
			const pipWin = await api.requestWindow({ width, height });

			pipWin.addEventListener("pagehide", (evt: any) => {
				onClose?.(evt);
				windowRef.current = undefined;
				update();
			}, { once: true });

			if (opts?.inheritCSS || inheritCSS) {
				const styleNodes = Array.from(
					document.querySelectorAll('style, link[rel="stylesheet"]')
				)
				styleNodes.forEach(node => {
					pipWin.document.head.appendChild(node.cloneNode(true))
				});
			}
			windowRef.current = pipWin;
			update();
		} catch (error) {
			if (onError) {
				onError(error);
			} else {
				throw error;
			}
		}
	}, [isSupported, wind.width, wind.height, onOpen, onClose, onError, inheritCSS, update]);

	const closePIP = useCallback(() => {
		windowRef.current && windowRef.current.close();
	}, []);

	const PipWindow = useCallback(({ children }: PropsWithChildren) => {
		if (!windowRef.current) return null;
		return createPortal(children, windowRef.current.document.body);
	}, []);

	return {
		isSupported,
		openPIP,
		closePIP,
		window: windowRef.current,
		PipWindow
	}
}