import { SyntheticEvent, useCallback, useRef } from "react";
import { UseDoubleClickProps, UseDoubleClickResult } from "../../models";

/**
 * **`useDoubleClick`**: hook to handle double click event. Double clicking in react as well as with vanilla js, it is possible to manage it but it is not possible to have both managers on the same element. Thanks to this hook it is possible to do this, and it works with all events that can be associated with a user click (for example _mousedown_ but also _touchstart_).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useDoubleClick)
 * @template T - The element type the synthetic event originates from.
 * @template E - The underlying native event type.
 * @param {UseDoubleClickProps<T,E>} handler - {@link UseDoubleClickProps}
 * @returns {UseDoubleClickResult<T,E>} result {@link UseDoubleClickResult}
 */
export const useDoubleClick = <T extends Element = Element, E extends Event = Event>(handler: UseDoubleClickProps<T, E>): UseDoubleClickResult<T, E> => {
	const count = useRef(0);
	const tolerance = useRef("tolerance" in handler ? handler.tolerance ?? 300 : 300);
	const idTimeout = useRef<number>();
	const handlerRef = useRef(handler);
	handlerRef.current = handler;

	return useCallback((evt: SyntheticEvent<T, E>) => {
		"persist" in evt && evt.persist();
		!!idTimeout.current && clearTimeout(idTimeout.current);
		count.current++;
		if (count.current === 1) {
			idTimeout.current = setTimeout(() => {
				const h = handlerRef.current;
				if ("singleClick" in h && h.singleClick) {
					h.singleClick(evt);
				}
				count.current = 0;
			}, tolerance.current) as unknown as number;
		}
		if (count.current === 2) {
			clearTimeout(idTimeout.current);
			idTimeout.current = undefined;
			const h = handlerRef.current;
			"doubleClick" in h ? h.doubleClick(evt) : h(evt);
			count.current = 0;
		}
	}, []);
}
