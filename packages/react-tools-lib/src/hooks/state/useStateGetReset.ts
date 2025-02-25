import { Dispatch, SetStateAction, useCallback, useState } from "react"
import { useMemoizedFn } from "../performance";

/**
 * **`useStateGetReset`**: Custom useState with get and reset state functions. [See demo](https://react-tools.ndria.dev/#/hooks/state/useStateGetReset)
 * @param {T | () => T} initialState - value or a function.
 * @returns {[T, Dispatch<SetStateAction<T>>, () => T, ()=>void]} array
 */
function useStateGetReset<T = undefined>(initialState?: undefined): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => T | undefined, () => void];
function useStateGetReset<T>(initialState?: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void];
function useStateGetReset<T>(initialState?: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void] | [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => T | undefined, () => void] {
	const [state, setState] = useState<T | undefined>(initialState);
	const getter = useMemoizedFn<()=>T | undefined>(() => state);

	const resetter = useCallback(() => setState(initialState), [initialState]);

	return [
		state,
		setState,
		getter,
		resetter
	];
}

export { useStateGetReset };