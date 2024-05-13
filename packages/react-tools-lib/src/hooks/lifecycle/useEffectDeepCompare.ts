import { DependencyList, EffectCallback, useEffect, useRef } from "react"
import { isDeepEqual } from "../../utils";

/**
 * **`useEffectDeepCompare`**: custom useEffect that reexecutes EffectCallback only when deps are different in depth. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useEffectDeepCompare)
 * @param {EffectCallback} cb - Imperative function that can return a cleanup function.
 * @param {DependencyList} deps - dependency list.
 * @returns {void}
 */
export const useEffectDeepCompare = (cb: EffectCallback, deps: DependencyList):void => {
	const currentDeps = useRef<DependencyList>();

	if (!currentDeps.current || !isDeepEqual(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(cb, currentDeps.current);
}