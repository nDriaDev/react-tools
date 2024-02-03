import { useState } from "react"

/**
 * __`useSet`__: Hook to use _Set data structure_ to handle component state with all Set methods. [See demo](https://nDriaDev.io/react-tools/#/hooks/state/useSet)
 * @param {Iterable<T> | (() => Iterable<T>)} [initialState] - An iterable object whose elements are added to Set, or function that returns it.
 * @returns {Set<T>}
 */
export const useSet = <T>(initialState?: Iterable<T> | (() => Iterable<T>)) => {
	const [set, setSet] = useState<Set<T>>(()=>new Set<T>(initialState instanceof Function ? initialState() : initialState));

	set.add = (value: T) => {
		const temp = new Set(set);
		temp.add(value);
		setSet(temp);
		return temp;
	}

	set.clear = () => {
		setSet(prev => {
			const temp = new Set(prev);
			temp.clear();
			return temp;
		});
	}

	set.delete = (value: T) => {
		const result = set.has(value);
		setSet(prev => {
			const temp = new Set(prev);
			temp.delete(value);
			return temp;
		})
		return result;
	}

	return set;
}