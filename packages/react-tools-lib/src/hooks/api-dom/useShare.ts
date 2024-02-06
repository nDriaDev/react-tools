import { useCallback } from "react"

/**
 * **`useShare`**: Hook to use [Web Share Api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useShare)
 * @returns {{isSupported: boolean, share: (data?: ShareData) => Promise<void>}} object - __isSupported__ to known if share API is supported and __share__ function to use Web share API.
 */
export const useShare = (): {isSupported: boolean, share: (data?: ShareData)=>Promise<void>} => {
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