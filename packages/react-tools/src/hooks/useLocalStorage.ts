import { Dispatch, SetStateAction, useRef, useState } from "react"
import { useEventDispatcher, useEventListener, useMemoizedFunction } from ".";

export const useLocalStorage = <T>({ key, initialState, opts = { serializer: JSON.stringify, deserializer: JSON.parse } }: { key: string, initialState?: T | (() => T), opts?: { serializer: (item: T) => string, deserializer: (item: string) => T } }): [T, Dispatch<SetStateAction<T>>, ()=>T, ()=>void] => {
	const dispatch = useEventDispatcher();
	const [internalState, setState] = useState<T>(() => {
		const state = localStorage.getItem(key);
		if (state != null) {
			return opts.deserializer(state);
		} else if (initialState) {
			const result: T = initialState instanceof Function
				? initialState()
				: internalState;
			localStorage.setItem(key, opts.serializer(result));
			return result;
		} else {
			return null as T;
		}
	})

	const listener = useRef((evt: Event) => {
		let newValue;
		if (evt instanceof CustomEvent) {
			newValue = opts.deserializer(evt.detail.newValue);
			setState(newValue);
		} else {
			const typedEvent = evt as StorageEvent;
			if (typedEvent.key === key) {
				newValue = typedEvent.newValue ? opts.deserializer(typedEvent.newValue) : opts.deserializer("null");
				setState(newValue);
			}
		}
	});

	useEventListener({ type: "storage", listener: listener.current, listenerOpts: { capture: true } });

	useEventListener({ type: "local-strg", listener: listener.current, listenerOpts: { capture: true } });

	const updateState: Dispatch<SetStateAction<T>> = useMemoizedFunction((value: T | ((state: T) => T)) => {
		const computedValue = opts.serializer(value instanceof Function
			? value(internalState)
			: value);
		localStorage.setItem(key, computedValue);
		dispatch(new CustomEvent(
			"local-strg",
			{
				detail: {
					key,
					newValue: computedValue,
				}
			}
		));
	});

	const remove = useRef(() => {
		localStorage.removeItem(key);
		setState(null as T);
	});

	const getter = useMemoizedFunction(() => internalState);

	return [
		internalState,
		updateState,
		getter,
		remove.current
	];
}