import { SyntheticEvent } from "react";

/**
 * Parameters accepted by [isTouchEvent](https://react-tools.ndria.dev/utils/isTouchEvent).
 *
 * @param event - The React {@link SyntheticEvent} or native {@link Event} to
 *   inspect.
 * @returns `true` when the event is (or wraps) a {@link TouchEvent}, `false`
 *   otherwise. Falls back to a `"touches"` property check on browsers that
 *   do not expose `window.TouchEvent`.
 */
export interface IIsTouchEvent {
	(event: SyntheticEvent | Event): boolean
}