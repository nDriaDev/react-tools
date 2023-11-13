import { useCallback, useRef } from "react";
import { useSyncExternalStore } from ".";

/**
 * **`useActiveElement`**: Hook that returns activeElement and listen its changes.
 * @returns {Element | null} activeELement
 */
export const useActiveElement = ():Element|null => {
	const previousElem = useRef<Element | null>(null);

	return useSyncExternalStore(
		useCallback(notif => {
			previousElem.current = document.activeElement;
			const listener = () => notif();
			addEventListener("focusin", listener, true);
			addEventListener("focusout", listener, true);

			return () => {
				addEventListener("focusin", listener, true);
				addEventListener("focusout", listener, true);
				previousElem.current = null;
			}
		}, []),
		useCallback(() => {
			const elem = document.activeElement;
			previousElem.current !== elem && (previousElem.current = elem);
			return previousElem.current;
		}, [])
	)
}