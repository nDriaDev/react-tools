import { Dispatch, SetStateAction } from "react";

/**
 * Options accepted by [useLocalStorageState](https://react-tools.ndria.dev/hooks/state/useLocalStorageState) and [useSessionStorageState](https://react-tools.ndria.dev/hooks/state/useSessionStorageState).
 * Controls serialization and the access mode exposed by the hook.
 *
 * @template T - The type of the stored value.
 */
export type StorageStateOptions<T> = {
	/**
	 * Custom serializer used to convert the value to a string before writing to
	 * storage. Defaults to `JSON.stringify` when omitted.
	 */
	serializer?: (item: T) => string;

	/**
	 * Custom deserializer used to convert the stored string back to a value when
	 * reading from storage. Defaults to `JSON.parse` when omitted.
	 */
	deserializer?: (item: string) => T;

	/**
	 * Controls which parts of the storage interface are exposed by the hook.
	 * The return tuple shape varies per mode — see the table below.
	 *
	 * | `mode`         | Return type                                                      |
	 * | -------------- | ---------------------------------------------------------------- |
	 * | `undefined`    | `[T, Dispatch<SetStateAction<T>>, () => T, () => void]`          |
	 * | `"read/write"` | `[T, Dispatch<SetStateAction<T>>, () => T, () => void]`          |
	 * | `"read"`       | `[T, () => T, () => void]`                                       |
	 * | `"write"`      | `[Dispatch<SetStateAction<T>>, () => T, () => void]`             |
	 */
	mode?: "read" | "write" | "read/write";
};

/**
 * Parameters accepted by all overloads of [useLocalStorageState](https://react-tools.ndria.dev/hooks/state/useLocalStorageState).
 *
 * @template T - The type of the value stored in `localStorage`.
 */
export type UseLocalStorageStateProps<T> = {
	/**
	 * The `localStorage` key under which the value is persisted. Must be unique
	 * across the application to avoid collisions with other stored entries.
	 */
	key: string;

	/**
	 * The initial state value, used when no entry exists in `localStorage` for
	 * the given `key`. Accepts either a direct value or a lazy initializer
	 * function invoked only on the first render.
	 */
	initialState?: T | (() => T);

	/**
	 * Optional configuration for serialization and access mode.
	 * See {@link StorageStateOptions}.
	 */
	opts?: StorageStateOptions<T>;
};

/**
 * Return value of [useLocalStorageState](https://react-tools.ndria.dev/hooks/state/useLocalStorageState) and [useSessionStorageState](https://react-tools.ndria.dev/hooks/state/useSessionStorageState)
 * when `mode` is `undefined` or `"read/write"`.
 *
 * @template T - The type of the stored value.
 */
export type StorageStateReadWriteResult<T> = [
	/** The current reactive state value, synchronised with storage. */
	T,

	/**
	 * A setter that updates both the React state and the corresponding storage
	 * entry. Accepts either a new value or an updater function receiving the
	 * current value and returning the next.
	 */
	Dispatch<SetStateAction<T>>,

	/**
	 * A stable getter that returns the current value synchronously without
	 * causing a re-render.
	 */
	() => T,

	/**
	 * Removes the entry from storage and resets the state to `initialState`.
	 */
	() => void
];

/**
 * Return value of [useLocalStorageState](https://react-tools.ndria.dev/hooks/state/useLocalStorageState) and [useSessionStorageState](https://react-tools.ndria.dev/hooks/state/useSessionStorageState)
 * when `mode` is `"read"`.
 *
 * @template T - The type of the stored value.
 */
export type StorageStateReadResult<T> = [
	/** The current reactive state value, synchronised with storage. */
	T,

	/**
	 * A stable getter that returns the current value synchronously without
	 * causing a re-render.
	 */
	() => T,

	/**
	 * Removes the entry from storage and resets the state to `initialState`.
	 */
	() => void
];

/**
 * Return value of [useLocalStorageState](https://react-tools.ndria.dev/hooks/state/useLocalStorageState) and [useSessionStorageState](https://react-tools.ndria.dev/hooks/state/useSessionStorageState)
 * when `mode` is `"write"`.
 *
 * @template T - The type of the stored value.
 */
export type StorageStateWriteResult<T> = [
	/**
	 * A setter that updates both the React state and the corresponding storage
	 * entry. Accepts either a new value or an updater function receiving the
	 * current value and returning the next.
	 */
	Dispatch<SetStateAction<T>>,

	/**
	 * A stable getter that returns the current value synchronously without
	 * causing a re-render.
	 */
	() => T,

	/**
	 * Removes the entry from storage and resets the state to `initialState`.
	 */
	() => void
];

/**
 * Parameters accepted by all overloads of [useSessionStorageState](https://react-tools.ndria.dev/hooks/state/useSessionStorageState).
 *
 * @template T - The type of the value stored in `sessionStorage`.
 */
export type UseSessionStorageStateProps<T> = UseLocalStorageStateProps<T>;