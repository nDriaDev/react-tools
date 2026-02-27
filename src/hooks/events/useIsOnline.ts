import { useNetwork } from "./useNetwork"

/**
 * **`useIsOnline`**: Hook to detect network connection status.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useIsOnline)
 * @returns {boolean} result
 */
export const useIsOnline = (): boolean => {
	return useNetwork<"isOnline">(["isOnline"]).isOnline;
}