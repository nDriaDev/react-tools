import { SyntheticEvent } from "react";

/**
 * __`isTouchEvent`__: It returns true if the event param is of TouchEvent type.
 * @param {SyntheticEvent} event
 * @returns {boolean} result
 */
export const isTouchEvent = (event: SyntheticEvent): boolean => {
	return window.TouchEvent
		? event.nativeEvent instanceof TouchEvent
		: "touches" in event.nativeEvent;
}