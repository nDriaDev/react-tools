import { RefObject } from "react";
import { useEventListener } from "."

/**
 * **`useBeforeUnload`**: Hook to handle beforeunload event.
 * @param {Object} options
 * @param {(evt: BeforeUnloadEvent) => void} options.listener - listener to be executed on beforeunload event fired.
 * @param {RefObject<HTMLElement> | Window} [options.element=window] - element on which attaching eventListener.
 * @param {boolean | AddEventListenerOptions} [options.listenerOpts] - options for listener
 * @returns {()=>void} remove - function to manually remove listener.
 */
export const useBeforeUnload = ({element, listener, opts}:{ element?: RefObject<HTMLElement> | Window | undefined, listener: (evt: BeforeUnloadEvent) => void, opts?: boolean | AddEventListenerOptions}): ()=>void => {
	return useEventListener({
		type: "beforeunload",
		element,
		listener,
		listenerOpts: opts
	});
}