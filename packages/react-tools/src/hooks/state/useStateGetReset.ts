import { Dispatch, SetStateAction, useCallback, useState } from "react"
import { useMemoizedFunction } from "../performance";

/**
 * **`useStateGetReset`**: Custom useState with get and reset state functions.
 * @param {T | () => T} initialState - value or a function.
 * @returns {[T, Dispatch<SetStateAction<T>>, () => T, ()=>void]} array
 */
export const useStateGetReset = <T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void] => {
	const [state, setState] = useState<T>(initialState);
	const getter = useMemoizedFunction<()=>T>(() => state);

	const resetter = useCallback(() => setState(initialState), [initialState]);

	return [
		state,
		setState,
		getter,
		resetter
	];
}