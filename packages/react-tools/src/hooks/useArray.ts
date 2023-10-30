import { useState } from "react"

/**
 * __`useArray`__: Hooks to use _Array data structure_ to handle component state with all Array methods.
 * @param {Array<T> | (() => Array<T>} [initialState] - An Array or function that returns it.
 * @returns {Array<T>}
 */
export const useArray = <T>(initialState?: Array<T> | (() => Array<T>)) => {
	const [array, setArray] = useState<Array<T>>(() => (initialState instanceof Function ? initialState() : initialState ? initialState : new Array<T>()));

	array.copyWithin = (target: number, start: number, end?: number): T[] => {
		const arr = [...array].copyWithin(target, start, end);
		setArray(arr);
		return arr;
	}

	array.fill = (value: T, start?: number, end?: number): T[] => {
		const arr = [...array].fill(value, start, end);
		setArray(arr);
		return arr;
	}

	array.pop = (): T|undefined => {
		const arr = [...array];
		const removedItem = arr.pop();
		setArray(arr);
		return removedItem;
	}

	array.push = (...items: T[]): number => {
		const arr = [...array];
		const result = arr.push(...items);
		setArray(arr);
		return result;
	}

	array.reverse = (): T[] => {
		const arr = [...array].reverse();
		setArray(arr);
		return arr;
	}

	array.shift = (): T | undefined => {
		const arr = [...array];
		const result = arr.shift();
		setArray(arr);
		return result;
	}

	array.sort = (compareFn?: ((a: T, b: T) => number)): T[] => {
		const arr = [...array].sort(compareFn);
		setArray(arr);
		return arr;
	}

	array.splice = (start: number, deleteCount: number, ...items: T[]): T[] => {
		const arr = [...array].splice(start, deleteCount, ...items);
		setArray(arr);
		return arr;
	}

	array.unshift = (...items: T[]): number => {
		const arr = [...array];
		const result = arr.unshift(...items);
		setArray(arr);
		return result;
	}

	return array;
}