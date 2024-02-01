import { RefObject } from "react"
import { useMemoizedFunction } from "../performance";

/**
 * __`useEventDispatcher`__: Hook to dispatch an Event or a CustomEvent
 * @param {RefObject<HTMLElement> | Window} [element=window] - target on which dispatch event
 * @returns {(evt: Event | CustomEvent) => void} dispatch - function that dispatch the event on target
 */
export const useEventDispatcher = (element: RefObject<HTMLElement> | Window = window): (evt: Event | CustomEvent) => void => {
	const dispatch = useMemoizedFunction((evt: Event | CustomEvent) => {
		const target = Reflect.has(element, "current")
			? (element as RefObject<HTMLElement>).current
			: element;
		(target as HTMLElement | Window).dispatchEvent(evt);
	})

	return dispatch;
}