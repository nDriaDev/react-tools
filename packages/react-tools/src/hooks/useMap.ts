import { useState } from "react"

interface UseMap<K, V> extends Map<K, V> {
	map<U>(callbackfn: (value: V, key: K, map: Map<K,V>) => U, thisArg?: any): U[];
}
/**
 * __`useMap`__: Hooks to use _Map data structure_ to handle component state.
 * @param {Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>)} [initialState] - An Array or other iterable object whose elements are key-value pairs, or function that returns it.
 * @returns {Map<K,V>}
 */
export const useMap = <K, V>(initialState?: Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>)) => {
	const [map, setMap] = useState<Map<K, V>>(()=>new Map<K, V>(initialState instanceof Function ? initialState() : initialState));

	map.set = (key: K, value: V) => {
		setMap(prev => {
			const map = new Map(prev);
			map.set(key, value);
			return map
		});
		return map;
	}

	map.clear = () => {
		setMap(prev => {
			const map = new Map(prev);
			map.clear();
			return map;
		});
	}

	map.delete = (key: K) => {
		const result = map.has(key);
		setMap(prev => {
			const map = new Map(prev);
			map.delete(key);
			return map;
		})
		return result;
	}

	(map as UseMap<K,V>).map = <T>(callbackfn: (value: V, key: K, map: Map<K, V>) => T, thisArg?: any): T[] => {
		const temp: T[] = [];
		temp.map
		map.forEach((value, key, map) => temp.push(callbackfn(value, key, map)), thisArg);
		return temp;
	}

	return map as UseMap<K,V>;
}