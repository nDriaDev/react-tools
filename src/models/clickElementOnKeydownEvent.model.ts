import { KeyboardEventCode } from "./utilityTypes.model";

/**
 * Parameters accepted by [clickElementOnKeydownEvent](https://react-tools.ndria.dev/utils/clickElementOnKeydownEvent).
 *
 * A {@link KeyboardEventCode} string identifying the key that triggers a
 * programmatic `.click()` on the focused element when pressed (e.g. `"Enter"`,
 * `"Space"`). Returns a stable `keydown` event handler to attach to a DOM
 * element or `document`.
 */
export type ClickElementOnKeydownEventProps = KeyboardEventCode;

/**
 * Return value of [clickElementOnKeydownEvent](https://react-tools.ndria.dev/utils/clickElementOnKeydownEvent).
 *
 * A `keydown` event handler that calls `.click()` on `document.activeElement`
 * whenever the configured key code is pressed.
 */
export type ClickElementOnKeydownEventResult = (e: KeyboardEvent) => void;