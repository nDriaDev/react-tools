import { useMemo, useState } from "react"
import { UseSetProps, UseSetResult } from "../../models";

/**
 * __`useSet`__: Hook to use _Set data structure_ to handle component state with all Set methods.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useSet)
 * @template T - The type of the elements contained in the set.
 * @param {UseSetProps<T>["initialState"]} [initialState] - {@link UseSetProps}
 * @returns {UseSetResult<T>} result - {@link UseSetResult}
 */
export const useSet = <T>(initialState?: UseSetProps<T>["initialState"]): UseSetResult<T> => {
	const [set, setSet] = useState<Set<T>>(()=>new Set<T>(initialState instanceof Function ? initialState() : initialState));

	const reactiveSet = useMemo(() => {
		const s = new Set(set) as Set<T>;

		s.add = (value: T) => {
			const temp = new Set(set);
			temp.add(value);
			setSet(temp);
			return temp;
		}

		s.clear = () => {
			setSet(prev => {
				const temp = new Set(prev);
				temp.clear();
				return temp;
			});
		}

		s.delete = (value: T) => {
			const result = set.has(value);
			setSet(prev => {
				const temp = new Set(prev);
				temp.delete(value);
				return temp;
			})
			return result;
		}

		return s;
	}, [set]);

	return reactiveSet;
}