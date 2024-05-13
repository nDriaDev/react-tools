import { RefObject, useCallback } from "react"
import { useEventListener } from "./useEventListener";

const isClickInside = (node: HTMLElement | null, target: Node | null) => {
	if (!node || !target) {
		return false;
	}
	if (node.contains(target)) {
		return true;
	} else if (node.children.length > 0) {
		for (let i = 0, size = node.children.length; i < size; i++) {
			const result = isClickInside(node.children[i] as HTMLElement, target);
			if (result) {
				return true;
			}
		}
	}
	return false;
}
/**
 * **`useClickOutside`**: Hook to listen and execute an action when there is a click outside an element. [See demo](https://react-tools.ndria.dev/#/hooks/events/useClickOutside)
 * @param {RefObject<HTMLElement> | HTMLElement} target - DOM element or ref
 * @param {(evt:Event)=>void} handler - callback to be executed.
 */
export const useClickOutside = (target: RefObject<HTMLElement> | HTMLElement, handler: (evt: Event) => void):void => {
	const listener = useCallback((e: Event) => {
		const element = (target as RefObject<HTMLElement>)?.current
			? (target as RefObject<HTMLElement>).current
			: target as HTMLElement;
		if (!isClickInside(element, e.target as Node)) {
			handler(e);
		}
	}, [target, handler]);

	useEventListener({
		type: "pointerdown",
		listener
	})
}