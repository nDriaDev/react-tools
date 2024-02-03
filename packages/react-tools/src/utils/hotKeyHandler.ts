import { KeyboardEvent as KeyEvt } from "react";

/**
 * **`hotKeyHandler`**: utility function for _onKeyDown_ and _onKeyUp_ events handler that supports keys combination. [See demo](https://nDriaDev.io/react-tools/#/utils/hotKeyHandler)
 * @param {`${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`} hotKeys - hotKey string: _ctrlCommand_ indicates to listen __Ctrl__ (on Windows) or __Command__ (on Mac) keys.
 * @param {(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void | Promise<void>} listener - listener to be executed on specified event
 * @returns {(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void}
 */
export const hotKeyHandler = (hotKeys: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>): (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void => {
	return (evt: KeyboardEvent | KeyEvt<HTMLElement>) => {
		let keys = hotKeys.toLowerCase().split("+").map(el => el.trim());
		const modifiers = {
			alt: keys.includes('alt'),
			ctrl: keys.includes('ctrl'),
			meta: keys.includes('meta'),
			ctrlCommand: keys.includes('ctrlcommand'),
			shift: keys.includes('shift'),
		};
		keys = keys.filter(el => !['alt', 'ctrl', 'meta', 'shift', 'ctrlCommand'].includes(el));
		for (let i = 0, size = keys.length; i < size; i++) {
			if (keys[i] === "" && (i + 1) < size && keys[i + 1] === "") {
				keys[i + 1] = "+";
			}
		}
		keys = keys.filter(el => el !== "")
		const { altKey, ctrlKey, metaKey, shiftKey, key: pressedKey } = evt;

		if (modifiers.ctrlCommand) {
			if (!ctrlKey && !metaKey) {
				return;
			}
		} else {
			if (ctrlKey !== modifiers.ctrl) {
				return;
			}
			if (altKey !== modifiers.alt) {
				return;
			}
			if (metaKey !== modifiers.meta) {
				return;
			}
			if (shiftKey !== modifiers.shift) {
				return;
			}
		}
		if (!(keys.includes(pressedKey.toLowerCase()) || keys.includes(evt.code.replace("Key", "")))) {
			return;
		}
		listener && listener(evt);
	}
}