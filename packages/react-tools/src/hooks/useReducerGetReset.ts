import { Dispatch, Reducer, ReducerAction, ReducerState, useCallback, useEffect, useReducer, useRef } from "react";

/**
 * **`useReducerGetReset`**: Custom useReducer with get and reset state functions.
 * @param {R extends Reducer<any, any>} reducer - The reducer function that specifies how the state gets updated.
 * @param {ReducerState<R>} initialState - The value from which the initial state is calculated. How the initial state is calculated from it depends on the next _init_ argument.
 * @param {(init: ReducerState<R>) => ReducerState<R>} [initializer] - Function that should return the _initial state_. If it’s not specified, the initial state is set to _initialState_, otherwise is set to the result of calling _initializer(initialState)_.
 * @returns {[ReducerState<R>, Dispatch<ReducerAction<R>>, ()=>ReducerState<R>, ()=>void]} array
 */
export const useReducerGetReset = <R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>): [ReducerState<R>, Dispatch<ReducerAction<R>>, ()=>ReducerState<R>, ()=>void] => {
	const [state, setState] = useReducer(reducer, initialState, initializer!);
	const initialStateRef = useRef<ReducerState<R>|undefined>(undefined);

	const getterRef = useRef<() => ReducerState<R>>(() => state);

	const getter = useCallback(() => getterRef.current(), []);

	const resetter = useCallback(() => setState(initialStateRef.current!), []);

	if (initialStateRef.current === undefined) {
		initialStateRef.current = state;
	}

	useEffect(() => {
		getterRef.current = () => state;
	});

	return [
		state,
		setState,
		getter,
		resetter
	];
}