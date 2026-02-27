/**
 * Parameters accepted by all overloads of [uniqueElementsArray](https://react-tools.ndria.dev/utils/uniqueElementsArray).
 *
 * @template T - The element type of the input arrays.
 */
export type UniqueElementsArrayProps<T> = {
	/**
	 * The property key (or array of keys) used to determine uniqueness when `T`
	 * is an object. Pass `"none"` to compare elements by value (identity for
	 * primitives, referential equality for objects).
	 */
	property: keyof T | (keyof T)[] | "none";

	/**
	 * One or more arrays whose elements are merged and deduplicated. Duplicates
	 * are determined by the `property` strategy.
	 */
	args: (T[])[];
};

/**
 * Return value of [uniqueElementsArray](https://react-tools.ndria.dev/utils/uniqueElementsArray).
 *
 * A new array containing only unique elements from all provided input arrays,
 * preserving the order of first occurrence.
 *
 * @template T - The element type.
 */
export type UniqueElementsArrayResult<T> = T[];