/**
 * Parameters accepted by [useMap](https://react-tools.ndria.dev/hooks/state/useMap).
 *
 * @template K - The type of the map keys.
 * @template V - The type of the map values.
 */
export type UseMapProps<K, V> = {
	/**
	 * The initial entries of the map. Accepts any `Iterable` of `[key, value]`
	 * pairs (e.g. an array of tuples, another `Map`, or a generator) or a lazy
	 * initializer function returning such an iterable, invoked only on the first
	 * render. When omitted, the map is initialised as empty.
	 */
	initialState?: Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>);
};

/**
 * Return value of [useMap](https://react-tools.ndria.dev/hooks/state/useMap).
 * A reactive `Map<K, V>` whose mutating methods automatically synchronise the
 * underlying React state. All standard read-only methods (`get`, `has`,
 * `keys`, `values`, `entries`, `forEach`, etc.) are inherited unchanged from
 * `Map<K, V>`. The following mutating methods are overridden to trigger a
 * re-render:
 *
 * | Method   | Behaviour                                                                    |
 * | -------- | ---------------------------------------------------------------------------- |
 * | `set`    | Adds or updates the entry for `key`, triggers a re-render, returns the map.  |
 * | `clear`  | Removes all entries and triggers a re-render.                                |
 * | `delete` | Removes the entry for `key` and triggers a re-render. Returns `true` if the key existed, `false` otherwise. |
 *
 * @template K - The type of the map keys.
 * @template V - The type of the map values.
 */
export type UseMapResult<K, V> = Map<K, V> & {
	/**
	 * Adds or updates the entry for `key` with `value`, triggers a re-render,
	 * and returns the updated map.
	 */
	set(key: K, value: V): Map<K, V>;

	/** Removes all entries from the map and triggers a re-render. */
	clear(): void;

	/**
	 * Removes the entry for `key` and triggers a re-render. Returns `true` if
	 * the key existed in the map before deletion, `false` otherwise.
	 */
	delete(key: K): boolean;
};