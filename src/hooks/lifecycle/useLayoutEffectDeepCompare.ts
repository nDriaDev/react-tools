import { DependencyList, EffectCallback, useLayoutEffect, useRef } from "react"
import { isDeepEqual } from "../../utils";

/**
 * **`useLayoutEffectDeepCompare`**: custom useEffect that reexecutes EffectCallback only when deps are different in depth.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useLayoutEffectDeepCompare)
 * @param {EffectCallback} cb
 * @param {DependencyList} deps - {@link DependencyList}
 * @returns {void} result
 */
export const useLayoutEffectDeepCompare = (cb: EffectCallback, deps: DependencyList):void => {
	const currentDeps = useRef<DependencyList>();

	if (!currentDeps.current || !isDeepEqual(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useLayoutEffect(cb, currentDeps.current);
}