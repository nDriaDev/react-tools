import { SyntheticEvent } from "react";

/**
 * __`isTouchEvent`__: It returns true if the event param is of TouchEvent type. [See demo](https://react-tools.ndria.dev/#/utils/isTouchEvent)
 * @param {SyntheticEvent} event
 * @returns {boolean} result
 */
export const isTouchEvent = (event: SyntheticEvent | Event): boolean => {
	return (event as SyntheticEvent).nativeEvent
		? window.TouchEvent
			? (event as SyntheticEvent).nativeEvent instanceof TouchEvent
			: "touches" in (event as SyntheticEvent).nativeEvent
		: event instanceof TouchEvent;
}