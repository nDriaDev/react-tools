import { useCallback, useRef } from "react"
import { isDeepEqual } from "../../utils";
import { UseCallbackCompareProps, UseCallbackCompareResult } from "../../models";

/**
 * **`useCallbackDeepCompare`**: custom useCallback that returns memoized callback that changes only if deps are different in depth.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/performance/useCallbackDeepCompare)
 * @template T - The type of the callback function to memoize. Inferred automatically from the `cb` argument.
 * @param {UseCallbackCompareProps<T,unknown>["cb"]} cb - {@link UseCallbackCompareProps}
 * @param {UseCallbackCompareProps<T,unknown>["deps"]} deps - {@link UseCallbackCompareProps}
 * @returns {UseCallbackCompareResult<T>} result - {@link UseCallbackCompareResult}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const useCallbackDeepCompare = <T extends Function>(cb: UseCallbackCompareProps<T, unknown>["cb"], deps: UseCallbackCompareProps<T, unknown>["deps"]): UseCallbackCompareResult<T> => {
	const currentDeps = useRef<UseCallbackCompareProps<T, unknown>["deps"]>();

	if (!currentDeps.current || !isDeepEqual(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback(cb, currentDeps.current);
}