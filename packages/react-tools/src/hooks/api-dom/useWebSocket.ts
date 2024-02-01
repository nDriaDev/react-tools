import { useCallback, useMemo, useRef } from "react";
import { TypedArray, UseWebSocketProps, UseWebSocketResult } from "../../models"
import { useEffectOnce } from "../lifecycle";
import { useSyncExternalStore } from "../state";

/**
 * **`useWebSocket`**: Hook for creating and managing a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) connection to a server, as well as for sending and receiving data on the connection.
 * @param {UseWebSocketProps} param - object
 * @param {UseWebSocketProps} [param.url] - the URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param {UseWebSocketProps} [param.protocols] - either a single protocol string or an array of protocol strings. These strings are used to indicate sub-protocols, so that a single server can implement multiple WebSocket sub-protocols.
 * @param {UseWebSocketProps} [param.binaryType] - the type of binary data being received over the WebSocket connection.
 * @param {UseWebSocketProps} [param.immediateConnection] - boolean to open webSocket connection immediatly.
 * @param {UseWebSocketProps} [param.onOpen] - function that will be executed when webSocket connection has been opened.
 * @param {UseWebSocketProps} [param.onMessage] - function that will be executed when message arrived from webSocket.
 * @param {UseWebSocketProps} [param.onError] - function that will be executed when an error occurred.
 * @param {UseWebSocketProps} [param.onClose] - function that will be executed when webSocket connection has been closed.
 * @param {UseWebSocketProps} [param.bufferingData] - boolean that indicates to use a buffer to keep data sent if connection aren't already opened.
 * @param {UseWebSocketProps} [param.autoReconnect] - boolean or object with properties __retries__, __delay__ and __onFailed__. If an error closes connection and its value isn't false or undefined, a connection will be restored every _delay_ milliseconds for __retries__ time: if connection won't be restored __onFailed__ function will be executed if it is present.
 * @returns {UseWebSocketResult} result
 * Object with these properties:
 * - __status__: string rapresenting webSocket state connection: __READY__ __CONNECTING__ __OPENED__ or __CLOSED__.
 * - __data__: last data value arrived from webSocket.
 * - __open__: function that opens connection with optional _url_ param .
 * - __send__: function that sends data by webSocket.
 * - __close__: function that closes connection with optional _code_ and _reason_ params.
 */
export const useWebSocket = <T = string | ArrayBuffer | Blob> ({ url, protocols, binaryType, onOpen, onMessage, onError, onClose, immediateConnection, bufferingData, autoReconnect }: UseWebSocketProps): UseWebSocketResult<T> => {
	const wsRef = useRef<WebSocket>();
	const notifyRef = useRef<() => void>();
	const dataBuffer = useRef<(string | ArrayBuffer | Blob | TypedArray)[]>([]);
	const retryConnectId = useRef<ReturnType<typeof setTimeout>>();
	const urlRef = useRef<UseWebSocketProps["url"]>(url);
	const cachedState = useRef<{ status: UseWebSocketResult<T>["status"], data: UseWebSocketResult<T>["data"] }>({
		status: immediateConnection && url ? "CONNECTING" : "READY",
		data: null
	});

	const sendBuffer = useCallback(() => {
		if (bufferingData && wsRef.current && cachedState.current.status === "OPENED") {
			dataBuffer.current.forEach(data => {
				wsRef.current!.send(data);
			});
			dataBuffer.current = [];
		}
	}, [bufferingData])

	const open = useCallback((urlParam?: UseWebSocketProps["url"]) => {
		if (!wsRef.current && (url || urlParam)) {
			const urlWs = url || urlParam as string | URL;
			wsRef.current = new WebSocket(urlWs, protocols);
			binaryType && (wsRef.current.binaryType = binaryType);
			cachedState.current.status = "CONNECTING";
			notifyRef.current && notifyRef.current();
		}
	}, [protocols, url, binaryType]);

	const send = useCallback((data: string | ArrayBuffer | Blob | TypedArray) => {
		if ((!wsRef.current || cachedState.current.status !== "OPENED") && bufferingData) {
			dataBuffer.current.push(data);
		} else {
			sendBuffer();
			wsRef.current?.send(data);
		}
	}, [bufferingData, sendBuffer]);

	const close = useCallback((code?: number, reason?: string) => {
		if (wsRef.current && cachedState.current.status === "OPENED") {
			wsRef.current?.close(code, reason);
			cachedState.current.status = "CLOSED";
			notifyRef.current && notifyRef.current();
		}
	}, []);

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
				data: null
			}
			return () => {
				if (state.data !== cachedState.current.data || state.status !== cachedState.current.status) {
					state = {
						...cachedState.current
					}
				}
				return state;
			}
		}, [immediateConnection, url])
	);

	const status = useMemo(() => state.status, [state.status]);
	const data = useMemo(() => state.data, [state.data]);

	useEffectOnce(() => {
		if (url && immediateConnection) {
			wsRef.current = new WebSocket(url, protocols);
		}
	})

	if (wsRef.current) {
		binaryType && (wsRef.current.binaryType = binaryType);
		wsRef.current.onopen = (evt: Event) => {
			!!retryConnectId.current && clearInterval(retryConnectId.current);
			cachedState.current.status = "OPENED";
			!!onOpen && onOpen(evt);
			notifyRef.current && notifyRef.current();
			sendBuffer();
		};
		wsRef.current.onclose = (evt: CloseEvent) => {
			cachedState.current.status = "CLOSED";
			!!retryConnectId.current && clearInterval(retryConnectId.current);
			!!onClose && onClose(evt);
			wsRef.current = undefined;
			notifyRef.current && notifyRef.current();
		};
		wsRef.current.onmessage = (evt: MessageEvent) => {
			cachedState.current.data = evt.data;
			!!onMessage && onMessage(evt);
			notifyRef.current && notifyRef.current();
		};
		wsRef.current.onerror = (evt: Event) => {
			cachedState.current.status = "CLOSED";
			!!onError && onError(evt);
			notifyRef.current && notifyRef.current();
			if (autoReconnect && !retryConnectId.current) {
				let retries: number, delay: number, onFailed: (() => void) | undefined;
				if (typeof autoReconnect === "boolean") {
					retries = 1;
					delay = 1000;
				} else {
					retries = autoReconnect.retries;
					delay = autoReconnect.delay;
					onFailed = autoReconnect.onFailed;
				}
				retryConnectId.current = setInterval(() => {
					if (retries === 0) {
						clearInterval(retryConnectId.current);
						retryConnectId.current = undefined;
						!!onFailed && onFailed();
					} else {
						wsRef.current = undefined;
						wsRef.current = new WebSocket(urlRef.current!, protocols);
						cachedState.current.status = "CONNECTING";
						notifyRef.current && notifyRef.current();
					}
				}, delay);
			}
		}
	}

	return {
		status,
		data,
		open,
		send,
		close
	}
}