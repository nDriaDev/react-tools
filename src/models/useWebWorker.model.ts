/**
 * Props for the [useWebWorker](https://react-tools.ndria.dev/hooks/api-dom/useWebWorker).
 */
export interface UseWebWorkerProps {
	/**
	 * URL of the worker script to load.
	 * Must comply with the same-origin policy (or use a Blob URL for inline workers).
	 */
	url: string | URL;
	/** Options forwarded to the `Worker` constructor (e.g. `{ type: "module" }`). */
	options?: WorkerOptions;
	/**
	 * Called on the main thread when the worker posts a message via `postMessage`.
	 * @param e - The `MessageEvent` containing the worker's response.
	 */
	onMessage?: (e: MessageEvent) => void;
	/**
	 * Called when the worker receives a message that cannot be deserialised.
	 * @param e - The erroneous `MessageEvent`.
	 */
	onMessageError?: (e: MessageEvent) => void;
	/**
	 * Called when an uncaught error occurs inside the worker.
	 * @param e - The `ErrorEvent` dispatched by the worker.
	 */
	onError?: (e: Event) => void;
}

/**
 * Result object returned by [useWebWorker](https://react-tools.ndria.dev/hooks/api-dom/useWebWorker).
 */
export interface UseWebWorkerResult {
	/**
	 * Post a message to the worker thread.
	 * @param message - The data to send (must be structured-cloneable or transferable).
	 * @param transfer - Optional array of `Transferable` objects to transfer ownership of, or
	 *   a `StructuredSerializeOptions` object.
	 */
	send: <T>(message: T, transfer?: Transferable[] | StructuredSerializeOptions) => void;
	/**
	 * Immediately terminate the worker, stopping its execution.
	 * Any pending messages are discarded.
	 */
	terminate: Worker["terminate"];
}
