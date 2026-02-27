import { RefCallback, RefObject } from "react";

/**
 * Parameters accepted by [useIntersectionObserver](https://react-tools.ndria.dev/hooks/events/useIntersectionObserver).
 *
 * @template T - The element type observed by the {@link IntersectionObserver}.
 */
export type UseIntersectionObserverProps<T extends Element> = {
	/**
	 * The {@link IntersectionObserverCallback} invoked whenever the observed
	 * element's intersection with the viewport (or a configured root) changes.
	 * Receives the array of {@link IntersectionObserverEntry} objects and the
	 * observer instance itself.
	 */
	cb: IntersectionObserverCallback;

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
	 * Options forwarded to the {@link IntersectionObserver} constructor. Controls
	 * the `root`, `rootMargin`, and `threshold` used when calculating intersections.
	 * When omitted, the observer uses the viewport with default margins and a
	 * threshold of `0`.
	 */
	opts?: IntersectionObserverInit;
};

/**
 * Return value of [useIntersectionObserver](https://react-tools.ndria.dev/hooks/events/useIntersectionObserver).
 *
 * @template T - The element type observed by the {@link IntersectionObserver}.
 */
export type UseIntersectionObserverResult<T extends Element> = {
	/**
	 * A React ref callback to attach to the target element. Only populated when
	 * `attachOptions.mode` is `"ref"` — `null` in `"effect"` and `"layout-effect"`
	 * modes where the target is provided via `targetRef` instead.
	 */
	ref: RefCallback<T> | null;

	/**
	 * Disconnects the observer, stopping all intersection notifications. The observer
	 * can be restarted by calling {@link UseIntersectionObserverResult.reconnect}.
	 */
	disconnect: () => void;

	/**
	 * Reconnects the observer after it has been disconnected, resuming intersection
	 * notifications for the target element.
	 */
	reconnect: () => void;
};