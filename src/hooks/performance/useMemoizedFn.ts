import { useCallback, useLayoutEffect, useRef } from "react";
import { UseMemoizedFnProps, UseMemoizedFnResult } from "../../models";

/**
 * **`useMemoizedFn`**: Hook to store a function that will never change while keeping its dependencies always up to date. Can be used instead of _useCallback_, without esplicity dependencies array.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/performance/useMemoizedFn)
 * @template T - The type of the function to memoize. Must be a callable with any argument and return type. Inferred automatically from the `fn` argument.
 * @param {UseMemoizedFnProps<T>["fn"]} fn - {@link UseMemoizedFnProps}
 * @returns {UseMemoizedFnResult<T>} result - {@link UseMemoizedFnResult}
 */
export const useMemoizedFn = <T extends (...args: any[]) => any>(fn: UseMemoizedFnProps<T>["fn"]): UseMemoizedFnResult<T> => {
	const fnRef = useRef<T>(fn);

	const memoizedFn = useCallback((...args: Parameters<T>):ReturnType<T> => fnRef.current(...args), []);

	useLayoutEffect(() => {
		fnRef.current = fn
	});

	return memoizedFn as unknown as T;
}