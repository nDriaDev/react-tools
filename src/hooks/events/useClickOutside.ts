import { RefObject, useCallback } from "react"
import { useEventListener } from "./useEventListener";
import { UseClickOutsideProps } from "../../models";

/**
 * **`useClickOutside`**: Hook to listen and execute an action when there is a click outside an element.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useClickOutside)
 * @param {UseClickOutsideProps["target"]} target - {@link UseClickOutsideProps}
 * @param {UseClickOutsideProps["handler"]} handler - {@link UseClickOutsideProps}
 * @returns {void} result
 */
export const useClickOutside = (target: UseClickOutsideProps["target"], handler: UseClickOutsideProps["handler"]):void => {
	const listener = useCallback((e: Event) => {
		const element = (target as RefObject<HTMLElement>)?.current
			? (target as RefObject<HTMLElement>).current
			: target as HTMLElement;
		if (element && !element.contains(e.target as Node)) {
			handler(e);
		}
	}, [target, handler]);

	useEventListener({
		type: "pointerdown",
		listener
	})
}