import { KeyboardEvent as KeyEvt } from "react";
import { HotKeyHandlerProps, HotKeyHandlerResult } from "../models";

/**
 * **`hotKeyHandler`**: utility function for _onKeyDown_ and _onKeyUp_ events handler that supports keys combination.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/hotKeyHandler)
 * @param {HotKeyHandlerProps["hotKeys"]} hotKeys - {@link HotKeyHandlerProps}
 * @param {HotKeyHandlerProps["listener"]} listener - {@link HotKeyHandlerProps}
 * @returns {HotKeyHandlerResult} result - {@link HotKeyHandlerResult}
 */
export const hotKeyHandler = (hotKeys: HotKeyHandlerProps["hotKeys"], listener: HotKeyHandlerProps["listener"]): HotKeyHandlerResult => {
	return (evt: KeyboardEvent | KeyEvt<HTMLElement>) => {
		let keys = hotKeys.toLowerCase().split("+").map(el => el.trim());
		const modifiers = {
			alt: keys.includes('alt'),
			ctrl: keys.includes('ctrl'),
			meta: keys.includes('meta'),
			ctrlCommand: keys.includes('ctrlcommand'),
			shift: keys.includes('shift'),
		};
		keys = keys.filter(el => !['alt', 'ctrl', 'meta', 'shift', 'ctrlcommand'].includes(el));
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