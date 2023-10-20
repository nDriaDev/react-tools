import { useCallback, useEffect, useRef } from "react";

/**
 * **`useMemoizedFunction`**: Hook to store a function that will never change while keeping its dependencies always up to date. Can be used instead of _useCallback_.
 * @param {T} fn
 * @returns {T} memoizedFn
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const useMemoizedFunction = <T extends Function>(fn: T) => {
	const fnRef = useRef<T>(fn);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const memoizedFn = useCallback((...args: any) => fnRef.current(...args), []);

	useEffect(() => {
		fnRef.current = fn
	});

	return memoizedFn as unknown as T;
}