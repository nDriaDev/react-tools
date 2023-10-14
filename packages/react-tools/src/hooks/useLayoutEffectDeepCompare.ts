import { DependencyList, EffectCallback, useLayoutEffect, useRef } from "react"
import { isDeepEqual } from "../utils";

/**
 * **`useLayoutEffectDeepCompare`**: custom useEffect that reexecutes EffectCallback only when deps are different in depth.
 * @param {EffectCallback} cb - Imperative function that can return a cleanup function.
 * @param {DependencyList} deps - dependency list.
 * @returns {void}
 */
export const useLayoutEffectDeepCompare = (cb: EffectCallback, deps: DependencyList):void => {
	const currentDeps = useRef<DependencyList>();

	if (!currentDeps.current || !isDeepEqual(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useLayoutEffect(cb, currentDeps.current);
}