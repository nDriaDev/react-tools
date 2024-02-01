import { useCallback, useRef } from "react";
import { useSyncExternalStore } from "../state";

/**
 * **`useActiveElement`**: Hook that returns activeElement and listen its changes.
 * @returns {Element | null} activeELement
 */
export const useActiveElement = ():Element|null => {
	const previousElem = useRef<Element | null>(null);

	return useSyncExternalStore(
		useCallback(notif => {
			previousElem.current = document.activeElement;
			const idTimeout: { id: number } = { id: 0 };
			const listener = (e: Event) => {
				/**
				 * INFO
				 * When switching from one active element, other than the body,
				 * to another, there is a first rerender due to the focusout event
				 * which returns the body as the active element. To overcome this,
				 * the execution of the notify callback during the focusout event
				 * is delayed by one iteration: if the focusout event is followed
				 * by a focusin event, this will cancel the previous execution
				 * of the notify callback and will only rerender the new active
				 * element.
				 */
				if (e.type === "focusout") {
					idTimeout.id = setTimeout(() => {
						notif()
					}, 0) as unknown as number;
				} else {
					clearTimeout(idTimeout.id);
					notif();
				}
			}
			if (typeof addEventListener === "undefined") {
				throw Error("useActiveElement: hook works only in browser context.");
			}
			addEventListener("focusin", listener, {capture: true, passive: true});
			addEventListener("focusout", listener, { capture: true, passive: true });

			return () => {
				removeEventListener("focusin", listener, true);
				removeEventListener("focusout", listener, true);
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