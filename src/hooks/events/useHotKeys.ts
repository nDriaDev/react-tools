import { useMemo } from "react";
import { useEventListener } from "./useEventListener";
import { hotKeyHandler } from "../../utils";
import { UseHotKeysProps, UseHotKeysResult } from "../../models";

/**
 * __`useHotKeys`__: Hook to listen for the keyboard press, support key combinations, built on [hotKeyHandler](#/hotKeyHandler) utility function.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useHotKeys)
 * @param {UseHotKeysProps} element - {@link UseHotKeysProps}
 * @returns {UseHotKeysResult} result {@link UseHotKeysResult}
 */
export const useHotKeys = ({ hotKey, type = "keydown", target = window, listener, listenerOpts }: UseHotKeysProps): UseHotKeysResult => {
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