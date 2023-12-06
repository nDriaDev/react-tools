import { SyntheticEvent, useCallback, useRef } from "react";

/**
 * **`useDoubleClick`**: hook to handle double click event. Double clicking in react as well as with vanilla js, it is possible to manage it but it is not possible to have both managers on the same element. Thanks to this hook it is possible to do this, and it works with all events that can be associated with a user click (for example _mousedown_ but also _touchstart_).
 * @param {((evt: SyntheticEvent<T, E>) => Promise<void>|void)|Object} handler
 * @param {((evt: SyntheticEvent<T, E>) => Promise<void> | void)} handler.doubleClick - callback executed on double click.
 * @param {((evt: SyntheticEvent<T, E>) => Promise<void> | void)} [handler.singleClick] - callback executed on single click.
 * @param {number} [handler.tolerance=300] - delay to execute __singleClick__ callback.
 * @returns {((evt: SyntheticEvent<T, E>) => Promise<void>|void)} callback
 */
export const useDoubleClick = <T extends Element = Element, E extends Event = Event>(handler: ((evt: SyntheticEvent<T, E>) => Promise<void> | void) | { doubleClick: (evt: SyntheticEvent<T, E>) => Promise<void> | void, singleClick?: (evt: SyntheticEvent<T, E>) => Promise<void> | void, tolerance?: number }): ((evt: SyntheticEvent<T, E>) => Promise<void> | void)  => {
	const count = useRef(0);
	const tolerance = useRef("tolerance" in handler ? handler.tolerance : 300);
	const idTimeout = useRef<number>();

	return useCallback((evt: SyntheticEvent<T, E>) => {
		"persist" in evt && evt.persist();
		!!idTimeout.current && clearTimeout(idTimeout.current);
		count.current++;
		if (count.current === 1 && "singleClick" in handler && !!handler.singleClick) {
			idTimeout.current = setTimeout(() => {
				handler.singleClick!(evt);
				count.current = 0;
			}, tolerance.current) as unknown as number;
		}
		if (count.current === 2) {
			"doubleClick" in handler
				? handler.doubleClick(evt)
				: handler(evt);
			count.current = 0;
		}
	}, [handler]);
}
