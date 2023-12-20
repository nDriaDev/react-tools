import { KeyboardEvent as KeyEvt, RefObject, useCallback } from "react";
import { useEventListener } from ".";

/**
 * __`useHotKeys`__: Hook to listen for the keyboard press, support key combinations.
 * @param {Object} options
 * @param {`${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`} options.hotKey - hotKey string: _ctrlCommand_ indicates to listen __Ctrl__ (on Windows) or __Command__ (on Mac) keys.
 * @param {"keydown"|"keyup"} [options.type="keydown"] - event type
 * @param {(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void | Promise<void>} options.listener - listener to be executed on specified event
 * @param {RefObject<HTMLElement> | Window} [options.target=window] - element on which attaching eventListener
 * @param {boolean | AddEventListenerOptions} [options.listenerOpts] - options for listener
 * @returns {()=>void} remove - used to manually remove the eventListener, otherwise is removed when component is unmounted.
 */
export const useHotKeys = ({ hotKey, type = "keydown", target = window, listener, listenerOpts }: { hotKey: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, type?: "keydown" | "keyup", target?: RefObject<HTMLElement> | Window, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>, listenerOpts?: boolean | AddEventListenerOptions }): (() => void) => {
	const handler = useCallback((evt: KeyboardEvent | KeyEvt<HTMLElement>) => {
		let keys = hotKey.toLowerCase().split("+").map(el => el.trim());
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
				return false;
			}
		} else {
			if (ctrlKey !== modifiers.ctrl) {
				return false;
			}
			if (altKey !== modifiers.alt) {
				return false;
			}
			if (metaKey !== modifiers.meta) {
				return false;
			}
			if (shiftKey !== modifiers.shift) {
				return false;
			}
		}
		if (!(keys.includes(pressedKey.toLowerCase()) || keys.includes(evt.code.replace("Key", "")))) {
			return false
		}
		listener && listener(evt);
	}, [hotKey, listener]);

	const remove = useEventListener<KeyboardEvent>({
		type,
		listener: handler,
		listenerOpts,
		element: target,
		effectType: "normal"
	});

	return remove;
}