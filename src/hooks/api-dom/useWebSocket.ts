import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { TypedArray, UseWebSocketProps, UseWebSocketResult } from "../../models"
import { useEffectOnce } from "../lifecycle";
import { useSyncExternalStore } from "../state";

function parseMessage<T>(data: string | ArrayBuffer | Blob, parser: UseWebSocketProps["parser"]): T {
	if (typeof parser === "function") {
		return parser(data) as T;
	}
	switch (parser) {
		case "json":
			if (typeof data === "string") {
				return JSON.parse(data) as T;
			}
			throw new Error("Cannot parse JSON from non-string data");
		case "text":
			if (typeof data === "string") {
				return data as T;
			}
			if (data instanceof Blob) {
				throw new Error("Cannot synchronously parse text from Blob. Use async parser.");
			}
			if (data instanceof ArrayBuffer) {
				return new TextDecoder().decode(data) as T;
			}
			return data as T;
		case "blob":
			if (data instanceof Blob) {
				return data as T;
			}
			throw new Error("Data is not a Blob");
		case "arraybuffer":
			if (data instanceof ArrayBuffer) {
				return data as T;
			}
			throw new Error("Data is not an ArrayBuffer");
		default:
			return data as T;
	}
}
/**
 * **`useWebSocket`**: Hook for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.
 * @see [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useWebSocket)
 * @template T Type of the data exchanged on the socket.
 * @param {UseWebSocketProps<T>} param - {@link UseWebSocketProps}
 * @returns {UseWebSocketResult<T>} result {@link UseWebSocketResult}
 */
