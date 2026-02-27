/**
 * Parameters accepted by [useArray](https://react-tools.ndria.dev/hooks/state/useArray).
 *
 * @template T - The type of the elements contained in the array.
 */
export type UseArrayProps<T> = {
	/**
	 * The initial array state. Accepts either a direct array value or a lazy
	 * initializer function invoked only on the first render, avoiding unnecessary
	 * re-creation of the initial value on subsequent renders. When omitted,
	 * the array is initialised as empty.
	 */
	initialState?: Array<T> | (() => Array<T>);
};

/**
 * Return value of [useArray](https://react-tools.ndria.dev/hooks/state/useArray).
 * A reactive `Array<T>` whose mutating methods automatically synchronise the
 * underlying React state. All standard read-only methods (`map`, `filter`,
 * `find`, `reduce`, etc.) are inherited unchanged from `Array<T>`. The
 * following mutating methods are overridden to trigger a re-render:
 *
 * | Method        | Behaviour                                                                 |
 * | ------------- | ------------------------------------------------------------------------- |
 * | `copyWithin`  | Copies a sequence of elements within the array and updates state.         |
 * | `fill`        | Fills a range of indices with a static value and updates state.           |
 * | `pop`         | Removes and returns the last element, updating state.                     |
 * | `push`        | Appends one or more elements and returns the new length, updating state.  |
 * | `reverse`     | Reverses the array in place and updates state.                            |
 * | `shift`       | Removes and returns the first element, updating state.                    |
 * | `sort`        | Sorts the array (optionally with a comparator) and updates state.         |
 * | `splice`      | Adds/removes elements at a given index and returns removed items.         |
 * | `unshift`     | Prepends one or more elements and returns the new length, updating state. |
 *
 * @template T - The type of the elements contained in the array.
 */
export type UseArrayResult<T> = Array<T> & {
	/** Copies a sequence of elements within the array and triggers a re-render. */
	copyWithin(target: number, start: number, end?: number): T[];

	/** Fills a range of indices with `value` and triggers a re-render. */
	fill(value: T, start?: number, end?: number): T[];

	/** Removes and returns the last element, triggering a re-render. */
	pop(): T | undefined;

	/**
	 * Appends one or more elements to the end of the array, triggering a re-render.
	 * Returns the new array length.
	 */
	push(...items: T[]): number;

	/** Reverses the array in place and triggers a re-render. */
	reverse(): T[];

	/** Removes and returns the first element, triggering a re-render. */
	shift(): T | undefined;

	/**
	 * Sorts the array in place, optionally using `compareFn`, and triggers a
	 * re-render.
	 */
	sort(compareFn?: (a: T, b: T) => number): T[];

	/**
	 * Adds and/or removes elements starting at `start`. Returns the array of
	 * removed elements and triggers a re-render.
	 */
	splice(start: number, deleteCount: number, ...items: T[]): T[];

	/**
	 * Prepends one or more elements to the beginning of the array, triggering a
	 * re-render. Returns the new array length.
	 */
	unshift(...items: T[]): number;
};