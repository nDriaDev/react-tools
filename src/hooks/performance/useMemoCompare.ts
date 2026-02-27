import { useMemo, useRef } from "react"
import { UseMemoCompareProps, UseMemoCompareResult } from "../../models";

/**
 * **`useMemoCompare`**: custom useMemo that returns memoized value that changes only when comparator function, received as third parameter, returns true.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/performance/useMemoCompare)
 * @template T - The type of the memoized value produced by `cb`. Inferred automatically from its return type.
 * @template E - The tuple type of the dependency list. Inferred automatically from the `deps` argument, providing stricter typing than the standard `DependencyList`.
 * @param {UseMemoCompareProps<T,E>["cb"]} cb - {@link UseMemoCompareProps}
 * @param {UseMemoCompareProps<T,E>["deps"]} deps - {@link UseMemoCompareProps}
 * @param {UseMemoCompareProps<T,E>["compareFn"]} [compareFn] - {@link UseMemoCompareProps}
 * @returns {UseMemoCompareResult<T>} result - {@link UseMemoCompareResult}
 */
export const useMemoCompare = <T = unknown, E = unknown>(cb: UseMemoCompareProps<T, E>["cb"], deps: UseMemoCompareProps<T, E>["deps"], compareFn?: UseMemoCompareProps<T, E>["compareFn"]): UseMemoCompareResult<T> => {
	const currentDeps = useRef<UseMemoCompareProps<T,E>["deps"]>();

	if (!currentDeps.current || !compareFn || compareFn(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(cb, currentDeps.current);
}