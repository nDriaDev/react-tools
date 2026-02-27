import { GetKeyObjectFromValueProps, GetKeyObjectFromValueResult } from "../models";

/**
 * **`getKeyObjectFromValue`**: Function that given an object and a value, returns the corrispondent key of this value or undefined.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/getKeyObjectFromValue)
 * @template T - The object type to search within.
 * @template E - The type of the key to return. Defaults to `keyof T`.
 * @param {GetKeyObjectFromValueProps<T>["object"]} object - {@link GetKeyObjectFromValueProps}
 * @param {GetKeyObjectFromValueProps<T>["value"]} [value] - {@link GetKeyObjectFromValueProps}
 * @returns {GetKeyObjectFromValueResult<E>} result - {@link GetKeyObjectFromValueResult}
 */
export function getKeyObjectFromValue<T extends Record<string, unknown>, E extends string | number | symbol = keyof T>(object: GetKeyObjectFromValueProps<T>["object"], value?: GetKeyObjectFromValueProps<T>["value"]): GetKeyObjectFromValueResult<E> {
	if (!value) {
		return undefined;
	}
	const key = Object.keys(object).find(el => object[el] === value) as E;
	return key || undefined;
}