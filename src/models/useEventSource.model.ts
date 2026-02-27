/**
 * Configuration object accepted by [useEventSource](https://react-tools.ndria.dev/hooks/api-dom/useEventSource).
 * @template T Expected type of the parsed message data.
 */
export interface UseEventSourceProps {
	/**
	 * URL of the SSE endpoint. Can be set here or passed to `open()` at connection time.
	 * If omitted, `open()` must always be called with a URL.
	 */
	url?: string | URL;
	/**
	 * Options forwarded to the `EventSource` constructor.
	 * The most useful option is `{ withCredentials: true }` for cross-origin SSE endpoints
	 * that require cookies or HTTP auth.
	 */
	opts?: EventSourceInit;
	/**
	 * Array of named events to listen to on the `EventSource`.
	 * Each entry registers a listener for the named event type alongside the default `"message"` listener.
	 *
	 * @example
	 * ```ts
	 * events: [
	 *   { name: "update", handler: (evt) => console.log(evt.data) },
	 *   { name: "ping" }, // no handler — just subscribes without a callback
	 * ]
	 * ```
	 */
	events?: { name: string; handler?: (evt: MessageEvent) => void }[];
	/**
	 * When `true`, the `EventSource` connection is opened immediately on mount.
	 * When `false` (default), call `open()` to connect.
	 * @default false
	 */
	immediateConnection?: boolean;
	/**
	 * Called when the `EventSource` connection is established (`open` event).
	 * @param evt - The `Event` fired when the connection opens.
	 */
	onOpen?: (evt: Event) => void;
	/**
	 * Called when an error occurs on the `EventSource` connection (`error` event).
	 * This includes connection errors and server-side errors.
	 * @param evt - The `Event` fired on error.
	 */
	onError?: (evt: Event) => void;
	/**
	 * Called for every unnamed `"message"` event received from the server.
	 * @param evt - The `MessageEvent` containing the received data.
	 * @template T - Expected type of `evt.data` after parsing.
	 */
	onMessage?: <T>(evt: MessageEvent<T>) => void;
}

/**
 * Result object returned by [useEventSource](https://react-tools.ndria.dev/hooks/api-dom/useEventSource).
 *
 * @template T Expected type of the parsed message data.
 */
export interface UseEventSourceResult<T> {
	/**
	 * Current connection state of the `EventSource`:
	 * - `"READY"` — not yet connected (initial state).
	 * - `"CONNECTING"` — connection attempt in progress.
	 * - `"OPENED"` — connection established, receiving events.
	 * - `"CLOSED"` — connection closed (manually or by the server).
	 */
	status: "READY" | "CONNECTING" | "OPENED" | "CLOSED";
	/**
	 * The most recently received `"message"` event data.
	 * `null` before the first message arrives.
	 */
	data: T | null;
	/**
	 * Opens the `EventSource` connection to the provided (or configured) URL.
	 * @param url - Optional URL override for this specific connection.
	 */
	open: (url?: string) => void;
	/** Closes the `EventSource` connection. The `status` transitions to `"CLOSED"`. */
	close: () => void;
}
