import { useState } from "react"

export const useLocalStorage = <T>(key: string, initialState?: T | (()=>T)) => {
	const [internalState, setState] = useState(() => {
		if (initialState && initialState instanceof Function) {
			const result = initialState();
			localStorage.setItem(key, JSON.stringify(result));
			return result;
		} else {
			const state = localStorage.getItem(key);
			return state !== null
				? JSON.parse(state)
				: null
		}
	})
}