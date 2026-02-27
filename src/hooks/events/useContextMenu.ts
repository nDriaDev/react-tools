import { useEventListener } from "./useEventListener";
import { UseContextMenuProps } from "../../models";

/**
 * **`useContextMenu`**: Hook to add contextmenu event listener. The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useContextMenu)
 * @param {UseContextMenuProps} param - {@link UseContextMenuProps}
 * @returns {void}
 */
export const useContextMenu = ({ element, listener, effectType, listenerOpts }: UseContextMenuProps) => {
	useEventListener({
		type: "contextmenu",
		listener,
		effectType,
		listenerOpts,
		element
	})
}