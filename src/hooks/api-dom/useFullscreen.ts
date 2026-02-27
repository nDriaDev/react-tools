import { RefCallback, useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { UseFullscreenProps, UseFullscreenResult } from "../../models";

/**
 * **`useFullscreen`**:
 * @see [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useFullscreen)
 * @template T Type of the observed DOM element.
 * @param {UseAudioProps} param - {@link UseAudioProps}
 * @returns {UseAudioResult} result {@link UseAudioResult}
 */
export const useFullscreen = <T extends Element>({ onChange, onEnter, onExit }: UseFullscreenProps = {} ): UseFullscreenResult<T> => {
	const notifRef = useRef<() => void>();
	const nodeRef = useRef<T>();
	const listener = useCallback((evt: Event) => {
		onChange && onChange(evt);
		notifRef.current && notifRef.current();
	}, [onChange]);

	const cbRef: RefCallback<T> = useCallback((node: T | null) => {
		if (node) {
			nodeRef.current = node;
			node.addEventListener("fullscreenchange", listener, {passive: true})
			node.addEventListener("webkitfullscreenchange", listener, {passive: true})
		} else {
			nodeRef.current?.removeEventListener("fullscreenchange", listener)
			nodeRef.current?.removeEventListener("webkitfullscreenchange", listener)
			nodeRef.current = undefined;
		}
	}, [listener]);

	const enter = useCallback(async (opts?: FullscreenOptions) => {
		onEnter && await onEnter();
		await (nodeRef.current?.requestFullscreen
			? nodeRef.current?.requestFullscreen(opts)
			: (nodeRef.current as null | (T & { webkitRequestFullScreen: (opts?: FullscreenOptions) => Promise<void> }))?.webkitRequestFullScreen(opts))
	}, [onEnter]);

	const exit = useCallback(async () => {
		onExit && await onExit();
		await document.exitFullscreen();
	}, [onExit]);

	const isFullscreen = useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			return () => {
				notifRef.current = undefined;
			}
		}, []),
		useMemo(() => {
			let isFullscreenCached = document.fullscreenElement ?? (document as typeof document & {webkitFullscreenElement: Element|null}).webkitFullscreenElement;
			return () => {
				const isFullscreenCurrent = document.fullscreenElement ?? (document as typeof document & { webkitFullscreenElement: Element | null }).webkitFullscreenElement;
				if (isFullscreenCached !== isFullscreenCurrent) {
					isFullscreenCached = isFullscreenCurrent;
				}
				return isFullscreenCached !== null;
			}
		}, [])
	);

	return [
		isFullscreen,
		cbRef,
		enter,
		exit
	];
}