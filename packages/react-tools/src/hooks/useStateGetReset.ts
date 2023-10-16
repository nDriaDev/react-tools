import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react"

/**
 * **`useStateGetReset`**: Custom useState with get and reset state functions.
 * @param {T | () => T} initialState - value or a function.
 * @returns {[T, Dispatch<SetStateAction<T>>, () => T, ()=>void]} array
 */
export const useStateGetReset = <T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void] => {
	const [state, setState] = useState<T>(initialState);
	const getterRef = useRef<() => T>(() => state);

	const getter = useCallback(() => getterRef.current(), []);

	const resetter = useCallback(() => setState(initialState), [initialState]);

	useEffect(() => {
		getterRef.current = () => state
	});

	return [
		state,
		setState,
		getter,
		resetter
	];
}