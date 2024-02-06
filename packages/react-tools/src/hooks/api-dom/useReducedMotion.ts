import { useMediaQuery } from "../api-dom"

/**
 * **`useReducedMotion`**: Hook to detect if user prefers to reduce motion. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useReducedMotion)
 * @returns {boolean} result - it is true if user prefers reduced motion, otherwise it is false.
 */
export const useReducedMotion = (): boolean => {
	const value = useMediaQuery('(prefers-reduced-motion: reduce)');
	return value.matches;
}