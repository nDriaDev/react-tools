/**
 * **`removePropertiesFromArrayObjects`**: Function that, given an array of objects and a property or an array of properties, return a new array without specified properties.
 * @param {T[]} array - array of object.
 * @param {keyof T| (keyof T)[]} property - a property object or an array of properties inside objects of the given array.
 * @returns {Omit<T,E>[]} array - a new array without targeted properites.
 */
export function removePropertiesFromArrayObjects<T, E extends string | number | symbol = keyof T>(array: T[], property: E | E[]): Omit<T, E>[] {
	return [...array].map(el => {
		let obj = el as Omit<T,E>;
		if (Array.isArray(property)) {
			property.forEach(p => {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const { [p]: _, ...rest } = el;
				obj = { ...rest } as typeof rest;
			})
		} else {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { [property]: _, ...rest } = el;
			obj = { ...rest } as typeof rest;
		}
		return obj;
	})
}