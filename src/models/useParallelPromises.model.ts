import { DependencyList } from "react";

/**
 * Options accepted by [useParallelPromises](https://react-tools.ndria.dev/hooks/api-dom/useParallelPromises).
 */
export type UseParallelPromisesOptions = {
	/**
	 * Controls how long resolved results are retained
	 *   in the module-level cache:
	 *   - **`"unmount"`** — The cache entry is deleted when the component unmounts, forcing
	 *     a fresh fetch on the next mount.
	 *   - **`number`** — A time-to-live in **seconds**. The cache entry expires after the given
	 *     number of seconds from the moment the promise resolves. Expired entries are deleted on
	 *     the next render and the factory is re-invoked.
	 *   - **`undefined`** *(default)* — The cache entry persists indefinitely across mounts and
	 *     unmounts for the lifetime of the module.
	 */
	cache?: "unmount" | number;
	/**
	 * An optional array of explicit string keys used to
	 *   identify each factory in the cache, positionally aligned with the `factories` array.
	 *   - When provided, `identifiers[i]` is used as the cache key for `factories[i]`.
	 *   - When omitted, the cache key is derived by serialising the factory function via
	 *     `toString()`, which may be unreliable after minification. Providing stable explicit
	 *     identifiers is strongly recommended in production builds.
	 */
	identifiers?: string[];
};

/**
 * Parameters accepted by [useParallelPromises](https://react-tools.ndria.dev/hooks/api-dom/useParallelPromises).
 *
 * @template T - A readonly tuple of zero-argument async factory functions. Inferred automatically from the `factories` argument. The return types of each factory determine the corresponding entry in the result tuple.
 */
export type UseParallelPromisesProps<T extends readonly (() => Promise<any>)[]> = {
	/**
	 * A readonly tuple of factory functions, each returning a `Promise`.
	 *   All factories are invoked in parallel on the first render (or after invalidation).
	 *   Each factory must be a zero-argument function: `() => Promise<any>`.
	 */
	factories: T;
	/**
	 * A React dependency array (same semantics as `useEffect`).
	 *   When any dependency changes, the cached result for the affected factory is considered
	 *   stale and the promise is re-executed on the next render.
	 */
	deps: DependencyList;
	/**
	 * Optional configuration object.
	 *   See {@link UseParallelPromisesOptions}.
	 */
	options?: UseParallelPromisesOptions;
};

/**
 * Return value of [useParallelPromises](https://react-tools.ndria.dev/hooks/api-dom/useParallelPromises).
 *
 * @template T - The readonly tuple of factory functions passed to the hook. Used to infer
 *   the type of each entry in `result`.
 */
export type UseParallelPromisesResult<T extends readonly (() => Promise<any>)[]> = {
	/**
	 * A mutable
	 *   tuple whose length and types mirror the `factories` input. `result[K]` is the awaited
	 *   return type of `factories[K]`. This property is only accessible after all promises have
	 *   fulfilled; if any promise is still pending the component suspends, and if any promise
	 *   rejects the error is re-thrown for the nearest `<ErrorBoundary>` to catch.
	 */
	result: { -readonly [K in keyof T]: Awaited<ReturnType<T[K]>> };
	/**
	 * A stable callback that clears **all** entries from
	 *   the shared module-level cache and triggers a re-render, causing every factory to be
	 *   re-invoked on the next render cycle. Useful for manual cache invalidation (e.g. after
	 *   a mutation).
	 */
	invalidate: () => void;
};