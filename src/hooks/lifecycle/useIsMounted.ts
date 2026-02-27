import { useCallback, useRef } from "react"
import { useEffectOnce } from "./useEffectOnce";
import { UseIsMountedResult } from "../../models";

/**
 * **`useIsMounted`**: Hoos to know when a component is mounted or not.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useIsMounted)
 * @returns {UseIsMountedResult} result - {@link UseIsMountedResult}
 */
export const useIsMounted = (): UseIsMountedResult => {
	const isMountedRef = useRef(false);

	useEffectOnce(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		}
	})

	return useCallback(() => isMountedRef.current, []);
}