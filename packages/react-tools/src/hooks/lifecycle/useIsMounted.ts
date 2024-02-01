import { useCallback, useRef } from "react"
import { useEffectOnce } from "../lifecycle";

/**
 * **`useIsMounted`**: Hoos to know when a component is mounted or not.
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