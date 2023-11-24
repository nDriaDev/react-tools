import { useNetwork } from "."

/**
 * **`useIsOnline`**: Hook to detect network connection status.
 * @returns {boolean} isOnline
 */
export const useIsOnline = (): boolean => {
	return useNetwork<"isOnline">(["isOnline"]).isOnline;
}