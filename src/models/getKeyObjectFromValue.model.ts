/**
 * Parameters accepted by [getKeyObjectFromValue](https://react-tools.ndria.dev/utils/getKeyObjectFromValue).
 *
 * @template T - The object type to search within.
 * @template E - The type of the key to return. Defaults to `keyof T`.
 */
export type GetKeyObjectFromValueProps<T extends Record<string, unknown>> = {
	/**
	 * The object to search through. Its values are compared against `value`
	 * using strict equality.
	 */
	object: T;

	/**
	 * The value to look up within `object`. When a property of `object` strictly
	 * equals this value, the corresponding key is returned. When omitted or when
	 * no match is found, `undefined` is returned.
	 */
	value ?: unknown;
};

/**
 * Return value of [getKeyObjectFromValue](https://react-tools.ndria.dev/utils/getKeyObjectFromValue).
 *
 * The key of type `E` whose associated value in the object strictly equals the
 * searched `value`, or `undefined` when no match is found.
 *
 * @template E - The key type, defaulting to `keyof T`.
 */
export type GetKeyObjectFromValueResult<E extends string | number | symbol> = E | undefined;
