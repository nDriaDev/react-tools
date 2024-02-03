import { SyntheticEvent } from "react";

/**
 * __`isMouseEvent`__: It returns true if the event param is of MouseEvent type. [See demo](https://nDriaDev.io/react-tools/#/utils/isMouseEvent)
 * @param {SyntheticEvent} event
 * @returns {boolean} result
 */
export const isMouseEvent = (event: SyntheticEvent): boolean => {
	return event.nativeEvent instanceof MouseEvent;
}