import { Key, ReactNode, cloneElement, isValidElement, JSX } from "react";
import { ForProps } from "../models";

/**
 * **`For`**: Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options.
 * @see [📖 Documentation](https://react-tools.ndria.dev/components/For)
 * @template T - The type of the elements in the source array `of`.
 * @template S - The mapped element type after applying `map`. Defaults to `T` when `map` is omitted.
 * @param {ForProps<T, S>} props - {@link ForProps}
 * @returns {null|JSX.Element|Array<JSX.Element>} result
 */
function For<T>({ of, elementKey, fallback, filter, sort, map, children }: { of: Array<T>, elementKey?: T extends object ? keyof T | ((item: T) => Key) : Key | ((item: T) => Key), children: (item: T, index: number, key: Key) => ReactNode, fallback?: ReactNode, filter?: Parameters<Array<T>["filter"]>[0], sort?: true | Parameters<Array<T>["sort"]>[0], map?: undefined }): null|JSX.Element|Array<JSX.Element>;
function For<T, S extends T>({ of, elementKey, fallback, filter, sort, map, children }: { of: Array<T>, elementKey?: S extends object ? keyof S | ((item: S) => Key) : Key | ((item: S) => Key), children: (item: S, index: number, key: Key) => ReactNode, fallback?: ReactNode, filter?: Parameters<Array<T>["filter"]>[0], sort?: true | Parameters<Array<T>["sort"]>[0], map?: (...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S }): null|JSX.Element|Array<JSX.Element>;
function For<T, S extends T>({ of, elementKey, fallback, filter, sort, map, children }: ForProps<T, S>): null | JSX.Element | Array<JSX.Element> {
	if (of.length === 0) {
		return fallback !== undefined
			? <>{fallback}</>
			: null;
	}

	let arr = sort ? sort === true ? [...of].sort() : [...of].sort(sort) : of;
	arr = filter ? arr.filter(filter) : arr;

	return arr.map((el, index, arr) => {
		if (map !== undefined) {
			const elem = map(el, index, arr);
			const key = (elementKey ? typeof elementKey === "function" ? elementKey(elem) : typeof elem === "object" && elem !== null && (elementKey as keyof typeof elem) in elem ? elem[elementKey as keyof typeof elem] : elementKey : index) as Key;
			const child = children(elem, index, key);
			return isValidElement(child)
				? cloneElement(
					child,
					{ key }
				)
				: null
		}
		const key = (elementKey ? typeof elementKey === "function" ? elementKey(el) : typeof el === "object" && el !== null && (elementKey as keyof typeof el) in el ? el[elementKey as keyof typeof el] : elementKey : index) as Key;
		const child = children(el, index, key);
		return isValidElement(child)
			? cloneElement(
				child,
				{ key }
			)
			: null
	}) as JSX.Element | Array<JSX.Element>
}

For.displayName = "For"

export { For };