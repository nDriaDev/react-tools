import { EffectCallback, useEffect, useRef } from "react"
import { DependencyListTyped, CompareFn } from "../../models";

/**
 * **`useEffectCompare`**: custom useEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useEffectCompare)
 * @template T - The tuple type of the dependency list entries. Defaults to `unknown` when not specified.
 * @param {EffectCallback} cb
 * @param {DependencyListTyped<T>} deps - {@link DependencyListTyped}
 * @param {CompareFn<T>} [compareFn] - {@link CompareFn}
 * @returns {void} result
*/
export const useEffectCompare = <T = unknown>(cb: EffectCallback, deps: DependencyListTyped<T>, compareFn?: CompareFn<T>): void => {
	const currentDeps = useRef<DependencyListTyped<T>>();

	if (!currentDeps.current || !compareFn || compareFn(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(cb, currentDeps.current);
}