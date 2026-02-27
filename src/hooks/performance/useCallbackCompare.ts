import { useCallback, useRef } from "react"
import { UseCallbackCompareProps, UseCallbackCompareResult } from "../../models"

/**
 * **`useCallbackCompare`**: custom useCallback that returns memoized callback that changes only when comparator function, received as third parameter, returns true.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/performance/useCallbackCompare)
 * @template T - The type of the callback function to memoize. Inferred automatically from the `cb` argument.
 * @template E - The tuple type of the dependency list. Inferred automatically from the `deps` argument, providing stricter typing than the standard `DependencyList`.
 * @param {UseCallbackCompareProps<T,E>["cb"]} cb - {@link UseCallbackCompareProps}
 * @param {UseCallbackCompareProps<T,E>["deps"]} deps - {@link UseCallbackCompareProps}
 * @param {UseCallbackCompareProps<T,E>["compareFn"]} [compareFn] - {@link UseCallbackCompareProps}
 * @returns {UseCallbackCompareResult<T>} result - {@link UseCallbackCompareResult}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const useCallbackCompare = <T extends Function, E = unknown>(cb: UseCallbackCompareProps<T, E>["cb"], deps: UseCallbackCompareProps<T, E>["deps"], compareFn?: UseCallbackCompareProps<T, E>["compareFn"]): UseCallbackCompareResult<T> => {
	const currentDeps = useRef<UseCallbackCompareProps<T,E>["deps"]>();

	if (!currentDeps.current || !compareFn || compareFn(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback(cb, currentDeps.current);
}