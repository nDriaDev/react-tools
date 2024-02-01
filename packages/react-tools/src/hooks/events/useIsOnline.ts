import { useNetwork } from "./useNetwork"

/**
 * **`useIsOnline`**: Hook to detect network connection status.
 * @returns {boolean} isOnline
 */
export const useIsOnline = (): boolean => {
	return useNetwork<"isOnline">(["isOnline"]).isOnline;
}