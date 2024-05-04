import { KeyboardEventCode } from "../models";

/**
 * **`clickElementOnKeydownEvent`**: Function which, given a triggering code, executes _click_ on element when a keyDown event with triggering code is executed. [See demo](https://ndriadev.github.io/react-tools/#/utils/clickElementOnKeydownEvent)
 * @param {codeTriggering: KeyboardEventCode} codeTriggering
 * @returns {(e: KeyboardEvent) => void}
 */
export function clickElementOnKeydownEvent(codeTriggering: KeyboardEventCode): (e: KeyboardEvent) => void {
	return (e: KeyboardEvent): void => {
		e.code === codeTriggering && (e.target as HTMLElement)?.click();
	}
}