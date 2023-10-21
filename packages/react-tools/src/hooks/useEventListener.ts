import { RefObject, useEffect, useRef } from "react"
import { useMemoizedFunction } from ".";

/**
 * __`useEventListener`__: Hook to simplify add and remove EventListener use. It's persist during rerendering and automatically remove eventlistener on unMount component lifecycle.
 * @param {Object} options
 * @param {string} options.type - event type
 * @param {(evt: Event | CustomEvent) => void} options.listener - listener to be executed on specified event
 * @param {RefObject<HTMLElement> | Window} [options.element=window] - element on which attaching eventListener
 * @param {boolean | AddEventListenerOptions} [options.listenerOpts] - options for listener
 * @returns {()=>void} remove - used to manually remove the eventListener
 */
export const useEventListener = ({ type, listener, element = window, listenerOpts }: { type: string, listener: (evt: Event | CustomEvent) => void, element?: RefObject<HTMLElement> | Window, listenerOpts?: boolean | AddEventListenerOptions}) => {
	const optsMemoized = useRef<typeof listenerOpts>(listenerOpts);
	const listenerMemoized = useMemoizedFunction(listener);
	const elementReference = useRef<HTMLElement | Window | null>();

	useEffect(() => {
		const opts = optsMemoized.current;
		elementReference.current = Reflect.has(element, "current")
			? (element as RefObject<HTMLElement>).current !== null
				? (element as RefObject<HTMLElement>).current
				: null
			: element as Window

		elementReference.current && (elementReference.current as HTMLElement | Window).addEventListener(type, listenerMemoized, opts);
		return () => {
			elementReference.current && (elementReference.current as HTMLElement | Window).removeEventListener(type, listenerMemoized, opts);
		}
	}, [element, type, listenerMemoized]);

	const remove = useMemoizedFunction(() => {
		elementReference.current && (elementReference.current as HTMLElement | Window).removeEventListener(type, listenerMemoized, optsMemoized.current);
	});

	return remove;
}