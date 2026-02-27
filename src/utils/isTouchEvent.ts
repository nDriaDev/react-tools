import { SyntheticEvent } from "react";
import { IIsTouchEvent } from "../models";

/**
 * __`isTouchEvent`__: It returns true if the event param is of TouchEvent type.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/isTouchEvent)
 * @param {SyntheticEvent | Event} event
 * @returns {boolean} result
 */
export const isTouchEvent: IIsTouchEvent = (event: SyntheticEvent | Event): boolean => {
	return (event as SyntheticEvent).nativeEvent
		? window.TouchEvent
			? (event as SyntheticEvent).nativeEvent instanceof TouchEvent
			: "touches" in (event as SyntheticEvent).nativeEvent
		: event instanceof TouchEvent;
}