export const useWebSocket = <T = string | ArrayBuffer | Blob> ({ url, protocols, binaryType, onOpen, onMessage, onError, onClose, immediateConnection, bufferingData, reconnect, parser }: UseWebSocketProps<T>): UseWebSocketResult<T> => {
	const wsRef = useRef<WebSocket>();
	const notifyRef = useRef<() => void>();
	const dataBuffer = useRef<(string | ArrayBuffer | Blob | TypedArray)[]>([]);
	const retryConnectId = useRef<ReturnType<typeof setInterval>>();
	const urlRef = useRef<typeof url>(url);
	const reconnectAttempts = useRef(0);
	const isManualClose = useRef(false);
	const onOpenRef = useRef(onOpen);
	const onMessageRef = useRef(onMessage);
	const onErrorRef = useRef(onError);
	const onCloseRef = useRef(onClose);
	onOpenRef.current = onOpen;
	onMessageRef.current = onMessage;
	onErrorRef.current = onError;
	onCloseRef.current = onClose;
	const cachedState = useRef<{
		status: UseWebSocketResult<T>["status"];
		data: T | null;
		lastMessage: MessageEvent | null;
	}>({
		status: immediateConnection && url ? "CONNECTING" : "READY",
		data: null,
		lastMessage: null,
	});

	const reconnectOpts = useMemo(() => {
		if (!reconnect) return null;
		if (reconnect === true) {
			return { attempts: 3, delay: 1000 };
		}
		return {
			attempts: reconnect.retries ?? 3,
			delay: reconnect.delay ?? 1000,
			onFailed: reconnect.onFailed,
		};
	}, [reconnect]);

	const getReconnectDelay = useCallback(() => !reconnectOpts ? 0 : reconnectOpts?.delay, [reconnectOpts]);

	const sendBuffer = useCallback(() => {
		if (bufferingData && wsRef.current && cachedState.current.status === "CONNECTED") {
			dataBuffer.current.forEach(data => {
				wsRef.current!.send(data);
			});
			dataBuffer.current = [];
		}
	}, [bufferingData])

	const open = useCallback((urlParam?: UseWebSocketProps["url"]) => {
		if (!wsRef.current && (url || urlParam)) {
			const urlWs = url || urlParam as string | URL;
			urlRef.current = urlWs;
			wsRef.current = new WebSocket(urlWs, protocols);
			binaryType && (wsRef.current.binaryType = binaryType);
			cachedState.current.status = "CONNECTING";
			isManualClose.current = false;
			reconnectAttempts.current = 0;
			notifyRef.current?.();
		}
	}, [protocols, url, binaryType]);

	const send = useCallback((data: string | ArrayBuffer | Blob | TypedArray) => {
		if ((!wsRef.current || cachedState.current.status !== "CONNECTED") && bufferingData) {
			dataBuffer.current.push(data);
		} else {
			sendBuffer();
			wsRef.current?.send(data);
		}
	}, [bufferingData, sendBuffer]);

	const sendJSON = useCallback((obj: any) => {
		send(JSON.stringify(obj));
	}, [send]);

	const close = useCallback((code?: number, reason?: string) => {
		if (wsRef.current && cachedState.current.status === "CONNECTED") {
			isManualClose.current = true;
			cachedState.current.status = "DISCONNECTING";
			wsRef.current?.close(code, reason);
			notifyRef.current?.();
		}
	}, []);

	const reconnectFn = useCallback(() => {
		if (cachedState.current.status === "CONNECTED" || cachedState.current.status === "CONNECTING") {
			return;
		}
		reconnectAttempts.current = 0;
		if (urlRef.current) {
			wsRef.current = undefined;
			open(urlRef.current);
		}
	}, [open]);

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			return () => {
				notifyRef.current = undefined;
			}
		}, []),
		useMemo(() => {
			let state: typeof cachedState.current = {
				status: immediateConnection && url ? "CONNECTING" : "READY",
				data: null,
				lastMessage: null
			}
			return () => {
				if (
					state.data !== cachedState.current.data ||
					state.status !== cachedState.current.status ||
					state.lastMessage !== cachedState.current.lastMessage
				) {
					state = { ...cachedState.current };
				}
				return state;
			}
		}, [immediateConnection, url])
	);

	const status = useMemo(() => state.status, [state.status]);
	const data = useMemo(() => state.data, [state.data]);
	const lastMessage = useMemo(() => state.lastMessage, [state.lastMessage]);

	useEffectOnce(() => {
		if (url && immediateConnection) {
			wsRef.current = new WebSocket(url, protocols);
		}
		return () => {
			if (retryConnectId.current) {
				clearInterval(retryConnectId.current);
				retryConnectId.current = undefined;
			}
			wsRef.current?.close();
			wsRef.current = undefined;
		}
	})

	useLayoutEffect(() => {
		if (wsRef.current) {
			binaryType && (wsRef.current.binaryType = binaryType);
			wsRef.current.onopen = (evt: Event) => {
				if (retryConnectId.current) {
					clearInterval(retryConnectId.current);
					retryConnectId.current = undefined;
				}
				reconnectAttempts.current = 0;
				cachedState.current.status = "CONNECTED";
				onOpenRef.current?.(evt);
				notifyRef.current?.();
				sendBuffer();
			};
			wsRef.current.onclose = (evt: CloseEvent) => {
				if (retryConnectId.current) {
					clearInterval(retryConnectId.current);
					retryConnectId.current = undefined;
				}
				onCloseRef.current?.(evt);
				if (
					!isManualClose.current &&
					reconnectOpts &&
					reconnectAttempts.current < reconnectOpts.attempts
				) {
					cachedState.current.status = "RECONNECTING";
					reconnectAttempts.current++;
					notifyRef.current?.();

					const delay = getReconnectDelay();
					retryConnectId.current = setInterval(() => {
						if (reconnectAttempts.current >= reconnectOpts.attempts) {
							clearInterval(retryConnectId.current);
							retryConnectId.current = undefined;
							cachedState.current.status = "DISCONNECTED";
							wsRef.current = undefined;
							notifyRef.current?.();
							reconnectOpts.onFailed?.();
						} else {
							wsRef.current = undefined;
							wsRef.current = new WebSocket(urlRef.current!, protocols);
							cachedState.current.status = "CONNECTING";
							notifyRef.current?.();
						}
					}, delay);
				} else {
					cachedState.current.status = "DISCONNECTED";
					wsRef.current = undefined;
					notifyRef.current?.();
				}
			};
			wsRef.current.onmessage = (evt: MessageEvent) => {
				cachedState.current.lastMessage = evt;
				try {
					const parsed = parseMessage<T>(evt.data, parser);
					cachedState.current.data = parsed;
					onMessageRef.current?.(parsed, evt);
				} catch (err: any) {
					onErrorRef.current?.(evt, err);
				}
				notifyRef.current?.();
			};
			wsRef.current.onerror = (evt: Event) => {
				onErrorRef.current?.(evt);
				notifyRef.current?.();
			}
		}
	});

	return {
		status,
		data,
		lastMessage,
		open,
		send,
		sendJSON,
		close,
		reconnect: reconnectFn,
		socket: wsRef.current ?? null
	}
}