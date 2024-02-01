import { RefObject } from "react"
import { useEventListener } from "./useEventListener";

/**
 * **`useContextMenu`**: Hook to add contextmenu event listener. The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
 * @param {Object} param - props
 * @param {(evt: PointerEvent)=>void|Promise<void>} [param.listener] - listener function executed when event fires.
 * @param {RefObject<HTMLElement> | Window} [options.element=window] - element on which attaching eventListener.
 * @param {"normal"|"layout"} [param.effectType="normal"] - props
 * @param {boolean | AddEventListenerOptions} [param.listenerOpts] - props
 */
export const useContextMenu = ({ element, listener, effectType, listenerOpts }: { element: RefObject<HTMLElement> | Window, listener: (evt: PointerEvent) => void | Promise<void>, effectType?: "normal" | "layout", listenerOpts?: boolean | AddEventListenerOptions | undefined }) => {
	useEventListener({
		type: "contextmenu",
		listener,
		effectType,
		listenerOpts,
		element
	})
}