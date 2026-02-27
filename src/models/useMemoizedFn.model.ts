/**
 * Parameters accepted by [useMemoizedFn](https://react-tools.ndria.dev/hooks/performance/useMemoizedFn).
 *
 * @template T - The type of the function to memoize. Must be a callable with any argument and return type. Inferred automatically from the `fn` argument.
 */
export type UseMemoizedFnProps<T extends (...args: any[]) => any> = {
	/**
	 * The function to wrap with a stable reference. The returned function always
	 * delegates to the latest version of `fn` captured during the most recent
	 * render, without the stable wrapper identity ever changing between renders.
	 * Useful as a replacement for `useCallback` when the dependency array would
	 * be large or difficult to maintain.
	 */
	fn: T;
};

/**
 * Return value of [useMemoizedFn](https://react-tools.ndria.dev/hooks/performance/useMemoizedFn).
 *
 * A stable function with the same signature as `fn` whose identity never changes
 * between renders. Internally always calls the latest version of `fn`, so it is
 * safe to use as an event handler or effect dependency without causing unnecessary
 * re-runs.
 *
 * @template T - The type of the original function.
 */
export type UseMemoizedFnResult<T extends (...args: any[]) => any> = T;
