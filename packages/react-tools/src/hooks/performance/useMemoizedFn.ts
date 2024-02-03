/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useLayoutEffect, useRef } from "react";

/**
 * **`useMemoizedFn`**: Hook to store a function that will never change while keeping its dependencies always up to date. Can be used instead of _useCallback_, without esplicity dependencies array. [See demo](https://nDriaDev.io/react-tools/#/hooks/performance/useMemoizedFn)
 * @param {T} fn
 * @returns {T} memoizedFn
 */
export const useMemoizedFn = <T extends (...args: any[]) => any>(fn: T) => {
	const fnRef = useRef<T>(fn);

	const memoizedFn = useCallback((...args: Parameters<T>):ReturnType<T> => fnRef.current(...args), []);

	useLayoutEffect(() => {
		fnRef.current = fn
	});

	return memoizedFn as unknown as T;
}