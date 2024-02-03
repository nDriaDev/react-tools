import { DependencyList, useMemo, useRef } from "react"
import { isDeepEqual } from "../../utils";

/**
 * **`useMemoDeepCompare`**: custom useMemo that returns memoized value that changes only if deps are different in depth. [See demo](https://nDriaDev.io/react-tools/#/hooks/performance/useMemoDeepCompare)
 * @param {() => T} factory - computes value.
 * @param {DependencyList} deps - DependencyList.
 * @returns {T} result - memoized value
 */
export const useMemoDeepCompare = <T=unknown>(cb: () => T, deps: DependencyList):T => {
	const currentDeps = useRef<DependencyList>();

	if (!currentDeps.current || !isDeepEqual(currentDeps.current, deps)) {
		currentDeps.current = deps;
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(cb, currentDeps.current);
}