import { ExtractTail } from "./utilityTypes.model";

/**
 * The map of mutator functions accepted by [createPubSubStore](https://react-tools.ndria.dev/hooks/state/createPubSubStore).
 * Each mutator receives the current store as its first argument, followed
 * by any number of additional custom arguments.
 *
 * @template T - The store object type.
 */
export type PubSubMutatorsFn<T extends object> = Record<string, (store: T, ...args: any[]) => void>;

/**
 * The derived mutators object exposed on the store instance. Each key mirrors
 * a key of the original `mutatorsFn` map, but the first `store` argument is
 * stripped — callers only pass the additional custom arguments.
 *
 * @template E - The original mutators function map type.
 */
export type PubSubMutators<E extends PubSubMutatorsFn<any>> = Record<keyof E, (...args: ExtractTail<Parameters<E[keyof E]>>) => void>;

/**
 * Parameters accepted by [createPubSubStore](https://react-tools.ndria.dev/hooks/state/createPubSubStore).
 *
 * @template T - The store object type. Must be a plain object.
 * @template E - The mutators function map type. Each value must be a function
 *   whose first argument is the current store `T`.
 */
export type CreatePubSubStoreProps<T extends object, E extends PubSubMutatorsFn<T>> = {
	/**
	 * The initial state of the store. Shallow-copied on creation. If `persist`
	 * is set and a previously serialised value exists in storage, the persisted
	 * value takes precedence over this object.
	 */
	obj: T;

	/**
	 * An optional map of named mutator functions used to update the store in a
	 * structured way. Each mutator receives the **current store by reference**
	 * as its first argument and may mutate it directly — the store is then
	 * published to all subscribers automatically. The `store` argument is
	 * stripped from the exposed {@link PubSubMutators} so callers only pass
	 * the remaining arguments.
	 */
	mutatorsFn ?: E;

	/**
	 * When provided, the store is persisted to the specified Web Storage API
	 * and rehydrated on the next page load:
	 * - **`"localStorage"`** — Persists across browser sessions until explicitly
	 *   cleared.
	 * - **`"sessionStorage"`** — Persists only for the duration of the current
	 *   browser session.
	 * When omitted, the store lives only in memory.
	 */
	persist ?: "localStorage" | "sessionStorage";
};

/**
 * Return value of [createPubSubStore](https://react-tools.ndria.dev/hooks/state/createPubSubStore).
 *
 * @template T - The store object type.
 * @template E - The mutators function map type.
 */
export type CreatePubSubStoreResult<T extends object, E extends PubSubMutatorsFn<T>> = {
	/**
	 * Returns the current store value synchronously, outside of any React
	 * component. Useful for reading state in event handlers, utilities, or
	 * non-React code without subscribing to updates.
	 */
	getStore: () => T;

	/**
	 * Imperatively mutates the store outside of any React component. Receives
	 * the current store by reference via `cb` — mutate it directly and the
	 * updated value is published to all subscribers and persisted to storage
	 * if `persist` was configured.
	 */
	mutateStore: (cb: (globStore: T) => void) => void;

	/**
	 * The derived mutator functions generated from `mutatorsFn`. Each key
	 * mirrors the original map but with the leading `store` argument removed,
	 * so callers only supply the additional custom arguments. Can be called
	 * outside of React components. See {@link PubSubMutators}.
	 */
	mutators: PubSubMutators<E>;

	/**
	 * A React hook that subscribes a component to the store and returns a
	 * reactive tuple. Supports two overloads:
	 *
	 * - **Without `subscribe`** — The component receives and re-renders on
	 *   changes to the full store object `T`.
	 * - **With `subscribe`** — A selector function `(store: T) => C` is used
	 *   to derive a slice `C` from the store. The component only re-renders
	 *   when the selected slice changes (deep equality), avoiding unnecessary
	 *   re-renders for unrelated store updates.
	 *
	 * Returns a four-element tuple:
	 *
	 * | Index | Type | Description |
	 * | ----- | ---- | ----------- |
	 * | `0` | `T` \| `C` | The current store value or selected slice. Reactive — triggers a re-render on change. |
	 * | `1` | `(store: T \| C \| ((curr: T) => T) \| ((curr: C) => C)) => void` | A setter that accepts a new value or an updater function. Updates the store (or the selected slice) and notifies all subscribers. |
	 * | `2` | `() => T` \| `() => C` | A stable getter that returns the current value synchronously without causing a re-render. |
	 * | `3` | {@link PubSubMutators}`<E>` | The same derived mutators object as {@link CreatePubSubStoreResult.mutators}, available inside the component. |
	 */
	usePubSubStore: {
		(subscribe?: undefined): [
			T,
			(store: T | ((currStore: T) => T)) => void,
			() => T,
			PubSubMutators<E>
		];
		<C>(subscribe ?: (store: T) => C): [
			C,
			(store: C | ((currStore: C) => C)) => void,
			() => C,
			PubSubMutators<E>
		];
	};
};