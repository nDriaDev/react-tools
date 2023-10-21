import { useState } from "react"
import { useMemoizedFunction } from ".";

export const useLocalStorage = <T>(key: string, initialState?: T | (()=>T)) => {
	const [internalState, setState] = useState(() => {
		const state = localStorage.getItem(key);
		if (state != null) {
			return JSON.parse(state);
		} else if (initialState) {
			const result: T = initialState instanceof Function
				? initialState()
				: internalState;
			localStorage.setItem(key, JSON.stringify(result));
			return result;
		} else {
			return null;
		}
	})



	const updateState = useMemoizedFunction((value: T | ((state: T) => T)) => {
		const computedValue = value instanceof Function
			? value(internalState)
			: value;
		localStorage.setItem(key, JSON.stringify(computedValue));
	});


}