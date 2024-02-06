import { Dispatch, SetStateAction, useCallback, useState } from "react"
import { useMemoizedFn } from "../performance";

/**
 * **`useStateGetReset`**: Custom useState with get and reset state functions. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateGetReset)
 * @param {T | () => T} initialState - value or a function.
 * @returns {[T, Dispatch<SetStateAction<T>>, () => T, ()=>void]} array
 */
export const useStateGetReset = <T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void] => {
	const [state, setState] = useState<T>(initialState);
	const getter = useMemoizedFn<()=>T>(() => state);

	const resetter = useCallback(() => setState(initialState), [initialState]);

	return [
		state,
		setState,
		getter,
		resetter
	];
}