/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, Reducer, ReducerAction, ReducerState } from "react";
import { useMemoizedFn } from "../performance"
import { useReducerHistory } from "./useReducerHistory"

/**
 * **`useReducerHistoryGetter`**: Custom useReducer with getter state function and that tracks and allows to use previous values. [See demo](https://react-tools.ndria.dev/#/hooks/state/useReducerHistoryGetter)
 * @param {R extends Reducer<any, any>} reducer - The reducer function that specifies how the state gets updated.
 * @param {ReducerState<R>} initialState - The value from which the initial state is calculated. How the initial state is calculated from it depends on the next _init_ argument.
 * @param {(init: ReducerState<R>) => ReducerState<R>} [initializer] - Function that should return the _initial state_. If it’s not specified, the initial state is set to _initialState_, otherwise is set to the result of calling _initializer(initialState)_.
 * @param {number | "no-limit"} [capacity="no-limit"] - history capacity (default 'no-limit').
 * @returns {[ReducerState<R>, Dispatch<ReducerAction<R>>, ()=>ReducerState<R>, {history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable:boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void}]} array
 */
export const useReducerHistoryGetter = <R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>, capacity: number | "no-limit" = "no-limit"): [ReducerState<R>, Dispatch<ReducerAction<R>>,()=>ReducerState<R>, { history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable: boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void }] => {
	const [state, setter, history] = useReducerHistory(reducer, initialState, initializer, capacity);
	const getter = useMemoizedFn<() => ReducerState<R>>(() => state);

	return [
		state,
		setter,
		getter,
		history
	];
}