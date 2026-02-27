import { RefCallback, RefObject } from "react";

/**
 * Parameters accepted by [useMutationObserver](https://react-tools.ndria.dev/hooks/events/useMutationObserver).
 *
 * @template T - The element type observed by the {@link MutationObserver}.
 */
export type UseMutationObserverProps<T extends Element> = {
	/**
	 * The {@link MutationCallback} invoked whenever a mutation matching the
	 * configured `opts` is detected on the observed element. Receives the array
	 * of {@link MutationRecord} objects and the observer instance itself.
	 */
	cb: MutationCallback;

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
	 * Options forwarded to the {@link MutationObserver} constructor. Controls which
	 * types of mutations are observed (`childList`, `attributes`, `characterData`,
	 * `subtree`, etc.). When omitted, the observer uses the browser defaults.
	 */
	opts?: MutationObserverInit;
};

/**
 * Return value of [useMutationObserver](https://react-tools.ndria.dev/hooks/events/useMutationObserver).
 *
 * @template T - The element type observed by the {@link MutationObserver}.
 */
export type UseMutationObserverResult<T extends Element> = {
	/**
	 * A React ref callback to attach to the target element. Only populated when
	 * `attachOptions.mode` is `"ref"` — `null` in `"effect"` and `"layout-effect"`
	 * modes where the target is provided via `targetRef` instead.
	 */
	ref: RefCallback<T> | null;

	/**
	 * Disconnects the observer, stopping all mutation notifications. The observer
	 * can be restarted by calling {@link UseMutationObserverResult.reconnect}.
	 */
	disconnect: () => void;

	/**
	 * Reconnects the observer after it has been disconnected, resuming mutation
	 * notifications for the target element.
	 */
	reconnect: () => void;

	/**
	 * Empties the observer's record queue and returns an array of
	 * {@link MutationRecord} objects describing all mutations that have been detected
	 * but not yet delivered to the callback. Useful for flushing pending mutations
	 * before disconnecting.
	 */
	takeRecords: () => MutationRecord[];
};