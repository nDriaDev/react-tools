import { SyntheticEvent } from "react";

/**
 * Parameters accepted by [isMouseEvent](https://react-tools.ndria.dev/utils/isMouseEvent).
 *
 * @param event - The React {@link SyntheticEvent} to inspect.
 * @returns `true` when the underlying native event is a {@link MouseEvent}, `false` otherwise.
 */
export interface IIsMouseEvent {
	(event: SyntheticEvent): boolean
}