import { RefObject } from "react";

/**
 * Props accepted by [useInfiniteScroll](https://react-tools.ndria.dev/hooks/events/useInfiniteScroll).
 *
 * @template T - The type of the data returned by each page request.
 * @template E - The scrollable container element type, extending {@link Element}.
 */
export interface UseInfiniteScrollProps<T, E extends Element> {
	/**
	 * An async function that fetches the next page of data. Receives the
	 * accumulated result of all previous requests as an optional argument,
	 * enabling cursor-based or offset-based pagination strategies. The resolved
	 * value is stored as the new `data` in {@link UseInfiniteScrollResult}.
	 */
	request: (data?: T) => Promise<T>;

	/**
	 * A React `RefObject` attached to the scrollable container element to
	 * monitor. When the user scrolls within `threshold` pixels of the bottom
	 * of this element, the next page request is triggered automatically.
	 */
	ref: RefObject<E>;

	/**
	 * A predicate called after each successful request to determine whether
	 * more pages are available. Receives the latest resolved data and should
	 * return `true` to allow further requests, or `false` to stop automatic
	 * fetching and set `fullData` to `true` in {@link UseInfiniteScrollResult}.
	 */
	hasMoreData: (data?: T) => boolean;

	/**
	 * Distance in pixels from the bottom of the scrollable container at which
	 * the next page request is triggered. A value of `0` fires the request
	 * exactly when the bottom is reached; higher values trigger it earlier.
	 *
	 * @default 0
	 */
	threshold?: number;

	/**
	 * Called synchronously before each page request begins. Use this to show
	 * a custom loading indicator or perform any pre-request side effects.
	 */
	onBefore?: () => void;

	/**
	 * Called after each successful page request. Use this to hide a loading
	 * indicator or perform any post-request side effects.
	 */
	onSuccess?: () => void;

	/**
	 * Called when a page request throws an error. Receives the thrown value,
	 * which may be an `Error` or any other type depending on the `request`
	 * implementation. When omitted, errors are silently swallowed.
	 */
	onError?: (err: unknown) => void;
}

/**
 * Return value of {@link useInfiniteScroll}.
 *
 * @template T - The type of the data returned by each page request.
 */
export interface UseInfiniteScrollResult<T> {
	/**
	 * The data returned by the most recent successful `request` call.
	 * `undefined` before the first page has loaded.
	 */
	data: T | undefined;

	/**
	 * `true` while a `request` call is currently in-flight, `false` otherwise.
	 * Use this to render a loading indicator.
	 */
	loading: boolean;

	/**
	 * `true` when `hasMoreData` returned `false` after the most recent request,
	 * indicating that all available pages have been loaded and no further
	 * automatic requests will be triggered.
	 */
	fullData: boolean;

	/**
	 * Imperatively updates the current `data` without triggering a new `request`
	 * call. Accepts either a direct replacement value of type `T` or an updater
	 * function that receives the current data and returns the next value. Useful
	 * for optimistic updates or local mutations.
	 */
	updateData: (data: T | ((currentState?: T) => T)) => void;

	/**
	 * Manually triggers the next page request using the same logic as the
	 * automatic scroll-triggered fetch. Resolves when the request completes,
	 * regardless of success or failure.
	 */
	loadData: () => Promise<void>;
}