import { RecursivePartial } from "../models";

/**
 * **`mergeObjects`**: Function that, given two objects version, merges them into a single one. Via an optional parameter _forceUndefinedValue_ you can define how undefined values are treated. [See demo](https://react-tools.ndria.dev/#/utils/mergeObjects)
 * @param {object} oldObj - previous object version.
 * @param {RecursivePartial<object>} newObj - new object version.
 * @param {boolean} [forceUndefinedValue=false] - boolean to indicate how treat undefined value.
 * @returns {Record<string, any>} result - mergedObject
 */
export function mergeObjects<T extends object>(oldObj: T, newObj: RecursivePartial<T>, forceUndefinedValue?: boolean): T {
	const obj: T = { ...oldObj };
	for (const [key, value] of Object.entries(newObj)) {
		if (value === undefined && forceUndefinedValue && key) {
			obj[key as keyof T] = value as T[keyof T];
		} else if (value !== undefined) {
			if (!Array.isArray(value) && typeof value === "object" && value !== null) {
				obj[key as keyof T] = mergeObjects(obj[key as keyof typeof obj] as T, (newObj[key as keyof typeof newObj] as object) || {}) as T[keyof T];
			} else {
				obj[key as keyof T] = value as T[keyof T];
			}
		}
	}
	return obj;
}