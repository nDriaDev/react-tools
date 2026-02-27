import { Dispatch, SetStateAction, useState } from "react";
import { useMemoizedFn } from "../performance";
import { UseStateGetResetProps, UseStateGetResetResult } from "../../models";

/**
 * **`useStateGetReset`**: Custom useState with get and reset state functions.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useStateGetReset)
 * @template T - The type of the state value.
 * @param {UseStateGetResetProps<T>["initialState"]} [initialState] - {@link UseStateGetResetProps}
 * @returns {UseStateGetResetResult<T>} result - {@link UseStateGetResetResult}
 */
function useStateGetReset<T = undefined>(): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => T | undefined, () => void];
function useStateGetReset<T>(initialState?: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => T, () => void];
function useStateGetReset<T>(initialState?: UseStateGetResetProps<T>["initialState"]): UseStateGetResetResult<T> {
	const [state, setState] = useState<T | undefined>(initialState);
	const getter = useMemoizedFn<()=>T | undefined>(() => state);

	const resetter = useMemoizedFn(() => setState(initialState));

	return [
		state,
		setState,
		getter,
		resetter
	];
}

export { useStateGetReset };