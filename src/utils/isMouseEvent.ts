import { SyntheticEvent } from "react";
import { IIsMouseEvent } from "../models";

/**
 * __`isMouseEvent`__: It returns `true` when the underlying native event is a {@link MouseEvent}, `false` otherwise.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/isMouseEvent)
 * @param {SyntheticEvent} event - {@link SyntheticEvent}
 * @returns {boolean} result
 */
export const isMouseEvent: IIsMouseEvent = (event: SyntheticEvent): boolean => {
	return event.nativeEvent instanceof MouseEvent;
}