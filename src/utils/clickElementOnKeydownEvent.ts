import { ClickElementOnKeydownEventProps, ClickElementOnKeydownEventResult } from "../models";

/**
 * **`clickElementOnKeydownEvent`**: Function which, given a triggering code, executes _click_ on element when a keyDown event with triggering code is executed.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/clickElementOnKeydownEvent)
 * @param {ClickElementOnKeydownEventProps} codeTriggering - {@link ClickElementOnKeydownEventProps}
 * @returns {ClickElementOnKeydownEventResult} result - {@link ClickElementOnKeydownEventResult}
 */
export function clickElementOnKeydownEvent(codeTriggering: ClickElementOnKeydownEventProps): ClickElementOnKeydownEventResult {
	return (e: KeyboardEvent): void => {
		e.code === codeTriggering && (e.target as HTMLElement)?.click();
	}
}