import { RefObject } from "react"
import { useMemoizedFn } from "../performance";

/**
 * __`useEventDispatcher`__: Hook to dispatch an Event or a CustomEvent. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useEventDispatcher)
 * @param {RefObject<HTMLElement> | Window} [element=window] - target on which dispatch event
 * @returns {(evt: Event | CustomEvent) => void} dispatch - function that dispatch the event on target
 */
export const useEventDispatcher = (element: RefObject<HTMLElement> | Window = window): (evt: Event | CustomEvent) => void => {
	const dispatch = useMemoizedFn((evt: Event | CustomEvent) => {
		const target = Reflect.has(element, "current")
			? (element as RefObject<HTMLElement>).current
			: element;
		(target as HTMLElement | Window).dispatchEvent(evt);
	})

	return dispatch;
}