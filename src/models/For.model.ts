import { Key, ReactNode } from "react";

/**
 * Props accepted by the [For](https://react-tools.ndria.dev/components/For) component
 * @template T - The type of the elements in the source array `of`.
 * @template S - The mapped element type after applying `map`. Defaults to `T` when `map` is omitted.
 */
export interface ForProps<T, S extends T = T> {
	/**
	 * The source array to iterate over. Each element is passed to `children`
	 * after optional `filter`, `sort`, and `map` transformations are applied.
	 */
	of: Array<T>;

	/**
	 * Determines the React `key` assigned to each rendered element:
	 * - When `T` (or `S`) is an **object** — a key of that object or a function
	 *   `(item) => Key` deriving a key from the item.
	 * - When `T` (or `S`) is a **primitive** — a direct `Key` value or a
	 *   function `(item) => Key`.
	 * When omitted, the element's index is used as the key.
	 */
	elementKey?: (T | S) extends object
	? keyof (T | S) | ((item: T | S) => Key)
	: Key | ((item: T | S) => Key);

	/**
	 * A render function called for each element in the (optionally transformed)
	 * array. Receives the current item, its index, and the computed React key.
	 */
	children: (item: T|S, index: number, key: Key) => ReactNode;

	/**
	 * Content rendered when the source array `of` is empty (after any `filter`
	 * has been applied). Accepts any valid React node.
	 */
	fallback?: ReactNode;

	/**
	 * An optional filter predicate applied to the source array before rendering,
	 * following the same signature as `Array.prototype.filter`. Elements for
	 * which the predicate returns `false` are excluded.
	 */
	filter?: Parameters<Array<T>["filter"]>[0];

	/**
	 * An optional sort configuration applied after filtering:
	 * - **`true`** — Uses the default sort order.
	 * - **comparator function** — A custom `(a, b) => number` comparator,
	 *   following the same signature as `Array.prototype.sort`.
	 */
	sort?: true | Parameters<Array<T>["sort"]>[0];

	/**
	 * An optional mapping function applied after filtering and sorting,
	 * transforming each element from `T` to `S` before passing it to `children`.
	 * When omitted, elements are passed as-is (`S` equals `T`).
	 */
	map?: (...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S;
}