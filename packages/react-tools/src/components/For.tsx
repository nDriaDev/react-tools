/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { Children, memo } from "react";
import { ForProps } from "../models";

/**
 * **`For`**: Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://ndriadev.github.io/react-tools/#/components/For)
 * @param {ForProps<T>} props - component properties object.
 * @param {T[]} props.of - array of elements.
 * @param {T extends Record<string,unknown> ? keyof T : never} [props.elementKey] - a key of array elements if elements are object.
 * @param {(item: T, index: T extends Record<string,unknown> ? number | T[keyof T] : number) => ReactNode} props.children - it's a function that takes the current item as first argument and optionally a second argument that is number if element of array aren't object, otherwise it can be a number or the value of the element key specified in the _elementKey_ prop if it is preset.
 * @param {ReactNode} [props.fallback] - optional element to render when _of_ prop is an empty array.
 * @param {<S extends T>(val: T, index: number, arr: T[]) => val is S} [props.filter] - callback executed to filter _of_ elements.
 * @param {<U extends T>(val: T, index: number, arr: T[]) => U} [props.map] - callback executed to map _of_ elements.
 * @param {(a: T, b: T) => number} [props.sort] - callback executed to sort _of_ elements.
 * @returns {JSX.Element} result - elements list, rendered from _of_ prop or _fallback_.
 */
export const For = memo(<T extends unknown>({ of, children, filter, map, sort, elementKey, fallback }: ForProps<T>) => {
	if (of.length === 0) {
		return <>{fallback}</>
	}
	let arr: T[] = sort ? of.sort(sort) : of;
	arr = filter ? arr.filter(filter) : arr;
	arr = map ? arr.map(map) : arr;
	return (
		<>
			{Children.toArray(
				arr.map((item, index) => (
					children(item, (elementKey ? item[elementKey] : index) as T extends Record<string, unknown> ? number | T[keyof T] : number)
				))
			)}
		</>
	);
}) as <T extends unknown>(props: ForProps<T>) => JSX.Element;