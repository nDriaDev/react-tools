import { CompareFn } from "./common.model";
import { DependencyListTyped } from "./utilityTypes.model";

/**
 * Parameters accepted by [useCallbackCompare](https://react-tools.ndria.dev/hooks/performance/useCallbackCompare).
 *
 * @template T - The type of the callback function to memoize. Inferred automatically from the `cb` argument.
 * @template E - The tuple type of the dependency list. Inferred automatically from the `deps` argument, providing stricter typing than the standard `DependencyList`.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type UseCallbackCompareProps<T extends Function, E = unknown> = {
	/**
	 * The callback function to memoize. Returned as-is when the dependencies
	 * are considered unchanged by `compareFn`. A new reference is returned only
	 * when `compareFn` determines that at least one dependency has changed.
	 */
	cb: T;

	/**
	 * A strictly-typed dependency array (same semantics as `useCallback`). Passed
	 * to `compareFn` on each render to determine whether the memoized callback
	 * should be updated. Using {@link DependencyListTyped} instead of the standard
	 * `DependencyList` provides compile-time checking of dependency types.
	 */
	deps: DependencyListTyped<E>;

	/**
	 * An optional custom comparison function used to decide whether the dependencies
	 * have changed between renders. Receives the previous and next dependency arrays
	 * and should return `true` when they are considered equal (i.e. the callback
	 * should be kept) and `false` when they differ (i.e. a new callback reference
	 * should be returned). When omitted, a deep equality check is used by default.
	 */
	compareFn?: CompareFn<E>;
};

/**
 * Return value of [useCallbackCompare](https://react-tools.ndria.dev/hooks/performance/useCallbackCompare).
 *
 * The memoized version of `cb`, with the same type and signature as the original.
 * A new reference is only returned when `compareFn` determines that the dependencies
 * have changed; otherwise the previous reference is preserved across renders.
 *
 * @template T - The type of the original callback function.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type UseCallbackCompareResult<T extends Function> = T;