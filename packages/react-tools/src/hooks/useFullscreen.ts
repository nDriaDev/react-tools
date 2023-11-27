import { RefCallback, useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "."

/**
 * **`useFullscreen`**: Hook to use [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).
 * @param {()=>void|Promise<void>} [onEnter] - callback that will be executed before enter in fullscreen mode.
 * @param {(evt: Event)=>void} [onChange] - callback that will be executed when target element fullscreen change.
 * @param {()=>void|Promise<void>} [onExit] - callback that will be executed before exit from fullscreen mode.
 * @returns {[boolean, RefCallback<T>, (opts?: FullscreenOptions) => Promise<void>, () => Promise<void>]} result - array with: _isFullscreen_: boolean to indicate if there is fullscreen or not; _refCallback_: ref callback to be attached at target element; _enter_: function to enter in fullscreen mode; _exit_: function to exit from fullscreen mode.
 */
export const useFullscreen = <T extends Element>(onEnter?: () => void|Promise<void>, onChange?: (evt: Event) => void, onExit?: () => void|Promise<void>): [boolean, RefCallback<T>, (opts?: FullscreenOptions) => Promise<void>, () => Promise<void>] => {
	const notifRef = useRef<() => void>();
	const nodeRef = useRef<T>();
	const listener = useCallback((evt: Event) => {
		onChange && onChange(evt);
		notifRef.current && notifRef.current();
	}, [onChange]);

	const cbRef = useCallback((node: T) => {
		if (node) {
			nodeRef.current = node;
			node.addEventListener("fullscreenchange", listener)
			node.addEventListener("webkitfullscreenchange", listener)
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