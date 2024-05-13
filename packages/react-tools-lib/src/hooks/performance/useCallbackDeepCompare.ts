import { DependencyList, useCallback, useRef } from "react"
import { isDeepEqual } from "../../utils";

/**
 * **`useCallbackDeepCompare`**: custom useCallback that returns memoized callback that changes only if deps are different in depth. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useCallbackDeepCompare)
 * @param {T} cb - callback.
 * @param {React.DependencyList} deps - DependencyList.
 * @returns {T} cb - memoized callback
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const useCallbackDeepCompare = <T extends Function>(cb: T, deps: DependencyList):T => {
	const currentDeps = useRef<DependencyList>();

	if (!currentDeps.current || !isDeepEqual(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback(cb, currentDeps.current);
}