import { RefCallback } from "react";

/**
 * Parameters accepted by [useRemotePlayback](https://react-tools.ndria.dev/hooks/api-dom/useRemotePlayback).
 */
export interface UseRemotePlaybackProps {
	/**
	 * Called when the remote playback device begins its connection attempt,
	 * i.e. when the underlying {@link RemotePlayback} state transitions to `"connecting"`.
	 */
	onConnecting?: (evt: Event) => void;
	/**
	 * Called when the remote playback device successfully establishes a connection,
	 * i.e. when the underlying {@link RemotePlayback} state transitions to `"connected"`.
	 */
	onConnect?: (evt: Event) => void;
	/**
	 * Called when the remote playback device disconnects, i.e. when the underlying
	 * {@link RemotePlayback} state transitions back to `"disconnected"`.
	 */
	onDisconnect?: (evt: Event) => void;
	/**
	 * Called when an error occurs while attempting to watch availability or connect
	 * to a remote playback device. Receives the thrown value, which may be a
	 * `DOMException` or any other error type depending on the browser implementation.
	 * When omitted, errors are re-thrown.
	 */
	onError?: (err: unknown) => void;
}

/**
 * Return value of [useRemotePlayback](https://react-tools.ndria.dev/hooks/api-dom/useRemotePlayback).
 *
 * @template T - The `HTMLMediaElement` subtype (`HTMLVideoElement`, `HTMLAudioElement`, etc.) that the ref will be attached to.
 */
export interface UseRemotePlaybackResult<T extends HTMLMediaElement> {
	/**
	 * A React ref callback to attach to the target media element. Wiring this ref is
	 * required for all other returned values and functions to work — it initialises the
	 * underlying {@link RemotePlayback} object and registers the event handlers for
	 * `connect`, `connecting`, and `disconnect`. Cleans up all listeners and cancels
	 * availability watching when the element is unmounted.
	 */
	ref: RefCallback<T>;
	/**
	 * `true` when the browser supports the Remote Playback API
	 * (i.e. `"RemotePlayback" in window`). When `false`, {@link UseRemotePlaybackResult.prompt}
	 * resolves immediately without opening any picker and {@link UseRemotePlaybackResult.state}
	 * remains `"disconnected"`.
	 */
	isSupported: boolean;
	/**
	 * Reactive string reflecting the current remote playback connection state:
	 * - **`"disconnected"`** — No remote device is connected. This is the initial state.
	 * - **`"connecting"`** — A connection attempt is in progress.
	 * - **`"connected"`** — A remote device is actively receiving playback.
	 * - **`"unavailable"`** — No compatible remote playback devices were detected in the
	 *   vicinity (reported by the availability watcher).
	 */
	state: "unavailable" | "connected" | "connecting" | "disconnected";
	/**
	 * Opens the browser's native remote playback device picker, allowing the user to
	 * select a device to stream media to (e.g. Chromecast, AirPlay). Resolves when the
	 * picker is dismissed, regardless of whether a device was selected. Rejects if the
	 * API is unavailable or the call is made before the {@link UseRemotePlaybackResult.ref}
	 * has been attached to a media element.
	 */
	prompt: () => Promise<void>;
}