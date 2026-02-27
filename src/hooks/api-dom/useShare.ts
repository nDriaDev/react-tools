import { useCallback } from "react"
import { UseShareResult } from "../../models";

/**
 * **`useShare`**:
 * @see (https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useShare)
 * @returns {UseShareResult} result {@link UseShareResult}
 */
export const useShare = (): UseShareResult => {
	const isSupported = !!navigator && "share" in navigator;

	const share = useCallback((data?: ShareData) => {
		if (!!navigator && "share" in navigator) {
			return navigator.share(data);
		} else {
			return Promise.resolve();
		}
	}, []);

	return {
		isSupported,
		share
	}
}