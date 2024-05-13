/**
 * **`getKeyObjectFromValue`**: Function that given an object and a value, returns the corrispondent key of this value or undefined. [See demo](https://react-tools.ndria.dev/#/utils/getKeyObjectFromValue)
 * @param {Record<string,unknown>} object - object from which get key by a value.
 * @param {unknown} value - value of the object
 * @returns {keyof Record<string,unknown>|undefined} key - object key for the given value.
 */
export function getKeyObjectFromValue<T extends Record<string, unknown>, E extends string|number|symbol = keyof T>(object: T, value?: unknown): E | undefined {
	if (!value) {
		return undefined;
	}
	const key = Object.keys(object).find(el => object[el] === value) as E;
	return key || undefined;
}