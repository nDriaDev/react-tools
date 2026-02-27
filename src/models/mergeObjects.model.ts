import { RecursivePartial } from "./utilityTypes.model";

/**
 * Parameters accepted by [mergeObjects](https://react-tools.ndria.dev/utils/mergeObjects).
 *
 * @template T - The target object type.
 */
export type MergeObjectsProps<T extends object> = {
	/**
	 * The base object whose properties are used as defaults. Properties present
	 * in `newObj` override those in `oldObj`.
	 */
	oldObj: T;

	/**
	 * A partial object containing the properties to merge into `oldObj`. Accepts
	 * a {@link RecursivePartial} so deeply nested properties can be partially
	 * overridden without supplying the full subtree.
	 */
	newObj: RecursivePartial<T>;

	/**
	 * When `true`, properties in `newObj` whose value is explicitly `undefined`
	 * are written into the result, overriding the corresponding `oldObj` value
	 * with `undefined`. When `false` or omitted, `undefined` values in `newObj`
	 * are ignored and the `oldObj` value is preserved.
	 */
	forceUndefinedValue?: boolean;
};
