import { Dispatch, SetStateAction, useMemo, useRef, useSyncExternalStore } from "react";
import { useMemoizedFn } from "../performance";
import { useEvents } from "../events";

/**
 * ___useSessionStorageState___: Custom _useState_ hook implementation using _sessionStorage_, with immutable _getter state_ function and to _remove_ key from sessionStorage. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useSessionStorageState)
 * @param {Object} params
 * @param {string} params.key - item key in session storage.
 * @param {T | () => T} [params.initialState] - value or a function , optional.
 * @param {{serializer: (item: T)=> string, deserializer: (item: string)=> T, mode?: "read" | "write" | "read/write"}} [params.opts={serializer: JSON.stringify, deserializer: jSON.parse, mode: "read/write"}] - object with serializer and deserializer function to handle values in sessionStorage and mode property to use hook only to read, write or both.
 * @returns {[T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void]}
 */
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: undefined } }): [T, Dispatch<SetStateAction<T>>, () => T, () => void]
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" } }): [T, () => T, () => void]
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "write" } }): [Dispatch<SetStateAction<T>>, () => T, () => void]
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read/write" } }): [T, Dispatch<SetStateAction<T>>, () => T, () => void]
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" | "write" | "read/write" } }): [T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void] {
	const [subscribe, dispatch] = useEvents();
	const serializer = useRef(opts?.serializer || JSON.stringify);
	const deserializer = useRef(opts?.deserializer || JSON.parse);
	const mode = useRef(opts?.mode || "read/write");
	const cachedState = useRef<T>(useMemo(() => {
		if (mode.current === "write") {
			return null as T;
		}
		const state = sessionStorage.getItem(key);
		if (state != null) {
			return deserializer.current(state);
		} else if (initialState) {
			const result: T = initialState instanceof Function
				? initialState()
				: initialState;
			sessionStorage.setItem(key, serializer.current(result));
			return result;
		} else {
			return null as T;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []));

	const subscribeRef = useRef((cb: ()=>void) => {
		const listener = (evt: Event) => {
			if ((evt.type === "storage" && (evt as StorageEvent).storageArea !== sessionStorage) || mode.current === "write") {
				return;
			}
			if (evt instanceof CustomEvent) {
				if (evt.detail.key === key) {
					cb();
				}
			} else {
				const typedEvent = evt as StorageEvent;
				if (typedEvent.key === key) {
					cb();
				}
			}
		};
		window.addEventListener("storage", listener, { passive: true });
		const unsub = subscribe("ssn-strg", listener);
		return () => {
			window.removeEventListener("storage", listener);
			unsub();
		};
	});

	const getSnapshotRef = useRef(() => {
		const currValue = sessionStorage.getItem(key) ?? "null";
		const prevValue = serializer.current(cachedState.current);
		if (currValue !== prevValue) {
			cachedState.current = currValue !== null ? deserializer.current(currValue) : null;
		}
		return cachedState.current;
	});

	const state = useSyncExternalStore(
		subscribeRef.current,
		getSnapshotRef.current
	);

	const updateState = useRef<Dispatch<SetStateAction<T>>>((value: T | ((state: T) => T)) => {
		const computedValue = serializer.current(value instanceof Function
			? value(cachedState.current)
			: value);
		sessionStorage.setItem(key, computedValue);
		dispatch(new CustomEvent(
			"ssn-strg",
			{
				detail: {
					key
				}
			}
		));
	});

	const remove = useRef(() => {
		sessionStorage.removeItem(key);
		dispatch(new CustomEvent(
			"ssn-strg",
			{
				detail: {
					key
				}
			}
		));
	});

	const getter = useMemoizedFn(() => cachedState.current);

	if (mode.current === "read") {
		return [
			state,
			getter,
			remove.current
		];
	}
	if (mode.current === "write") {
		return [
			updateState.current,
			getter,
			remove.current
		];
	}
	return [
		state,
		updateState.current,
		getter,
		remove.current
	];
}

export { useSessionStorageState };