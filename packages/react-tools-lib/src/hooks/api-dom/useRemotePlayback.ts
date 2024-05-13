import { RefCallback, useCallback, useRef } from "react";
import { UseRemotePlaybackProps, UseRemotePlaybackResult } from "../../models";
import { useSyncExternalStore } from "../state";

/**
 * **`useRemotePlayback`**: Hook to use [RemotePlayback API](https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useRemotePlayback)
 * @param {UseRemotePlaybackProps} param - object
 * @param {(evt:Event) => void} [param.onConnecting] - function that will be executed when remote device has been connected.
 * @param {(evt:Event) => void} [param.onConnect] - function that will be executed when remote device connecting.
 * @param {(evt:Event) => void} [param.onDisconnect] - function that will be executed when remote device has been disconnected.
 * @param {(err: unknown) => void} [param.onError] - function that will be executed on error watching or cancel watching devices availability.
 * @returns {UseRemotePlaybackResult} result
 * Object with these properties:
 * - __ref__: ref to attach media element.
 * - __isSupported__: boolean that indicates if RemotePlayback API is available or not.
 * - __state__: remote device state: _connected_, _connecting_ or _disconnect_.
 * - __prompt__: function that prompts the user to select an available remote playback device and give permission for the current media to be played using that device.
 */
export const useRemotePlayback=<T extends HTMLMediaElement>({ onConnecting, onConnect, onDisconnect, onError }: UseRemotePlaybackProps={}): UseRemotePlaybackResult<T> => {
	const isSupported = "RemotePlayback" in window;
	const notifyRef = useRef<() => void>();
	const stateCached = useRef<UseRemotePlaybackResult<T>["state"]>("disconnected");
	const remotePlayback = useRef<RemotePlayback>();
	const remoteIdCallback = useRef<number>();

	const watchAvailability = useCallback((cb: (isAvailable: boolean) => void) => {
		if (remotePlayback.current && isSupported) {
			return remotePlayback.current.watchAvailability(cb)
				.then(id => {
					remoteIdCallback.current = id;
				})
				.catch(err => {
					if (onError) {
						onError(err);
					} else {
						throw err;
					}
				});
		}
		return Promise.resolve();
	}, [isSupported, onError]);

	const cancelWatchAvailability = useCallback(() => {
		if (!!remoteIdCallback.current && remotePlayback.current && isSupported) {
			return remotePlayback.current.cancelWatchAvailability()
				.catch(err => {
					if (onError) {
						onError(err);
					} else {
						throw err;
					}
				});
		}
		return Promise.resolve();
	}, [isSupported, onError]);

	const prompt = useCallback(() => {
		if (isSupported && remotePlayback.current) {
			return remotePlayback.current.prompt()
		}
		return Promise.resolve();
	}, [isSupported]);

	const ref = useCallback<RefCallback<T>>(node => {
		if (node && isSupported) {
			remotePlayback.current = node.remote;
			remotePlayback.current.onconnect = (evt: Event) => {
				!!onConnect && onConnect(evt);
				stateCached.current = "connected";
				!!notifyRef.current && notifyRef.current();
			}
			remotePlayback.current.onconnecting = (evt: Event) => {
				!!onConnecting && onConnecting(evt);
				stateCached.current = "connecting";
				!!notifyRef.current && notifyRef.current();
			};
			remotePlayback.current.ondisconnect = (evt: Event) => {
				!!onDisconnect && onDisconnect(evt);
				stateCached.current = "disconnected";
				!!notifyRef.current && notifyRef.current();
			};
			watchAvailability(res => !res && (stateCached.current = "unavailable"));
		} else {
			if (remotePlayback.current) {
				cancelWatchAvailability();
				remotePlayback.current.onconnect = null;
				remotePlayback.current.onconnecting = null;
				remotePlayback.current.ondisconnect= null;
			}
			remotePlayback.current = undefined;
		}
	}, [isSupported, onConnect, onConnecting, onDisconnect, watchAvailability, cancelWatchAvailability]);

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			return () => {
				notifyRef.current = undefined;
			}
		}, []),
		useCallback(() => stateCached.current, [])
	);

	return {
		ref,
		isSupported,
		state,
		prompt
	}
}