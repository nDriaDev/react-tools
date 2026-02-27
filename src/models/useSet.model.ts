/**
 * Parameters accepted by [useSet](https://react-tools.ndria.dev/hooks/state/useSet).
 *
 * @template T - The type of the elements contained in the set.
 */
export type UseSetProps<T> = {
	/**
	 * The initial set state. Accepts any `Iterable<T>` (e.g. an array, another
	 * `Set`, or a generator) or a lazy initializer function returning such an
	 * iterable, invoked only on the first render. When omitted, the set is
	 * initialised as empty.
	 */
	initialState?: Iterable<T> | (() => Iterable<T>);
};

/**
 * Return value of [useSet](https://react-tools.ndria.dev/hooks/state/useSet).
 * A reactive `Set<T>` whose mutating methods automatically synchronise the
 * underlying React state. All standard read-only methods (`has`, `keys`,
 * `values`, `entries`, `forEach`, etc.) are inherited unchanged from
 * `Set<T>`. The following mutating methods are overridden to trigger a
 * re-render:
 *
 * | Method   | Behaviour                                                                          |
 * | -------- | ---------------------------------------------------------------------------------- |
 * | `add`    | Adds `value` to the set, triggers a re-render, and returns the updated set.        |
 * | `clear`  | Removes all values and triggers a re-render.                                       |
 * | `delete` | Removes `value` and triggers a re-render. Returns `true` if the value existed, `false` otherwise. |
 *
 * @template T - The type of the elements contained in the set.
 */
export type UseSetResult<T> = Set<T> & {
	/**
	 * Adds `value` to the set, triggers a re-render, and returns the updated set.
	 */
	add(value: T): Set<T>;

	/** Removes all values from the set and triggers a re-render. */
	clear(): void;

	/**
	 * Removes `value` from the set and triggers a re-render. Returns `true` if
	 * the value existed in the set before deletion, `false` otherwise.
	 */
	delete(value: T): boolean;
};