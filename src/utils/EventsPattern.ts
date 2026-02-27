/**
 * A minimal pub/sub event bus built on top of the native {@link EventTarget} API.
 * Provides `dispatch` and `listen` as ergonomic wrappers around `dispatchEvent`
 * and `addEventListener` / `removeEventListener`.
 *
 * @example
 * ```ts
 * const bus = new EventsPattern();
 * const unlisten = bus.listen("my-event", evt => console.log(evt));
 * bus.dispatch(new CustomEvent("my-event", { detail: 42 }));
 * unlisten(); // removes the listener
 * ```
 */
export class EventsPattern extends EventTarget {
	constructor() {
		super();
	}

	/**
	 * Dispatches `event` on this target, synchronously invoking all matching
	 * listeners registered via {@link EventsPattern.listen}.
	 *
	 * @param event - The {@link Event} to dispatch.
	 */
	dispatch(event: Event) {
		this.dispatchEvent(event);
	}

	/**
	 * Registers a listener for events of the given `type`. Returns a stable
	 * cleanup function that removes the listener when called.
	 *
	 * @param type - The event type string to listen for (e.g. `"click"`).
	 * @param callback - The handler invoked when a matching event is dispatched.
	 * @param options - Options forwarded to `addEventListener` as the third
	 *   argument. Accepts either a boolean shorthand for `capture` or a full
	 *   {@link AddEventListenerOptions} object.
	 * @returns A cleanup function that removes the registered listener.
	 */
	listen(type: string, callback: (evt: Event) => void, options?: boolean | AddEventListenerOptions) {
		this.addEventListener(type, callback, options);
		return () => {
			this.removeEventListener(type, callback, options);
		}
	}
}