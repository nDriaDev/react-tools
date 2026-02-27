import { TypedArray } from ".";

/**
 * Props for the [useWebSocket](https://react-tools.ndria.dev/hooks/api-dom/useWebSocket).
 * @template T Type of the data exchanged on the socket.
 */
export interface UseWebSocketProps<T = unknown> {
	/** WebSocket endpoint URL. Can be set here or passed to `open()` at connection time. */
	url?: string | URL;
	/** Sub-protocol string or array of strings forwarded to the `WebSocket` constructor. */
	protocols?: string | string[];
	/**
	 * The binary data type used to receive binary messages.
	 * @default "blob"
	 */
	binaryType?: "blob" | "arraybuffer";
	/**
	 * When `true`, the WebSocket connection is opened immediately on mount.
	 * @default false
	 */
	immediateConnection?: boolean;
	/** Called when the WebSocket connection opens. */
	onOpen?: (evt: Event) => void;
	/**
	 * Called when a message is received.
	 * @param data - The parsed message data (processed by `parser`).
	 * @param evt - The raw `MessageEvent`.
	 */
	onMessage?: (data: T, evt: MessageEvent<T>) => void;
	/** Called when a WebSocket error occurs. */
	onError?: (evt: Event, err?: Error) => void;
	/** Called when the WebSocket connection closes. */
	onClose?: (evt: CloseEvent) => void;
	/**
	 * When `true`, messages sent while the connection is not yet open are buffered
	 * and delivered once the connection is established.
	 * @default false
	 */
	bufferingData?: boolean;
	/**
	 * Auto-reconnect configuration.
	 * - `true` — reconnect indefinitely with the default delay.
	 * - `{ retries, delay, onFailed? }` — reconnect up to `retries` times with `delay` ms between attempts.
	 */
	reconnect?: boolean | { retries: number; delay: number; onFailed?: () => void };
	/**
	 * Message parser applied to incoming `MessageEvent.data` before calling `onMessage`.
	 * - `"json"` — `JSON.parse`.
	 * - `"text"` — identity (string passthrough).
	 * - `"blob"` / `"arraybuffer"` — return the raw binary data.
	 * - A function — custom parser receiving the raw data and returning the typed value.
	 * @default "json"
	 */
	parser?: "json" | "text" | "blob" | "arraybuffer" | ((data: string | ArrayBuffer | Blob) => unknown);
}

/**
 * Result object returned by [useWebSocket](https://react-tools.ndria.dev/hooks/api-dom/useWebSocket).
 * @template T Type of the data exchanged on the socket.
 */
export interface UseWebSocketResult<T = unknown> {
	/**
	 * Current connection state.
	 * - `"READY"` — not yet connected.
	 * - `"CONNECTING"` — connection in progress.
	 * - `"CONNECTED"` — connection established.
	 * - `"RECONNECTING"` — attempting to reconnect after a disconnect.
	 * - `"DISCONNECTING"` — close handshake in progress.
	 * - `"DISCONNECTED"` — connection fully closed.
	 */
	status: "READY" | "CONNECTING" | "CONNECTED" | "RECONNECTING" | "DISCONNECTING" | "DISCONNECTED";
	/** Most recently received parsed message data. `null` before the first message. */
	data: T | null;
	/** The raw `MessageEvent` for the most recently received message. `null` before the first message. */
	lastMessage: MessageEvent | null;
	/**
	 * Open the WebSocket connection.
	 * @param url - Optional URL override. Falls back to `props.url`.
	 */
	open: (url?: string | URL) => void;
	/**
	 * Send raw data over the WebSocket.
	 * @param data - String, binary data, or typed array to transmit.
	 */
	send: (data: string | ArrayBuffer | Blob | TypedArray) => void;
	/**
	 * Serialise a value as JSON and send it over the WebSocket.
	 * @param data - Any JSON-serialisable value.
	 */
	sendJSON: (data: unknown) => void;
	/**
	 * Close the WebSocket connection.
	 * @param code - Optional close status code (see RFC 6455).
	 * @param reason - Optional human-readable close reason.
	 */
	close: (code?: number, reason?: string) => void;
	/** Manually trigger a reconnection attempt. */
	reconnect: () => void;
	/** Direct reference to the underlying `WebSocket` instance. `null` when not connected. */
	socket: WebSocket | null;
}
