import { RefObject, useEffect, useLayoutEffect, useRef } from "react"
import { useMemoizedFunction } from ".";

/**
 * __`useEventListener`__: Hook to simplify add and remove EventListener use. It's persist during rerendering and automatically remove eventlistener on unMount component lifecycle.
 * @param {Object} options
 * @param {string} options.type - event type
 * @param {(evt: Event | CustomEvent) => void} options.listener - listener to be executed on specified event
 * @param {RefObject<HTMLElement> | Window} [options.element=window] - element on which attaching eventListener
 * @param {boolean | AddEventListenerOptions} [options.listenerOpts] - options for listener
 * @param {"normal"|"layout"} [options.effectType="normal"] - option to set which hook is used to attach event listener.
 * @returns {()=>void} remove - used to manually remove the eventListener
 */
export const useEventListener = ({ type, listener, element = window, listenerOpts, effectType="normal" }: { type: string, listener: (evt: Event | CustomEvent) => void, element?: RefObject<HTMLElement> | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }) => {
	const optsMemoized = useRef<typeof listenerOpts>(listenerOpts);
	const elementReference = useRef<HTMLElement | Window | null>();
	const effect = effectType === "layout" ? useLayoutEffect : useEffect;

	effect(() => {
		const opts = optsMemoized.current;
		elementReference.current = Reflect.has(element, "current")
			? (element as RefObject<HTMLElement>)?.current !== null
				? (element as RefObject<HTMLElement>).current
				: null
			: element as Window

		elementReference.current && (elementReference.current as HTMLElement | Window).addEventListener(type, listener, opts);
		return () => {
			elementReference.current && (elementReference.current as HTMLElement | Window).removeEventListener(type, listener, opts);
		}
	}, [element, type, listener]);

	const remove = useMemoizedFunction(() => {
		elementReference.current && (elementReference.current as HTMLElement | Window).removeEventListener(type, listener, optsMemoized.current);
	});

	return remove;
}