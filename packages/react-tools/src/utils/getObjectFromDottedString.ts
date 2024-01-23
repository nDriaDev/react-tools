/**
 * **`getObjectFromDottedString`**: Function that, given a path, a value and an optional object, returns an object with as many properties as there are in the path, assigning the value passed to the last one specified.
 * @param {string} path - string value separated by dot, indicating that path where assign the passed value.
 * @param {unknown} value - value to assign to the property specified in path.
 * @param {Record<string,unknown>} [object] - optional object that will be used as start object.
 * @returns {Record<string, unknown>} result - object create by path and value indicated.
 */
export function getObjectFromDottedString<T, E extends Record<string, unknown>>(path: string, value: T, object?: E): E {
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