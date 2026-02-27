import { useMemo, useState } from "react"
import { UseArrayProps, UseArrayResult } from "../../models";

/**
 * __`useArray`__: Hook to use _Array data structure_ to handle component state with all Array methods.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useArray)
 * @template T - The type of the elements contained in the array.
 * @param {UseArrayProps<T>["initialState"]} [initialState] - {@link UseArrayProps}
 * @returns {UseArrayResult<T>} result - {@link UseArrayResult}
 */
export const useArray = <T>(initialState?: UseArrayProps<T>["initialState"]): UseArrayResult<T> => {
	const [array, setArray] = useState<Array<T>>(() => (initialState instanceof Function ? initialState() : initialState ? initialState : new Array<T>()));

	const reactiveArray = useMemo(() => {
		const arr = [...array] as Array<T>;

		arr.copyWithin = (target: number, start: number, end?: number): T[] => {
			const next = [...array].copyWithin(target, start, end);
			setArray(next);
			return next;
		}

		arr.fill = (value: T, start?: number, end?: number): T[] => {
			const next = [...array].fill(value, start, end);
			setArray(next);
			return next;
		}

		arr.pop = (): T | undefined => {
			const next = [...array];
			const removedItem = next.pop();
			setArray(next);
			return removedItem;
		}

		arr.push = (...items: T[]): number => {
			const next = [...array];
			const result = next.push(...items);
			setArray(next);
			return result;
		}

		arr.reverse = (): T[] => {
			const next = [...array].reverse();
			setArray(next);
			return next;
		}

		arr.shift = (): T | undefined => {
			const next = [...array];
			const result = next.shift();
			setArray(next);
			return result;
		}

		arr.sort = (compareFn?: ((a: T, b: T) => number)): T[] => {
			const next = [...array].sort(compareFn);
			setArray(next);
			return next;
		}

		arr.splice = (start: number, deleteCount: number, ...items: T[]): T[] => {
			const next = [...array];
			const removed = next.splice(start, deleteCount, ...items);
			setArray(next);
			return removed;
		}

		arr.unshift = (...items: T[]): number => {
			const next = [...array];
			const result = next.unshift(...items);
			setArray(next);
			return result;
		}

		return arr;
	}, [array]);

	return reactiveArray;
}