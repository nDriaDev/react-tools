import { useMemo, useState } from "react"
import { UseMapProps, UseMapResult } from "../../models";

/**
 * __`useMap`__: Hook to use _Map data structure_ to handle component state with all Map methods.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useMap)
 * @template K - The type of the map keys.
 * @template V - The type of the map values.
 * @param {UseMapProps<K,V>["initialState"]} [initialState] - {@link UseMapProps}
 * @returns {UseMapResult<K,V>} result - {@link UseMapResult}
 */
export const useMap = <K, V>(initialState?: UseMapProps<K,V>["initialState"]): UseMapResult<K,V> => {
	const [map, setMap] = useState<Map<K, V>>(()=>new Map<K, V>(initialState instanceof Function ? initialState() : initialState));

	const reactiveMap = useMemo(() => {
		const m = new Map(map) as Map<K, V>;

		m.set = (key: K, value: V) => {
			const temp = new Map(map);
			temp.set(key, value);
			setMap(temp);
			return temp;
		}

		m.clear = () => {
			setMap(prev => {
				const temp = new Map(prev);
				temp.clear();
				return temp;
			});
		}

		m.delete = (key: K) => {
			const result = map.has(key);
			setMap(prev => {
				const temp = new Map(prev);
				temp.delete(key);
				return temp;
			})
			return result;
		}

		return m;
	}, [map]);

	return reactiveMap;
}