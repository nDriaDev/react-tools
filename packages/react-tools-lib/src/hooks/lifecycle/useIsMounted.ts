import { useCallback, useRef } from "react"
import { useEffectOnce } from "./useEffectOnce";

/**
 * **`useIsMounted`**: Hoos to know when a component is mounted or not. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useIsMounted)
 * @returns {()=>boolean}
 */
export const useIsMounted = (): ()=>boolean => {
	const isMountedRef = useRef(false);

	useEffectOnce(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		}
	})

	return useCallback(()=>isMountedRef.current, []);
}