/**
 * Parameters accepted by [isDeepEqual](https://react-tools.ndria.dev/utils/isDeepEqual).
 */
export type IsDeepEqualProps = {
	/**
	 * The first value to compare.
	 */
	objA: unknown;

	/**
	 * The second value to compare.
	 */
	objB: unknown;

	/**
	 * An internal `WeakMap` used to track already-visited object pairs and
	 * handle circular references. Should not be passed by callers — it is
	 * managed automatically by recursive calls.
	 */
	map?: WeakMap<object, unknown>;
};