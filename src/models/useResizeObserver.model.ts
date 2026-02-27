import { RefCallback, RefObject } from "react";

/**
 * Parameters accepted by [useResizeObserver](https://react-tools.ndria.dev/hooks/events/useResizeObserver).
 *
 * @template T - The element type observed by the {@link ResizeObserver}.
 */
export type UseResizeObserverProps<T extends Element> = {
	/**
	 * The {@link ResizeObserverCallback} invoked whenever the observed element's
	 * size changes. Receives the array of {@link ResizeObserverEntry} objects and
	 * the observer instance itself.
	 */
	cb: ResizeObserverCallback;

	/**
	 * Controls how the target element is attached to the observer:
	 * - **`{ mode: "ref" }`** — The hook returns a `RefCallback` to attach directly
	 *   to the JSX element. The observer is connected when the ref is set.
	 * - **`{ mode: "effect", targetRef }`** — The observer is connected inside a
	 *   `useEffect` using the provided `RefObject`.
	 * - **`{ mode: "layout-effect", targetRef }`** — The observer is connected
	 *   inside a `useLayoutEffect` using the provided `RefObject`, running
	 *   synchronously before the browser paints.
	 */
	attachOptions:
	| { mode: "ref"; targetRef?: never }
	| { mode: "effect" | "layout-effect"; targetRef: RefObject<T> };

	/**
	 * Options forwarded to the {@link ResizeObserver} `observe()` call. Currently
	 * supports `box` to select which CSS box model to observe (`"content-box"`,
	 * `"border-box"`, or `"device-pixel-content-box"`). When omitted, the observer
	 * defaults to `"content-box"`.
	 */
	opts?: ResizeObserverOptions;
};

/**
 * Return value of [useResizeObserver](https://react-tools.ndria.dev/hooks/events/useResizeObserver).
 *
 * @template T - The element type observed by the {@link ResizeObserver}.
 */
export type UseResizeObserverResult<T extends Element> = {
	/**
	 * A React ref callback to attach to the target element. Only populated when
	 * `attachOptions.mode` is `"ref"` — `null` in `"effect"` and `"layout-effect"`
	 * modes where the target is provided via `targetRef` instead.
	 */
	ref: RefCallback<T> | null;

	/**
	 * Disconnects the observer, stopping all resize notifications. The observer
	 * can be restarted by calling {@link UseResizeObserverResult.reconnect}.
	 */
	disconnect: () => void;

	/**
	 * Reconnects the observer after it has been disconnected, resuming resize
	 * notifications for the target element.
	 */
	reconnect: () => void;
};