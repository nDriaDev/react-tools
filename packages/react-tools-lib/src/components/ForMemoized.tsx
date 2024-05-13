import { memo } from "react";
import { For } from "./For";
//#IGNORE
/**
 * **`ForMemoized`**: Memoized version of _For_ component. [See demo](https://react-tools.ndria.dev/#/components/ForMemoized)
 * @param {Object} props - component properties object.
 * @param {Array<T>} props.of - array of elements.
 * @param {(T|S) extends object ? keyof (T|S) | ((item: T|S) => Key) : Key | ((item: T|S) => Key)} [props.elementKey] - if the elements are objects, this prop can be a key of the elements in __of__ prop, or a function with one parameter which type is the type of the elements in __of__ prop and returns a __React.Key__ type, otherwise this prop can be the function described before or a __React.Key__. If it isn't specified, element index in __of__ props will be used as key.
 * @param {(item: T|S, index: number, key: Key) => ReactNode} props.children - it's a function that takes the current item as first argument and optionally a second argument that is the index of current item and a third element that is the key specified in the _elementKey_ prop. Item is the current element of __of__ prop or, if __map__ prop is present, is the current element produces from __map__ prop.
 * @param {ReactNode} [props.fallback] - optional element to render when _of_ prop is an empty array.
 * @param {Parameters<Array<T>["filter"]>[0]} [props.filter] - callback executed to filter _of_ elements.
 * @param {undefined|((...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S)} [props.map] - callback executed to map _of_ elements.
 * @param {true|Parameters<Array<T>["sort"]>[0]} [props.sort] - callback executed to sort _of_ elements or __`true`__ to use native sort.
 * @returns {null|JSX.Element|Array<JSX.Element>} result - elements list, rendered from _of_ prop or _fallback_ if exist, otherwise null.
 */
const ForMemoized = memo(For) as typeof For;

ForMemoized.displayName = "ForMemoized";

export { ForMemoized };