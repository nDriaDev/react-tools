import { KeyboardEvent as KeyEvt, RefObject, useMemo } from "react";
import { useEventListener } from "./useEventListener";
import { hotKeyHandler } from "../../utils";

/**
 * __`useHotKeys`__: Hook to listen for the keyboard press, support key combinations, built on [hotKeyHandler](#/hotKeyHandler) utility function. [See demo](https://react-tools.ndria.dev/#/hooks/events/useHotKeys)
 * @param {Object} options
 * @param {`${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`} options.hotKey - hotKey string: _ctrlCommand_ indicates to listen __Ctrl__ (on Windows) or __Command__ (on Mac) keys.
 * @param {"keydown"|"keyup"} [options.type="keydown"] - event type.
 * @param {(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void | Promise<void>} options.listener - listener to be executed on specified event.
 * @param {RefObject<HTMLElement> | Window} [options.target=window] - element on which attaching eventListener.
 * @param {boolean | AddEventListenerOptions} [options.listenerOpts] - options for listener.
 * @returns {()=>void} remove - used to manually remove the eventListener, otherwise is removed when component is unmounted.
 */
export const useHotKeys = ({ hotKey, type = "keydown", target = window, listener, listenerOpts }: { hotKey: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, type?: "keydown" | "keyup", target?: RefObject<HTMLElement> | Window, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>, listenerOpts?: boolean | AddEventListenerOptions }): (() => void) => {
	const handler = useMemo(() => {
		const handler = hotKeyHandler(hotKey, listener);
		return handler;
	}, [hotKey, listener]);

	const remove = useEventListener({
		type,
		listener: handler,
		listenerOpts,
		element: target,
		effectType: "normal"
	});

	return remove;
}