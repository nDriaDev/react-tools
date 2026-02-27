import { Reducer, ReducerState } from "react";
import { useMemoizedFn } from "../performance";
import { useReducerHistory } from "./useReducerHistory";
import { UseReducerHistoryGetterResult, UseReducerHistoryProps } from "../../models";

/**
 * **`useReducerHistoryGetter`**: Custom useReducer with getter state function and that tracks and allows to use previous values.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useReducerHistoryGetter)
 * @template R - The reducer type.
 * @param {UseReducerHistoryProps<R>["reducer"]} reducer - {@link UseReducerHistoryProps}
 * @param {UseReducerHistoryProps<R>["initialState"]} initialState - {@link UseReducerHistoryProps}
 * @param {UseReducerHistoryProps<R>["initializer"]} [initializer] - {@link UseReducerHistoryProps}
 * @param {UseReducerHistoryProps<R>["capacity"]} [capacity] - {@link UseReducerHistoryProps}
 * @returns {UseReducerHistoryGetterResult<R>} result - {@link UseReducerHistoryGetterResult}
 */
export const useReducerHistoryGetter = <R extends Reducer<any, any>>(reducer: UseReducerHistoryProps<R>["reducer"], initialState: UseReducerHistoryProps<R>["initialState"], initializer?: UseReducerHistoryProps<R>["initializer"], capacity: UseReducerHistoryProps<R>["capacity"] = "no-limit"): UseReducerHistoryGetterResult<R> => {
	const [state, setter, history] = useReducerHistory(reducer, initialState, initializer, capacity);
	const getter = useMemoizedFn<() => ReducerState<R>>(() => state);

	return [
		state,
		setter,
		getter,
		history
	];
}