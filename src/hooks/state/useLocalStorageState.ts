import { Dispatch, SetStateAction, useMemo, useRef } from "react"
import { useMemoizedFn } from "../performance";
import { useEvents } from "../events";
import { useSyncExternalStore } from "./useSyncExternalStore";
import { StorageStateReadResult, StorageStateReadWriteResult, StorageStateWriteResult, UseLocalStorageStateProps } from "../../models";


/**
 * ___useLocalStorageState___: Custom _useState_ hook implementation using _LocalStorage_, with immutable _getter state_ function and to _remove_ key from localStorage.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useLocalStorageState)
 * @template T - The type of the stored value.
 * @param {UseLocalStorageStateProps<T>} props - {@link UseLocalStorageStateProps}
 * @returns {StorageStateReadWriteResult<T> | StorageStateReadResult<T> | StorageStateWriteResult<T>} result - {@link StorageStateReadWriteResult}
 */
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: undefined } }): StorageStateReadWriteResult<T>
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" } }): StorageStateReadResult<T>
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "write" } }): StorageStateWriteResult<T>
function useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read/write" } }): StorageStateReadWriteResult<T>
function useLocalStorageState<T>({ key, initialState, opts }: UseLocalStorageStateProps<T>): StorageStateReadWriteResult<T> | StorageStateReadResult<T> | StorageStateWriteResult<T> {
	const [subscribe, dispatch] = useEvents();
	const serializer = useRef(opts?.serializer || JSON.stringify);
	const deserializer = useRef(opts?.deserializer || JSON.parse);
	const mode = useRef(opts?.mode || "read/write");
	const cachedState = useRef(useMemo(() => {
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []));

	const subscribeRef = useRef((cb: ()=> void) => {
		const listener = (evt: Event) => {
			if ((evt.type === "storage" && (evt as StorageEvent).storageArea !== localStorage) || mode.current === "write") {
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
		const unsub = subscribe("local-strg", listener);
		return () => {
			window.removeEventListener("storage", listener);
			unsub();
		};
	});

	const getSnapshotRef = useRef(() => {
		const currValue = localStorage.getItem(key) ?? "null";
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
		localStorage.setItem(key, computedValue);
		dispatch(new CustomEvent(
			"local-strg",
			{
				detail: {
					key
				}
			}
		));
	});


	const getter = useMemoizedFn(() => cachedState.current);

	const remove = useRef(() => {
		localStorage.removeItem(key);
		dispatch(new CustomEvent(
			"local-strg",
			{
				detail: {
					key
				}
			}
		));
	});

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

export { useLocalStorageState };