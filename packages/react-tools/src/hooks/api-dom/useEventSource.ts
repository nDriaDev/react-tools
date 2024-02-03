import { useCallback, useMemo, useRef } from "react";
import { UseEventSourceProps, UseEventSourceResult } from "../../models";
import { useSyncExternalStore } from "../state";
import { useEffectOnce } from "../lifecycle";

/**
 * **`useEventSource`**: Hook to handle an [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) or [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) connection to an HTTP server, which sends events in text/event-stream format. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useEventSource)
 * @param {UseEventSourceProps} param - object
 * @param {string|URL} [param.url] - string that represents the location of the remote resource serving the events/messages.
 * @param {EventSourceInit} [param.opts] - options to configure the new connection. The possible entries are: __withCredentials__ -> boolean value, defaulting to false, indicating if CORS should be set to include credentials.
 * @param {{name: string, handler?:(evt:MessagEvent)=>void}[]} [param.events] - array of objects with properties __name__ and __handler__ to listen specified events from source.
 * @param {boolean} [param.immediateConnection] - boolean to start connection immediatly.
 * @param {(evt: Event)=>void} [param.onOpen] - function that will be executed when connection is opened.
 * @param {(evt: Event)=>void} [param.onError] - function that will be executed when an error occurred.
 * @param {(evt: MessageEvent<T>)=>void} [param.onMessage] - function that will be executed when a message from without event arrived.
 * @returns {UseEventSourceResult} result
 * Object with these properties:
 * - __status__: string rapresenting eventsource state connection: __READY__ __CONNECTING__ __OPENED__ or __CLOSED__.
 * - __data__: last data value arrived from eventSource.
 * - __open__: function that opens connection.
 * - __close__: function that closes connection.
 */
export const useEventSource = <T>({ url, opts, events, immediateConnection, onOpen, onError, onMessage }: UseEventSourceProps): UseEventSourceResult<T> => {
	const notifyRef = useRef<() => void>();
	const sourceRef = useRef<EventSource>();
	const eventsHandler = useRef((events || []).map(evt => {
		return {
			name: evt.name,
			hanlder: (e: MessageEvent) => {
				!!evt.handler && evt.handler(e);
				cachedState.current.data = e.data;
				notifyRef.current && notifyRef.current();
			}
		}
	}));
	const cachedState = useRef<{ status: UseEventSourceResult<T>["status"], data: UseEventSourceResult<T>["data"] }>({
		status: immediateConnection && url ? "CONNECTING" : "READY",
		data: null
	});

	const open = useCallback((urlParam?: UseEventSourceProps["url"]) => {
		if (url || urlParam) {
			const urlES = url ?? urlParam as string | URL;
			sourceRef.current = new EventSource(urlES, opts);
			cachedState.current.status = "CONNECTING";
			notifyRef.current && notifyRef.current();
		}
	}, [opts, url]);

	const close = useCallback(() => {
		sourceRef.current?.close();
		sourceRef.current = undefined;
		cachedState.current.status = "CLOSED";
		notifyRef.current && notifyRef.current();
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

	const data = useMemo(() => (state.data), [state.data]);

	useEffectOnce(() => {
		if (url && immediateConnection) {
			sourceRef.current = new EventSource(url, opts);
		}
	})

	if (sourceRef.current) {
		sourceRef.current.onopen = (evt: Event) => {
			!!onOpen && onOpen(evt);
			cachedState.current.status = "OPENED";
			notifyRef.current && notifyRef.current();
		};
		sourceRef.current.onerror = (evt: Event) => {
			!!onError && onError(evt);
			cachedState.current.status = "CLOSED";
			notifyRef.current && notifyRef.current();
		};
		sourceRef.current.onmessage = (evt: MessageEvent<T>) => {
			!!onMessage && onMessage(evt);
			cachedState.current.data = evt.data;
			notifyRef.current && notifyRef.current();
		};
		eventsHandler.current.forEach(evt => {
			sourceRef.current?.removeEventListener(evt.name, evt.hanlder);
		});
		eventsHandler.current = (events || []).map(evt => {
			return {
				name: evt.name,
				hanlder: (e: MessageEvent) => {
					!!evt.handler && evt.handler(e);
					cachedState.current.data = e.data;
					notifyRef.current && notifyRef.current();
				}
			}
		});
		eventsHandler.current.forEach(evt => {
			sourceRef.current?.addEventListener(evt.name, evt.hanlder);
		});
	}

	return {
		status: state.status,
		data,
		open,
		close
	}
}