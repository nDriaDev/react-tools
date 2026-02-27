import { useMemo, useRef } from "react"
import { isDeepEqual } from "../../utils";
import { UseMemoCompareProps, UseMemoCompareResult } from "../../models";

/**
 * **`useMemoDeepCompare`**: custom useMemo that returns memoized value that changes only if deps are different in depth.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/performance/useMemoDeepCompare)
 * @template T - The type of the memoized value produced by `cb`. Inferred automatically from its return type.
 * @param {UseMemoCompareProps<T,unknown>["cb"]} cb - {@link UseMemoCompareProps}
 * @param {UseMemoCompareProps<T,unknown>["deps"]} deps - {@link UseMemoCompareProps}
 * @returns {UseMemoCompareResult<T>} result - {@link UseMemoCompareResult}
 */
export const useMemoDeepCompare = <T = unknown>(cb: UseMemoCompareProps<T, unknown>["cb"], deps: UseMemoCompareProps<T, unknown>["deps"]): UseMemoCompareResult<T> => {
	const currentDeps = useRef<UseMemoCompareProps<T, unknown>["deps"]>();

	if (!currentDeps.current || !isDeepEqual(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(cb, currentDeps.current);
}