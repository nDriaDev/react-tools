import { RefObject } from "react";

/**
 * Parameters accepted by all overloads of [useEventListener](https://react-tools.ndria.dev/hooks/events/useEventListener).
 *
 * @template T - The event type key (e.g. `"click"`, `"keydown"`). Must be a key of `DocumentEventMap`, `HTMLElementEventMap`, `WindowEventMap`, or an arbitrary string for custom events.
 * @template E - The element type the listener is attached to.
 */
export type UseEventListenerProps<T extends string, E extends Element = Element> = {
	/**
	 * The event type or array of event types to listen for (e.g. `"click"` or
	 * `["mouseenter", "mouseleave"]`). All types in the array share the same
	 * `listener` callback.
	 */
	type: T | T[];
	/**
	 * The event handler invoked whenever one of the specified event types fires.
	 * May return a value or a `Promise` — the return value is ignored by the hook.
	 */
	listener: (evt: Event) => unknown | Promise<unknown>;
	/**
	 * The target on which the listener is registered. Accepts a React
	 * `RefObject<E>`, a direct element reference, or `Window`.
	 * Defaults to `window` when omitted.
	 */
	element ?: RefObject<E> | E | Window;
	/**
	 * Options forwarded to `addEventListener` as the third argument. Accepts either
	 * a boolean shorthand for `capture` or a full {@link AddEventListenerOptions}
	 * object. When omitted, the listener is registered with the browser defaults.
	 */
	listenerOpts ?: boolean | AddEventListenerOptions;
	/**
	 * Controls which React effect hook is used to register the event listener:
	 * - **`"normal"`** *(default)* — Uses `useEffect`, which runs asynchronously
	 *   after the browser has painted.
	 * - **`"layout"`** — Uses `useLayoutEffect`, which runs synchronously after
	 *   DOM mutations but before the browser paints. Prefer this when the listener
	 *   needs to read or modify layout immediately.
	 */
	effectType ?: "normal" | "layout";
};

/**
 * Return value of [useEventListener](https://react-tools.ndria.dev/hooks/events/useEventListener).
 *
 * A stable cleanup function that manually removes all registered event listeners
 * from the target element. Calling it is optional — the hook cleans up
 * automatically on unmount — but useful to detach listeners earlier on demand.
 */
export type UseEventListenerResult = () => void;