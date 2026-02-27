/**
 * Return value of [useEvents](https://react-tools.ndria.dev/hooks/events/useEvents).
 *
 * A tuple of two functions for listening to and dispatching events on the
 * global `window` object.
 *
 * @template T - The type of the `detail` payload carried by {@link CustomEvent} instances. Defaults to `unknown` when not specified.
 */
export type UseEventsResult<T> = [
	/**
	 * Registers an event listener on the global `window` object for the given
	 * event type. Returns a cleanup function that removes the listener when called.
	 *
	 * @param type - The event type string to listen for (e.g. `"click"`).
	 * @param callback - The handler invoked when the event fires. Receives the
	 *   native {@link Event} or a {@link CustomEvent} whose `detail` is typed as
	 *   `T`.
	 * @param options - Options forwarded to `addEventListener` as the third
	 *   argument. Accepts either a boolean shorthand for `capture` or a full
	 *   {@link AddEventListenerOptions} object.
	 * @returns A cleanup function that removes the registered listener when called.
	 */
	(
		type: string,
		callback: (evt: Event | CustomEvent<T>) => void,
		options?: boolean | AddEventListenerOptions
	) => () => void,

	/**
	 * Dispatches the provided {@link Event} or {@link CustomEvent} on the global
	 * `window` object, synchronously invoking all matching listeners registered
	 * via the first tuple entry.
	 *
	 * @param evt - The event to dispatch.
	 */
	(evt: Event | CustomEvent<T>) => void
];