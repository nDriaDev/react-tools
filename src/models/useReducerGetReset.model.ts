import { Dispatch, Reducer, ReducerAction, ReducerState } from "react";

/**
 * Parameters accepted by [useReducerGetReset](https://react-tools.ndria.dev/hooks/state/useReducerGetReset).
 *
 * @template R - The reducer type, extending `Reducer<any, any>`.
 */
export type UseReducerGetResetProps<R extends Reducer<any, any>> = {
	/**
	 * The reducer function `(state, action) => state` that computes the next
	 * state given the current state and a dispatched action.
	 */
	reducer: R;

	/**
	 * The initial reducer state value, passed directly to `useReducer`.
	 */
	initialState: ReducerState<R>;

	/**
	 * An optional initializer function that receives `initialState` and returns
	 * the actual initial state. Useful for lazily computing the initial value
	 * or extracting it from a larger object.
	 */
	initializer?: (init: ReducerState<R>) => ReducerState<R>;
};

/**
 * Return value of [useReducerGetReset](https://react-tools.ndria.dev/hooks/state/useReducerGetReset).
 *
 * @template R - The reducer type.
 */
export type UseReducerGetResetResult<R extends Reducer<any, any>> = [
	/** The current reducer state, reactive — triggers a re-render when updated. */
	ReducerState<R>,

	/** The stable dispatch function used to send actions to the reducer. */
	Dispatch<ReducerAction<R>>,

	/**
	 * A stable getter that returns the current reducer state synchronously
	 * without causing a re-render. Useful for reading state inside callbacks
	 * without adding it as a dependency.
	 */
	() => ReducerState<R>,

	/**
	 * Resets the reducer state back to the original `initialState` (after
	 * applying `initializer` if provided), dispatching a reset internally
	 * and triggering a re-render.
	 */
	() => void
];