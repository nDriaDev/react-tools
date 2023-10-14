import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react"

/**
 * **`useStateGetter`**: custom useState with getter state function.
 * @param {T | () => T} initialState - value or a function.
 * @returns {[T, Dispatch<SetStateAction<T>>, () => T]} array
 */
export const useStateGetter = <T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T] => {
	const [state, setState] = useState<T>(initialState);
	const getterRef = useRef<() => T>(() => state);
	const getter = useCallback(() => getterRef.current(), []);
	useEffect(() => {
		getterRef.current = () => state
	});

	return [
		state,
		setState,
		getter
	];
}