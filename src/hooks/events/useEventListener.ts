import { RefObject, useEffect, useLayoutEffect, useRef } from "react"
import { useMemoizedFn } from "../performance";
import { UseEventListenerProps, UseEventListenerResult } from "../../models";

/**
 * __`useEventListener`__: Hook to simplify add and remove EventListener use. It's persist during rerendering and automatically remove eventlistener on unMount component lifecycle.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useEventListener)
 * @template T - The event type key (e.g. `"click"`, `"keydown"`). Must be a key of `DocumentEventMap`, `HTMLElementEventMap`, `WindowEventMap`, or an arbitrary string for custom events.
 * @template E - The element type the listener is attached to.
 * @param {UseEventListenerProps} element - {@link UseEventListenerProps}
 * @returns {UseEventListenerResult} result {@link UseEventListenerResult}
 */
function useEventListener<T extends keyof DocumentEventMap, E extends Element>({ type, listener, element, listenerOpts, effectType }: { type: T | (T[]), listener: ((evt: DocumentEventMap[T]) => unknown | Promise<unknown>), element?: RefObject<E> | E | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void);
function useEventListener<T extends keyof HTMLElementEventMap, E extends Element>({ type, listener, element, listenerOpts, effectType }: { type: T | (T[]), listener: ((evt: HTMLElementEventMap[T]) => unknown | Promise<unknown>), element?: RefObject<E> | E | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void);
function useEventListener<T extends string, E extends Event|CustomEvent, S extends Element>({ type, listener, element, listenerOpts, effectType }: { type: T | (T[]), listener: ((evt: E) => unknown | Promise<unknown>), element?: RefObject<S> | S | Window, listenerOpts?: boolean | AddEventListenerOptions, effectType?: "normal" | "layout" }): (() => void);
function useEventListener<T extends keyof WindowEventMap, E extends Element>({ type, listener, element = window, listenerOpts, effectType = "normal" }: UseEventListenerProps<T,E>): UseEventListenerResult {
	const elementReference = useRef<Element | Window | null>(null);
	const effect = effectType === "layout" ? useLayoutEffect : useEffect;
	const optsRef = useRef(listenerOpts);
	const typesRef = useRef(Array.isArray(type) ? type : [type]);
	optsRef.current = listenerOpts;
	typesRef.current = Array.isArray(type) ? type : [type];

	effect(() => {
		const opts = optsRef.current;
		const types = typesRef.current;
		const el = element ?? window;

		elementReference.current = el != null && typeof el === 'object' && 'current' in el
			? (el as RefObject<Element>).current ?? null
			: (el as Window | Element) ?? null;

		elementReference.current && types.forEach(t =>
			(elementReference.current as Element | Window).addEventListener(
				t, listener as EventListenerOrEventListenerObject, opts
			)
		);
		return () => {
			elementReference.current && types.forEach(t =>
				(elementReference.current as Element | Window).removeEventListener(
					t, listener as EventListenerOrEventListenerObject, opts
				)
			);
		}
	}, [element, listener, effectType]);

	const remove = useMemoizedFn(() => {
		elementReference.current && typesRef.current.forEach(t =>
			(elementReference.current as Element | Window).removeEventListener(
				t, listener as EventListenerOrEventListenerObject, optsRef.current
			)
		);
	});

	return remove;
}

export { useEventListener };