import { useNetwork } from "./useNetwork"

/**
 * **`useIsOnline`**: Hook to detect network connection status. [See demo](https://react-tools.ndria.dev/#/hooks/events/useIsOnline)
 * @returns {boolean} isOnline
 */
export const useIsOnline = (): boolean => {
	return useNetwork<"isOnline">(["isOnline"]).isOnline;
}