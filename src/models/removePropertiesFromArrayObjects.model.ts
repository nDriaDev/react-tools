/**
 * Parameters accepted by [removePropertiesFromArrayObjects](https://react-tools.ndria.dev/utils/removePropertiesFromArrayObjects).
 *
 * @template T - The type of the objects in the array.
 * @template E - The type of the property key(s) to remove. Defaults to
 *   `keyof T`.
 */
export type RemovePropertiesFromArrayObjectsProps<T, E extends string | number | symbol = keyof T> = {
	/**
	 * The array of objects from which properties should be removed.
	 */
	array: T[];

	/**
	 * A single property key or an array of property keys to omit from each
	 * object in `array`.
	 */
	property: E | E[];
};

/**
 * Return value of [removePropertiesFromArrayObjects](https://react-tools.ndria.dev/utils/removePropertiesFromArrayObjects).
 *
 * An array of objects of the same type as the input, with the specified
 * property or properties omitted from each element.
 *
 * @template T - The original object type.
 * @template E - The omitted property key type.
 */
export type RemovePropertiesFromArrayObjectsResult<T, E extends string | number | symbol = keyof T> = Omit<T, E>[];
