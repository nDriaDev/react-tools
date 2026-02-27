import { GetObjectFromDottedStringProps } from "../models";

/**
 * **`getObjectFromDottedString`**: Function that, given a path, a value and an optional object, returns an object with as many properties as there are in the path, assigning the value passed to the last one specified. [See demo](https://react-tools.ndria.dev/#/utils/getObjectFromDottedString)
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/getObjectFromDottedString)
 * @template T - The type of the value to set at the resolved path.
 * @template E - The object type to build or update.
 * @param {GetObjectFromDottedStringProps<T, E>["path"]} path - {@link GetObjectFromDottedStringProps}
 * @param {GetObjectFromDottedStringProps<T, E>["value"]} value - {@link GetObjectFromDottedStringProps}
 * @param {GetObjectFromDottedStringProps<T, E>["object"]} [object] - {@link GetObjectFromDottedStringProps}
 * @returns {E} result
 */
export function getObjectFromDottedString<T, E extends Record<string, unknown>>(path: GetObjectFromDottedStringProps<T, E>["path"], value: GetObjectFromDottedStringProps<T, E>["value"], object?: GetObjectFromDottedStringProps<T, E>["object"]): E {
	const obj: { [k: string]: unknown } = object || {} as E;
	const properties = path.split(".");
	let x = obj;
	for (let i = 0, size = properties.length - 1; i < size; i++) {
		!(properties[i] in x) && (x[properties[i]] = {});
		x = x[properties[i]] as E;
	}
	x[properties[properties.length - 1]] = value;
	return obj as E;
}