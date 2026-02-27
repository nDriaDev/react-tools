import { RefObject } from "react"
import { useMemoizedFn } from "../performance";
import { UseEventDispatcherProps, UseEventDispatcherResult } from "../../models";

/**
 * __`useEventDispatcher`__: Hook to dispatch an Event or a CustomEvent.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useEventDispatcher)
 * @param {UseEventDispatcherProps} element - {@link UseEventDispatcherProps}
 * @returns {UseEventDispatcherResult} result {@link UseEventDispatcherResult}
 */
export const useEventDispatcher = (element: UseEventDispatcherProps): UseEventDispatcherResult => {
	const dispatch = useMemoizedFn((evt: Event | CustomEvent) => {
		const target = Reflect.has(element, "current")
			? (element as RefObject<HTMLElement>).current
			: element;
		(target as HTMLElement | Window).dispatchEvent(evt);
	})

	return dispatch;
}