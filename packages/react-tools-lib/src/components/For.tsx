/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { Key, ReactElement, cloneElement, isValidElement, memo } from "react";
import { ForProps } from "../models";

/**
 * **`For`**: Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://ndriadev.github.io/react-tools/#/components/For)
 * @param {ForProps<T>} props - component properties object.
 * @param {T[]} props.of - array of elements.
 * @param {T extends object ? keyof T | ((item: T) => Key) : Key | ((item: T) => Key)} [props.elementKey] - if the elements are objects, this prop can be a key of the elements in __of__ prop, or a function with one parameter which type is the type of the elements in __of__ prop and returns a __React.Key__ type, otherwise this prop can be the function described before or a __React.Key__. If it isn't specified, element index in __of__ props will be used as key.
 * @param {(item: T, index: number, key: Key) => ReactNode} props.children - it's a function that takes the current item as first argument and optionally a second argument that is the index of element in _of_ prop and a third element that is the key specified in the _elementKey_ prop.
 * @param {ReactNode} [props.fallback] - optional element to render when _of_ prop is an empty array.
 * @param {<S extends T>(val: T, index: number, arr: T[]) => val is S} [props.filter] - callback executed to filter _of_ elements.
 * @param {<U extends T>(val: T, index: number, arr: T[]) => U} [props.map] - callback executed to map _of_ elements.
 * @param {true | ((a: T, b: T) => number)} [props.sort] - callback executed to sort _of_ elements or __`true`__ to use native sort.
 * @returns {JSX.Element} result - elements list, rendered from _of_ prop or _fallback_.
 */
export const For = memo(<T extends unknown>({ of, children, filter, map, sort, elementKey, fallback }: ForProps<T>) => {
	if (of.length === 0) {
		return <>{fallback}</>
	}
	let arr: T[] = sort ? sort === true ? of.sort() : of.sort(sort) : of;
	arr = filter ? arr.filter(filter) : arr;
	arr = map ? arr.map(map) : arr;
	return (
		<>
			{
				arr.map((el, index) => {
					const key = (elementKey ? typeof elementKey === "function" ? elementKey(el) : typeof el === "object" && el !== null && (elementKey as keyof T) in el ? el[elementKey as keyof T] : elementKey : index) as Key;
					const elem = children(el, index, key) as ReactElement
					return isValidElement(elem)
						? cloneElement(
							elem,
							{key}
						)
						: null
				})
			}
		</>
	);
}) as <T extends unknown>(props: ForProps<T>) => JSX.Element;