import { MergeObjectsProps } from "../models";

/**
 * **`mergeObjects`**: Function that, given two objects version, merges them into a single one. Via an optional parameter _forceUndefinedValue_ you can define how undefined values are treated.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/mergeObjects)
 * @template T - The target object type.
 * @param {MergeObjectsProps<T>["oldObj"]} oldObj - {@link MergeObjectsProps}
 * @param {MergeObjectsProps<T>["newObj"]} newObj - {@link MergeObjectsProps}
 * @param {MergeObjectsProps<T>["forceUndefinedValue"]} [forceUndefinedValue] - {@link MergeObjectsProps}
 * @returns {T} result
 */
export function mergeObjects<T extends object>(oldObj: MergeObjectsProps<T>["oldObj"], newObj: MergeObjectsProps<T>["newObj"], forceUndefinedValue?: MergeObjectsProps<T>["forceUndefinedValue"]): T {
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