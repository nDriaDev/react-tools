/**
 * **`defaultSerializer`**: Function to serialize any type of value. [See demo](https://react-tools.ndria.dev/#/utils/defaultSerializer)
 * @param {T} target
 * @returns {string}
 */
export function defaultSerializer<T>(target: T) {
	return target instanceof Map
		? JSON.stringify(Object.fromEntries(target))
		: target instanceof Set
			? JSON.stringify(Array.from(target))
			: JSON.stringify(target);
}