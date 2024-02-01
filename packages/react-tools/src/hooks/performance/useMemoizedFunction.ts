import { useCallback, useLayoutEffect, useRef } from "react";

/**
 * **`useMemoizedFunction`**: Hook to store a function that will never change while keeping its dependencies always up to date. Can be used instead of _useCallback_, without esplicity dependencies array.
 * @param {T} fn
 * @returns {T} memoizedFn
 */
export const useMemoizedFunction = <T extends (...args: any[]) => any>(fn: T) => {
	const fnRef = useRef<T>(fn);

	const memoizedFn = useCallback((...args: Parameters<T>):ReturnType<T> => fnRef.current(...args), []);

	useLayoutEffect(() => {
		fnRef.current = fn
	});

	return memoizedFn as unknown as T;
}