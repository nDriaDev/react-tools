import { DependencyList, EffectCallback, useEffect, useRef } from "react"
import { isDeepEqual } from "../../utils";

/**
 * **`useEffectDeepCompare`**: custom useEffect that reexecutes EffectCallback only when deps are different in depth.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useEffectDeepCompare)
 * @param {EffectCallback} cb
 * @param {DependencyList} deps - {@link DependencyList}
 * @returns {void} result
 */
export const useEffectDeepCompare = (cb: EffectCallback, deps: DependencyList):void => {
	const currentDeps = useRef<DependencyList>();

	if (!currentDeps.current || !isDeepEqual(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(cb, currentDeps.current);
}