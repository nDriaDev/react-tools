import { useCallback } from "react";
import { useSyncExternalStore } from "../state";

/**
 * **`useDocumentVisibility`**: Hook to track document visibility. Refers to [Document VisibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useDocumentVisibility)
 * @returns {DocumentVisibilityState} documentVisibility
 */
export const useDocumentVisibility = (): DocumentVisibilityState => {
	return useSyncExternalStore(
		useCallback(notif => {
			document.addEventListener("visibilitychange", notif, {passive: true});
			return () => {
				document.removeEventListener("visibilitychange", notif);
			}
		}, []),
		useCallback(() => {
			return document.visibilityState;
		}, [])
	);
}