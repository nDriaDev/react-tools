import { useCallback, useLayoutEffect, useMemo, useRef } from "react"
import { useSyncExternalStore } from "../state";
import { UseBroadcastChannelProps, UseBroadcastChannelResult } from "../../models";

/**
 * **`useBroadcastChannel`**: hook to use broadcast channel.
 * @see [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useBroadcastChannel)
 * @param {UseBroadcastChannelProps} params - {@link UseBroadcastChannelProps}
 * @returns {UseBroadcastChannelResult} result {@link UseBroadcastChannelResult}
 */
export const useBroadcastChannel = <T>({name, onMessage, onError}: UseBroadcastChannelProps<T>): UseBroadcastChannelResult<T> => {
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
		return () => {
			bcRef.current?.close();
			bcRef.current = undefined;
		};
	}, [name, onMessageCb, onError]);

	return [data, send];
}