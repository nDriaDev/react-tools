import { UniqueElementsArrayProps, UniqueElementsArrayResult } from "../models";

/**
 * **`uniqueElementsArray`**: Function that given one or more array of object, returns a single array with unique elements by a specified property, an array of properties or _none_.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/uniqueElementsArray)
 * @template T - The element type of the input arrays.
 * @param {UniqueElementsArrayProps<T>["property"]} property - {@link UniqueElementsArrayProps}
 * @param {UniqueElementsArrayProps<T>["args"]} args - {@link UniqueElementsArrayProps}
 * @returns {UniqueElementsArrayResult<T>} result - {@link UniqueElementsArrayResult}
 */
function uniqueElementsArray<T extends string | number | boolean | ((...args:unknown[])=>unknown) | bigint>(property: "none", ...args: (T[])[]): T[];
function uniqueElementsArray<T extends object>(property: keyof T | (keyof T)[] | "none", ...args: (T[])[]): T[];
function uniqueElementsArray<T extends string | number | boolean | ((...args: unknown[]) => unknown) | bigint | object>(property: UniqueElementsArrayProps<T>["property"], ...args: UniqueElementsArrayProps<T>["args"]): UniqueElementsArrayResult<T> {
	const newArray: T[] = [];
	for (const array of args) {
		newArray.push(...array);
	}
	if (property !== "none") {
		if (!Array.isArray(property)) {
			return newArray.reduce((prev: T[], curr) => {
				if (prev.findIndex(el => el[property] === curr[property]) === -1) {
					prev.push(curr);
				}
				return prev;
			}, []);
		}
		return newArray.reduce((prev: T[], curr) => {
			if (prev.findIndex(el => {
				let alreadyPresent = true;
				for (const prop of property) {
					if (el[prop] !== curr[prop]) {
						alreadyPresent = false;
						break;
					}
				}
				return alreadyPresent;
			}) === -1) {
				prev.push(curr);
			}
			return prev;
		}, []);
	}
	return [...new Set(newArray)];
}

export { uniqueElementsArray };