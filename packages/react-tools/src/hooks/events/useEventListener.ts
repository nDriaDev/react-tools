import { RefObject, useEffect, useLayoutEffect, useRef } from "react"
import { useMemoizedFunction } from "../performance";

/**
 * __`useEventListener`__: Hook to simplify add and remove EventListener use. It's persist during rerendering and automatically remove eventlistener on unMount component lifecycle.
 * @param {Object} options
 * @param {keyof WindowEventMap|(keyof WindowEventMap)[]} options.type - event or events type.
 * @param {(evt: Event | CustomEvent) => void} options.listener - listener to be executed on specified event.
 * @param {RefObject<Element> | Element | Window} [options.element=window] - element on which attaching eventListener.
 * @param {boolean | AddEventListenerOptions} [options.listenerOpts] - options for listener.
 * @param {"normal"|"layout"} [options.effectType="normal"] - option to set which hook is used to attach event listener.
 * @returns {()=>void} remove - used to manually remove the eventListener, otherwise is removed when component is unmounted.
 */
function useEventListener<T extends keyof DocumentEventMap, E extends Element>({ type, listener, element, listenerOpts, effectType }: { type: T | (T[]), listener: ((evt: DocumentEventMap[T]) => unknown | Promise<unknown>), element?: RefObject<E> | E | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void);
function useEventListener<T extends keyof HTMLElementEventMap, E extends Element>({ type, listener, element, listenerOpts, effectType }: { type: T | (T[]), listener: ((evt: HTMLElementEventMap[T]) => unknown | Promise<unknown>), element?: RefObject<E> | E | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void);
function useEventListener<T extends string, E extends Event|CustomEvent, S extends Element>({ type, listener, element, listenerOpts, effectType }: { type: T | (T[]), listener: ((evt: E) => unknown | Promise<unknown>), element?: RefObject<S> | S | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void);
function useEventListener<T extends keyof WindowEventMap, E extends Element>({ type, listener, element = window, listenerOpts, effectType = "normal" }: { type: T|(T[]), listener: ((evt: WindowEventMap[T]) => unknown | Promise<unknown>), element?: RefObject<E> | E | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void) {
	const optsMemoized = useRef<typeof listenerOpts>(listenerOpts);
	const elementReference = useRef<Element | Window | null>();
	const effect = effectType === "layout" ? useLayoutEffect : useEffect;
	const types = useRef(Array.isArray(type) ? type : [type]);
	effect(() => {
		const opts = optsMemoized.current;
		elementReference.current = Reflect.has(element, "current")
			? (element as RefObject<Element>)?.current !== null
				? (element as RefObject<Element>).current
				: null
			: element as Window

		elementReference.current && types.current.forEach(type => (elementReference.current as Element | Window).addEventListener(type, listener as EventListenerOrEventListenerObject, opts));
		return () => {
			elementReference.current && types.current.forEach(type => (elementReference.current as Element | Window).removeEventListener(type, listener as EventListenerOrEventListenerObject, opts));
		}
	}, [element, listener]);

	const remove = useMemoizedFunction(() => {
		elementReference.current && types.current.forEach(type => (elementReference.current as Element | Window).removeEventListener(type, listener as EventListenerOrEventListenerObject, optsMemoized.current));
	});

	return remove;
}

export { useEventListener };