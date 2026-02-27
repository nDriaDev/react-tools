import { Dispatch, Reducer, ReducerAction, ReducerState } from "react";

/**
 * The history controls object returned as part of {@link UseReducerHistoryResult}
 * and {@link UseReducerHistoryGetterResult}.
 *
 * @template R - The reducer type.
 */
export type ReducerHistoryControls<R extends Reducer<any, any>> = {
	/**
	 * A read-only array of all recorded state snapshots, from oldest to most recent.
	 * The entry at `presentPointer` is the currently active state.
	 */
	history: readonly ReducerState<R>[];

	/**
	 * The index within `history` that corresponds to the current state. Moves
	 * backward on `undo` and forward on `redo` or a new dispatch.
	 */
	presentPointer: number;

	/**
	 * Enables or disables history recording. When called with `false`, dispatched
	 * actions still update the state but are not added to `history`. Re-enable
	 * with `true` to resume recording.
	 */
	trackUpdate: (enable: boolean) => void;

	/**
	 * `true` when there is at least one state snapshot before `presentPointer`
	 * that can be restored via `undo`.
	 */
	canUndo: boolean;

	/**
	 * `true` when there is at least one state snapshot after `presentPointer`
	 * that can be restored via `redo`.
	 */
	canRedo: boolean;

	/**
	 * Moves `presentPointer` one step backward in `history` and restores the
	 * corresponding state. No-op when `canUndo` is `false`.
	 */
	undo: () => void;

	/**
	 * Moves `presentPointer` one step forward in `history` and restores the
	 * corresponding state. No-op when `canRedo` is `false`.
	 */
	redo: () => void;

	/**
	 * Jumps directly to the state at the given `index` in `history`, updating
	 * `presentPointer` and restoring that snapshot.
	 */
	go: (index: number) => void;

	/**
	 * Clears the entire history array. When `value` is provided, the cleared
	 * history is replaced with a single entry computed by dispatching `value`
	 * against the current state; otherwise the history is reset to the current
	 * state only.
	 */
	clear: (value?: ReducerAction<R>) => void;
};

/**
 * Parameters accepted by [useReducerHistory](https://react-tools.ndria.dev/hooks/state/useReducerHistory) and [useReducerHistoryGetter](https://react-tools.ndria.dev/hooks/state/useReducerHistoryGetter).
 *
 * @template R - The reducer type, extending `Reducer<any, any>`.
 */
export type UseReducerHistoryProps<R extends Reducer<any, any>> = {
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

	/**
	 * Maximum number of state snapshots retained in `history`:
	 * - **`"no-limit"`** *(default)* — All snapshots are retained indefinitely.
	 * - **`number`** — Once the limit is reached, the oldest snapshot is evicted
	 *   to make room for the new one (FIFO).
	 */
	capacity?: number | "no-limit";
};

/**
 * Return value of [useReducerHistory](https://react-tools.ndria.dev/hooks/state/useReducerHistory).
 *
 * @template R - The reducer type.
 */
export type UseReducerHistoryResult<R extends Reducer<any, any>> = [
	/** The current reducer state, reactive — triggers a re-render when updated. */
	ReducerState<R>,

	/** The stable dispatch function used to send actions to the reducer. */
	Dispatch<ReducerAction<R>>,

	/** The history controls object. See {@link ReducerHistoryControls}. */
	ReducerHistoryControls<R>
];

/**
 * Return value of [useReducerHistoryGetter](https://react-tools.ndria.dev/hooks/state/useReducerHistoryGetter).
 *
 * @template R - The reducer type.
 */
export type UseReducerHistoryGetterResult<R extends Reducer<any, any>> = [
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

	/** The history controls object. See {@link ReducerHistoryControls}. */
	ReducerHistoryControls<R>
];