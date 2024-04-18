import { Key, ReactNode, cloneElement, isValidElement } from "react";

/**
 * **`For`**: Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://ndriadev.github.io/react-tools/#/components/For)
 * @param {Object} props - component properties object.
 * @param {Array<T>} props.of - array of elements.
 * @param {(T|S) extends object ? keyof (T|S) | ((item: T|S) => Key) : Key | ((item: T|S) => Key)} [props.elementKey] - if the elements are objects, this prop can be a key of the elements in __of__ prop, or a function with one parameter which type is the type of the elements in __of__ prop and returns a __React.Key__ type, otherwise this prop can be the function described before or a __React.Key__. If it isn't specified, element index in __of__ props will be used as key.
 * @param {(item: T|S, index: number, key: Key) => ReactNode} props.children - it's a function that takes the current item as first argument and optionally a second argument that is the index of current item and a third element that is the key specified in the _elementKey_ prop. Item is the current element of __of__ prop or, if __map__ prop is present, is the current element produces from __map__ prop.
 * @param {ReactNode} [props.fallback] - optional element to render when _of_ prop is an empty array.
 * @param {Parameters<Array<T>["filter"]>[0]} [props.filter] - callback executed to filter _of_ elements.
 * @param {undefined|((...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S)} [props.map] - callback executed to map _of_ elements.
 * @param {true|Parameters<Array<T>["sort"]>[0]} [props.sort] - callback executed to sort _of_ elements or __`true`__ to use native sort.
 * @returns {JSX.Element|Array<JSX.Element>} result - elements list, rendered from _of_ prop or _fallback_.
 */
function For<T>({ of, elementKey, fallback, filter, sort, map, children }: { of: Array<T>, elementKey?: T extends object ? keyof T | ((item: T) => Key) : Key | ((item: T) => Key), children: (item: T, index: number, key: Key) => ReactNode, fallback?: ReactNode, filter?: Parameters<Array<T>["filter"]>[0], sort?: true | Parameters<Array<T>["sort"]>[0], map?: undefined }): JSX.Element|Array<JSX.Element>;
function For<T, S extends T>({ of, elementKey, fallback, filter, sort, map, children }: { of: Array<T>, elementKey?: S extends object ? keyof S | ((item: S) => Key) : Key | ((item: S) => Key), children: (item: S, index: number, key: Key) => ReactNode, fallback?: ReactNode, filter?: Parameters<Array<T>["filter"]>[0], sort?: true | Parameters<Array<T>["sort"]>[0], map?: (...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S }): JSX.Element|Array<JSX.Element>;
function For<T, S extends T>({ of, elementKey, fallback, filter, sort, map, children }: { of: Array<T>, elementKey?: (T|S) extends object ? keyof (T|S) | ((item: T|S) => Key) : Key | ((item: T|S) => Key), children: (item: T|S, index: number, key: Key) => ReactNode, fallback?: ReactNode, filter?: Parameters<Array<T>["filter"]>[0], sort?: true | Parameters<Array<T>["sort"]>[0], map?: (...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S }): JSX.Element|Array<JSX.Element> {
	if (of.length === 0) {
		return fallback !== undefined
			? <>{fallback}</>
			: <></>;
	}

	let arr = sort ? sort === true ? of.sort() : of.sort(sort) : of;
	arr = filter ? arr.filter(filter) : arr;

	return <>
		{
			arr.map((el, index, arr) => {
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
			})
		}
	</>
}

export { For };