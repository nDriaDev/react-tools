import { RemovePropertiesFromArrayObjectsProps, RemovePropertiesFromArrayObjectsResult } from "../models";

/**
 * **`removePropertiesFromArrayObjects`**: Function that, given an array of objects and a property or an array of properties, return a new array without specified properties.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/removePropertiesFromArrayObjects)
 * @template T - The type of the objects in the array.
 * @template E - The type of the property key(s) to remove. Defaults to
 * @param {RemovePropertiesFromArrayObjectsProps<T, E>["array"]} array - {@link RemovePropertiesFromArrayObjectsProps}
 * @param {RemovePropertiesFromArrayObjectsProps<T, E>["property"]} property - {@link RemovePropertiesFromArrayObjectsProps}
 * @returns {RemovePropertiesFromArrayObjectsResult<T, E>} result - {@link RemovePropertiesFromArrayObjectsResult}
 */
export function removePropertiesFromArrayObjects<T, E extends string | number | symbol = keyof T>(array: RemovePropertiesFromArrayObjectsProps<T, E>["array"], property: RemovePropertiesFromArrayObjectsProps<T, E>["property"]): RemovePropertiesFromArrayObjectsResult<T, E> {
	return [...array].map(el => {
		let obj = el as Omit<T, E>;
		if (Array.isArray(property)) {
			property.forEach(p => {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const { [p]: _, ...rest } = obj as T;
				obj = { ...rest } as typeof rest;
			})
		} else {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { [property]: _, ...rest } = el;
			obj = { ...rest } as typeof rest;
		}
		return obj;
	});
}