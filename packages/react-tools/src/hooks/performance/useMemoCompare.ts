import { useMemo, useRef } from "react"
import { DependencyListTyped, CompareFn } from "../../models"

/**
 * **`useMemoCompare`**: custom useMemo that returns memoized value that changes only when comparator function, received as third parameter, returns true.
 * @param {() => T} factory - computes value.
 * @param {DependencyListTyped} deps - typed DependencyList.
 * @param {CompareFn} [compareFn] - optional function that executes comparing between old and new `deps`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useMemo.
 * @returns {T} result - memoized value
 */
export const useMemoCompare = <T = unknown, E = unknown>(cb: () => T, deps: DependencyListTyped<E>, compareFn?: CompareFn<E>):T => {
	const currentDeps = useRef<DependencyListTyped<E>>();

	if (!currentDeps.current || !compareFn || compareFn(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(cb, currentDeps.current);
}