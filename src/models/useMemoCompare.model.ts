import { CompareFn } from "./common.model";
import { DependencyListTyped } from "./utilityTypes.model";

/**
 * Parameters accepted by [useMemoCompare](https://react-tools.ndria.dev/hooks/performance/useMemoCompare).
 *
 * @template T - The type of the memoized value produced by `cb`. Inferred automatically from its return type.
 * @template E - The tuple type of the dependency list. Inferred automatically from the `deps` argument, providing stricter typing than the standard `DependencyList`.
 */
export type UseMemoCompareProps<T = unknown, E = unknown> = {
	/**
	 * A factory function that computes the memoized value. Re-invoked only when
	 * `compareFn` determines that the dependencies have changed between renders.
	 * When the dependencies are considered unchanged, the previous value is
	 * returned without calling `cb` again.
	 */
	cb: () => T;

	/**
	 * A strictly-typed dependency array (same semantics as `useMemo`). Passed to
	 * `compareFn` on each render to determine whether the memoized value should
	 * be recomputed. Using {@link DependencyListTyped} instead of the standard
	 * `DependencyList` provides compile-time checking of dependency types.
	 */
	deps: DependencyListTyped<E>;

	/**
	 * An optional custom comparison function used to decide whether the dependencies
	 * have changed between renders. Receives the previous and next dependency arrays
	 * and should return `true` when they are considered equal (i.e. the memoized
	 * value should be kept) and `false` when they differ (i.e. `cb` should be
	 * re-invoked). When omitted, a deep equality check is used by default.
	 */
	compareFn?: CompareFn<E>;
};

/**
 * Return value of [useMemoCompare](https://react-tools.ndria.dev/hooks/performance/useMemoCompare).
 *
 * The memoized value returned by `cb`. Recomputed only when `compareFn`
 * determines that the dependencies have changed; otherwise the previous
 * value is preserved across renders.
 *
 * @template T - The type of the memoized value.
 */
export type UseMemoCompareResult<T> = T;
