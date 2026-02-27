import { DependencyList } from "react";

/**
 * Parameters accepted by [usePromise](https://react-tools.ndria.dev/hooks/api-dom/usePromise).
 *
 * @template T - The resolved value type of the promise returned by `promise`.
 */
export type UsePromiseProps<T> = {
	/**
	 * A zero-argument factory function that returns the `Promise` to resolve.
	 * Invoked on the first render and again whenever `deps` changes or the cache
	 * is invalidated. The component suspends while the promise is pending, and
	 * re-renders with the resolved value once it fulfills.
	 */
	promise: () => Promise<T>;
	/**
	 * A React dependency array (same semantics as `useEffect`). When any dependency
	 * changes, the cached result is considered stale and `promise` is re-invoked on
	 * the next render.
	 */
	deps: DependencyList;
	/**
	 * Optional configuration that controls caching, error handling, and invalidation behaviour.
	 */
	options?: UsePromiseOptions;
};

/**
 * Options accepted by {@link usePromise}.
 */
export type UsePromiseOptions = {
	/**
	 * Controls how long the resolved result is retained in the module-level cache:
	 * - **`"unmount"`** — The cache entry is deleted when the component unmounts,
	 *   forcing a fresh fetch on the next mount.
	 * - **`number`** — A time-to-live in **seconds**. The entry expires that many
	 *   seconds after the promise resolves and is re-fetched on the next render.
	 * - **`undefined`** *(default)* — The entry persists indefinitely for the
	 *   lifetime of the module.
	 */
	cache?: "unmount" | number;
	/**
	 * When `true`, a rejected promise automatically removes its cache entry after a
	 * short delay (~20 ms), allowing the factory to be retried on the next render
	 * instead of permanently surfacing the error to the nearest `<ErrorBoundary>`.
	 * Defaults to `false`.
	 */
	cleanOnError?: boolean;
	/**
	 * An explicit string key used to identify this promise in the module-level cache.
	 * - When provided, this value is used as the cache key instead of the serialised
	 *   `promise.toString()` representation, which may be unreliable after minification.
	 * - Providing a stable identifier is strongly recommended in production builds.
	 */
	identifier?: string;
	/**
	 * Controls whether the hook exposes a manual invalidation callback:
	 * - **`true`** — The hook returns `[T, () => void]`: the resolved value paired with
	 *   an `invalidate` function that clears the cache entry and triggers a re-render,
	 *   causing the factory to be re-invoked.
	 * - **`false` | `undefined`** *(default)* — The hook returns `T` directly, with no
	 *   invalidation handle exposed.
	 */
	invalidateManually?: boolean;
};

/**
 * Return value of [usePromise](https://react-tools.ndria.dev/hooks/api-dom/usePromise) when `invalidateManually` is `true`.
 *
 * @template T - The resolved value type of the promise.
 */
export type UsePromiseResultWithInvalidate<T> = [
	/**
	 * The resolved value of the promise. Only accessible after the promise fulfills;
	 * the component suspends while pending and throws for `<ErrorBoundary>` on rejection.
	 */
	T,
	/**
	 * A stable callback that clears the cache entry for this promise and triggers a
	 * re-render, causing the factory to be re-invoked on the next render cycle.
	 * Useful for manual cache invalidation after a mutation or user action.
	 */
	() => void
];