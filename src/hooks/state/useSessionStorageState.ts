import { Dispatch, SetStateAction, useMemo, useRef } from "react";
import { useMemoizedFn } from "../performance";
import { useEvents } from "../events";
import { useSyncExternalStore } from "./useSyncExternalStore";
import { StorageStateReadResult, StorageStateReadWriteResult, StorageStateWriteResult, UseSessionStorageStateProps } from "../../models";

/**
 * ___useSessionStorageState___: Custom _useState_ hook implementation using _sessionStorage_, with immutable _getter state_ function and to _remove_ key from sessionStorage.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useSessionStorageState)
 * @template T - The type of the stored value.
 * @param {CreatePubSubStoreProps<T, E>["obj"]} props - {@link CreatePubSubStoreProps}
 * @param {CreatePubSubStoreProps<T, E>["mutatorsFn"]} [mutatorsFn] - {@link CreatePubSubStoreProps}
 * @param {CreatePubSubStoreProps<T, E>["persist"]} [persist] - {@link CreatePubSubStoreProps}
 * @returns {CreatePubSubStoreResult<T,E>} result - {@link CreatePubSubStoreResult}
 */
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: undefined } }): StorageStateReadWriteResult<T>
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" } }): StorageStateReadResult<T>
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "write" } }): StorageStateWriteResult<T>
function useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read/write" } }): StorageStateReadWriteResult<T>
function useSessionStorageState<T>({ key, initialState, opts }: UseSessionStorageStateProps<T>): StorageStateReadWriteResult<T> | StorageStateReadResult<T> | StorageStateWriteResult<T> {
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