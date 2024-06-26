import { useCallback, useRef } from "react"
import { DependencyListTyped, CompareFn } from "../../models"

/**
 * **`useCallbackCompare`**: custom useCallback that returns memoized callback that changes only when comparator function, received as third parameter, returns true. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useCallbackCompare)
 * @param {T} cb - callback.
 * @param {DependencyListTyped} deps - typed DependencyList.
 * @param {CompareFn} [compareFn] - optional function that executes comparing between old and new `deps`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useCallback.
 * @returns {T} cb - memoized callback
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const useCallbackCompare = <T extends Function, E = unknown>(cb: T, deps: DependencyListTyped<E>, compareFn?: CompareFn<E>):T => {
	const currentDeps = useRef<DependencyListTyped<E>>();

	if (!currentDeps.current || !compareFn || compareFn(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback(cb, currentDeps.current);
}