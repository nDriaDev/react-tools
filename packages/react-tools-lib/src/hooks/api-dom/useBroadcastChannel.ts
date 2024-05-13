import { useCallback, useLayoutEffect, useMemo, useRef } from "react"
import { useSyncExternalStore } from "../state";

/**
 * **`useBroadcastChannel`**: Hook to use [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useBroadcastChannel)
 * @param {string} name - broadcast channel name.
 * @param {(evt:MessageEvent)=>void} [onMessage] - function that will be execute when a message occurred.
 * @param {(evt:MessageEvent)=>void} [onError] - function that will be execute when a error message occurred.
 * @returns {[T|undefined, (data:T)=>void]} result
 * Array of:
 * - first element: __data__ received in broadcast channel.
 * - second element: __send__ function to send data on broadcast channel.
 */
export const useBroadcastChannel = <T>(name: string, onMessage?: (evt:MessageEvent<T>)=>void, onError?: (evt: MessageEvent)=>void):[T|undefined, (data:T)=>void] => {
	const notifyRef = useRef<() => void>();
	const dataRef = useRef<T>();
	const bcRef = useRef<BroadcastChannel>();
	const onMessageCb = useCallback((evt: MessageEvent<T>) => {
		dataRef.current = evt.data;
		!!notifyRef.current && notifyRef.current();
		!!onMessage && onMessage(evt);
	}, [onMessage]);

	const send = useCallback((data: T) => {
		!!bcRef.current && bcRef.current.postMessage(data);
	}, []);

	const data = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			return () => notifyRef.current = undefined;
		}, []),
		useMemo(() => {
			let cachedData = dataRef.current;
			return () => {
				if (cachedData !== dataRef.current) {
					cachedData = dataRef.current;
				}
				return cachedData;
			}
		}, [])
	);

	useLayoutEffect(() => {
		bcRef.current = new BroadcastChannel(name);
		!!onError && (bcRef.current.onmessageerror = onError);
		bcRef.current.onmessage = onMessageCb;
	}, [name, onMessageCb, onError]);

	return [data, send];
}