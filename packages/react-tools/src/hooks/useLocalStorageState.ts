import { Dispatch, SetStateAction, useRef, useState } from "react"
import { useEventDispatcher, useEventListener, useMemoizedFunction } from ".";

/**
 * ___useLocalStorageState___: Custom _useState_ hook implementation using _LocalStorage_, with immutable _getter state_ function and to _remove_ key from localStorage.
 * @param {Object} params
 * @param {string} params.key - item key in local storage.
 * @param {T | () => T} [params.initialState] - value or a function , optional.
 * @param {{serializer: (item: T)=> string, deserializer: (item: string)=> T, mode?: "read" | "write" | "read/write"}} [params.opts={serializer: JSON.stringify, deserializer: jSON.parse, mode: "read/write"}] - object with serializer and deserializer function to handle values in localStorage and mode property to use hook only to read, write or both.
 * @returns {[T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void]}
 */
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: undefined } }): [T, Dispatch<SetStateAction<T>>, () => T, () => void]
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" } }): [T, () => T, () => void]
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "write" } }): [Dispatch<SetStateAction<T>>, () => T, () => void]
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read/write" } }): [T, Dispatch<SetStateAction<T>>, () => T, () => void]
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" | "write" | "read/write" } }): [T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void] {
	const dispatch = useEventDispatcher();
	const serializer = useRef(opts?.serializer || JSON.stringify);
	const deserializer = useRef(opts?.deserializer || JSON.parse);
	const mode = useRef(opts?.mode || "read/write");
	const [internalState, setState] = useState<T>(() => {
		if (mode.current === "write") {
			return null as T;
		}
		const state = localStorage.getItem(key);
		if (state != null) {
			return deserializer.current(state);
		} else if (initialState) {
			const result: T = initialState instanceof Function
				? initialState()
				: initialState;
			localStorage.setItem(key, serializer.current(result));
			return result;
		} else {
			return null as T;
		}
	})

	const listener = useRef((evt: Event) => {
		if ((evt.type === "storage" && (evt as StorageEvent).storageArea !== localStorage) || mode.current === "write") {
			return;
		}
		let newValue;
		if (evt instanceof CustomEvent) {
			newValue = deserializer.current(evt.detail.newValue);
			setState(newValue);
		} else {
			const typedEvent = evt as StorageEvent;
			if (typedEvent.key === key) {
				newValue = typedEvent.newValue ? deserializer.current(typedEvent.newValue) : deserializer.current("null");
				setState(newValue);
			}
		}
	});

	useEventListener({ type: "storage", listener: listener.current, listenerOpts: { capture: true } });

	useEventListener({ type: "local-strg", listener: listener.current, listenerOpts: { capture: true } });

	const updateState: Dispatch<SetStateAction<T>> = useMemoizedFunction((value: T | ((state: T) => T)) => {
		const computedValue = serializer.current(value instanceof Function
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

	if (mode.current === "read") {
		return [
			internalState,
			getter,
			remove.current
		];
	}
	if (mode.current === "write") {
		return [
			updateState,
			getter,
			remove.current
		];
	}
	return [
		internalState,
		updateState,
		getter,
		remove.current
	];
}

export { useLocalStorageState };