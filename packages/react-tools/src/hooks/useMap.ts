import { useState } from "react"

/**
 * __`useMap`__: Hooks to use _Map data structure_ to handle component state with all Map methods.
 * @param {Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>)} [initialState] - An Array or other iterable object whose elements are key-value pairs, or function that returns it.
 * @returns {Map<K,V>}
 */
export const useMap = <K, V>(initialState?: Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>)) => {
	const [map, setMap] = useState<Map<K, V>>(()=>new Map<K, V>(initialState instanceof Function ? initialState() : initialState));

	map.set = (key: K, value: V) => {
		setMap(prev => {
			const temp = new Map(prev);
			temp.set(key, value);
			return temp
		});
		return map;
	}

	map.clear = () => {
		setMap(prev => {
			const temp = new Map(prev);
			temp.clear();
			return temp;
		});
	}

	map.delete = (key: K) => {
		const result = map.has(key);
		setMap(prev => {
			const temp = new Map(prev);
			temp.delete(key);
			return temp;
		})
		return result;
	}

	return map;
}