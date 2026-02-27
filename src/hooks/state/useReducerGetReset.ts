import { Reducer, ReducerState, useReducer, useRef } from "react";
import { useMemoizedFn } from "../performance";
import { UseReducerGetResetProps, UseReducerGetResetResult } from "../../models";

/**
 * **`useReducerGetReset`**: Custom useReducer with get and reset state functions.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useReducerGetReset)
 * @template R - The reducer type, extending `Reducer<any, any>`.
 * @param {UseReducerGetResetProps<R>["reducer"]} reducer - {@link UseReducerGetResetProps}
 * @param {UseReducerGetResetProps<R>["initialState"]} initialState - {@link UseReducerGetResetProps}
 * @param {UseReducerGetResetProps<R>["initializer"]} [initializer] - {@link UseReducerGetResetProps}
 * @returns {UseReducerGetResetResult<R>} result - {@link UseReducerGetResetResult}
 */
export const useReducerGetReset = <R extends Reducer<any, any>>(reducer: UseReducerGetResetProps<R>["reducer"], initialState: UseReducerGetResetProps<R>["initialState"], initializer?: UseReducerGetResetProps<R>["initializer"]): UseReducerGetResetResult<R> => {
	const [state, setState] = useReducer(reducer, initialState, initializer!);
	const getter = useMemoizedFn<() => ReducerState<R>>(() => state);
	const initialStateRef = useRef<ReducerState<R>|undefined>(undefined);

	const resetter = useMemoizedFn(() => setState(initialStateRef.current!));

	if (initialStateRef.current === undefined) {
		initialStateRef.current = state;
	}

	return [
		state,
		setState,
		getter,
		resetter
	];
}