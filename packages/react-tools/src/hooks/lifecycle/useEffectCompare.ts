import { EffectCallback, useEffect, useRef } from "react"
import { DependencyListTyped, CompareFn } from "../../models";

/**
 * **`useEffectCompare`**: custom useEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useEffectCompare)
 * @param {EffectCallback} cb - Imperative function that can return a cleanup function.
 * @param {DependencyListTyped} deps - typed dependency list.
 * @param {CompareFn} [compareFn] - optional function that executes comparing between old and new `deps`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useEffect.
 * @returns {void}
*/
export const useEffectCompare = <T = unknown>(cb: EffectCallback, deps: DependencyListTyped<T>, compareFn?: CompareFn<T>) => {
	const currentDeps = useRef<DependencyListTyped<T>>();

	if (!currentDeps.current || !compareFn || compareFn(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(cb, currentDeps.current);
}