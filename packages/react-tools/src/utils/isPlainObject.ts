/**
 * **`isPlainObject`**: Checks if `value` is a plain object, that is, an object created by the `Object` constructor or one with a `[[Prototype]]` of `null`.
 * @param {any} value
 * @returns {boolean} result
 */
export const isPlainObject = (value: any) => {
	if (!(typeof value === 'object' && value !== null) || (value === undefined ? '[object Undefined]' : value === null ? '[object Null]' : Object.prototype.toString.call(value)) !== '[object Object]') {
		return false;
	}
	if (Object.getPrototypeOf(value) === null) {
		return true;
	}
	let proto = value;
	while (Object.getPrototypeOf(proto) !== null) {
		proto = Object.getPrototypeOf(proto);
	}
	return Object.getPrototypeOf(value) === proto;
}