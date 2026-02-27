import { UseReducedMotionResult } from "../../models";
import { useMediaQuery } from "./useMediaQuery"

/**
 * **`useReducedMotion`**: Hook to detect if user prefers to reduce motion.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useReducedMotion)
 * @returns {UseReducedMotionResult} result {@link UseReducedMotionResult}
 */
export const useReducedMotion = (): UseReducedMotionResult => {
	const value = useMediaQuery('(prefers-reduced-motion: reduce)');
	return value.matches;
}