import { SyntheticEvent } from "react";

/**
 * __`isMouseEvent`__: It returns true if the event param is of MouseEvent type.
 * @param {SyntheticEvent} event
 * @returns {boolean} result
 */
export const isMouseEvent = (event: SyntheticEvent) => {
	return event.nativeEvent instanceof MouseEvent;
}