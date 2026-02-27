import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { UseEventSourceProps, UseEventSourceResult } from "../../models";
import { useSyncExternalStore } from "../state";
import { useEffectOnce } from "../lifecycle";

/**
 * **`useEventSource`**:
 * @see [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) or [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) connection to an HTTP server, which sends events in text/event-stream format.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useEventSource)
 * @template T Expected type of the parsed message data.
 * @param {UseEventSourceProps} param - {@link UseEventSourceProps}
 * @returns {UseEventSourceResult} result {@link UseEventSourceResult}
 */
export const useEventSource = <T>({ url, opts, events, immediateConnection, onOpen, onError, onMessage }: UseEventSourceProps): UseEventSourceResult<T> => {
	const notifyRef = useRef<() => void>();
	const sourceRef = useRef<EventSource>();
	const eventsHandler = useRef((events || []).map(evt => {
		return {
			name: evt.name,
			handler: (e: MessageEvent) => {
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
		return () => {
			sourceRef.current?.close();
			sourceRef.current = undefined;
		}
	})

	useLayoutEffect(() => {
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
				sourceRef.current?.removeEventListener(evt.name, evt.handler);
			});
			eventsHandler.current = (events || []).map(evt => {
				return {
					name: evt.name,
					handler: (e: MessageEvent) => {
						!!evt.handler && evt.handler(e);
						cachedState.current.data = e.data;
						notifyRef.current && notifyRef.current();
					}
				}
			});
			eventsHandler.current.forEach(evt => {
				sourceRef.current?.addEventListener(evt.name, evt.handler);
			});
		}
	});

	return {
		status: state.status,
		data,
		open,
		close
	}
}