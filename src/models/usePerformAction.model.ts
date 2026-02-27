/**
 * Parameters accepted by [usePerformAction](https://react-tools.ndria.dev/hooks/events/usePerformAction).
 *
 * @template T - The type of the callback function. Must extend a function accepting any number of unknown arguments and returning void.
 */
export type UsePerformActionProps<T extends (...args: unknown[]) => void> = {
	/**
	 * The function to wrap. Its parameter types are preserved on the returned
	 * stable callback via `Parameters<T>`, ensuring type safety at call sites.
	 */
	cb: T;
};

/**
 * Return value of [usePerformAction](https://react-tools.ndria.dev/hooks/events/usePerformAction).
 *
 * A stable memoized function with the same parameter signature as `cb`. Calling it
 * always invokes the latest version of `cb` without the wrapped function identity
 * changing between renders.
 *
 * @template T - The type of the original callback function.
 */
export type UsePerformActionResult<T extends (...args: unknown[]) => void> =
	(...args: Parameters<T>) => void;