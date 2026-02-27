/**
 * Parameters accepted by [getObjectFromDottedString](https://react-tools.ndria.dev/utils/getObjectFromDottedString).
 *
 * @template T - The type of the value to set at the resolved path.
 * @template E - The object type to build or update.
 */
export type GetObjectFromDottedStringProps<T, E extends Record<string, unknown>> = {
	/**
	 * A dot-separated path string describing where to set the value within the
	 * object (e.g. `"user.address.city"`). Each segment corresponds to a nested
	 * property key.
	 */
	path: string;

	/**
	 * The value to assign at the location described by `path`.
	 */
	value: T;

	/**
	 * An optional existing object to update. When provided, the value is set
	 * within a deep clone of this object. When omitted, a new object is built
	 * from scratch following the structure described by `path`.
	 */
	object?: E;
};