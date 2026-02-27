import { RefObject } from "react";

/**
 * Parameters accepted by [useContextMenu](https://react-tools.ndria.dev/hooks/events/useContextMenu).
 */
export type UseContextMenuProps = {
	/**
	 * The target on which the context menu event listener is registered. Accepts
	 * either a React `RefObject<HTMLElement>` or a direct `Window` reference.
	 */
	element: RefObject<HTMLElement> | Window;

	/**
	 * Callback invoked when the context menu event fires on the target element.
	 * Receives the native {@link PointerEvent} that triggered the context menu.
	 * May return a `Promise` for async handlers.
	 */
	listener: (evt: PointerEvent) => void | Promise<void>;

	/**
	 * Controls which React effect hook is used to register the event listener:
	 * - **`"normal"`** *(default)* — Uses `useEffect`, which runs asynchronously
	 *   after the browser has painted.
	 * - **`"layout"`** — Uses `useLayoutEffect`, which runs synchronously after
	 *   DOM mutations but before the browser paints. Prefer this when the listener
	 *   needs to read or modify layout immediately.
	 */
	effectType?: "normal" | "layout";

	/**
	 * Options forwarded to `addEventListener` as the third argument. Accepts either
	 * a boolean shorthand for `capture` or a full {@link AddEventListenerOptions}
	 * object. When omitted, the listener is registered with the browser defaults.
	 */
	listenerOpts?: boolean | AddEventListenerOptions;
};