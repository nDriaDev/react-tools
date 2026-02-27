import { Dispatch, SetStateAction } from "react";

/**
 * The history controls object returned as part of {@link UseStateHistoryResult}
 * and {@link UseStateHistoryGetterResult}.
 *
 * @template T - The type of the state value.
 */
export type StateHistoryControls<T> = {
	/**
	 * A read-only array of all recorded state snapshots, from oldest to most
	 * recent. The entry at `presentPointer` is the currently active state.
	 */
	history: readonly T[];

	/**
	 * The index within `history` that corresponds to the current state. Moves
	 * backward on `undo` and forward on `redo` or a new state update.
	 */
	presentPointer: number;

	/**
	 * Enables or disables history recording. When called with `false`, state
	 * updates still trigger re-renders but are not added to `history`. Re-enable
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
	 * history is replaced with a single entry equal to `value`; otherwise the
	 * history is reset to the current state only.
	 */
	clear: (value?: T) => void;
};

/**
 * Parameters accepted by [useStateHistory](https://react-tools.ndria.dev/hooks/state/useStateHistory) and [useStateHistoryGetter](https://react-tools.ndria.dev/hooks/state/useStateHistoryGetter).
 *
 * @template T - The type of the state value.
 */
export type UseStateHistoryProps<T> = {
	/**
	 * The initial state value. Accepts either a direct value or a lazy initializer
	 * function invoked only on the first render.
	 */
	initialState: T | (() => T);

	/**
	 * Maximum number of state snapshots retained in `history`:
	 * - **`"no-limit"`** *(default)* — All snapshots are retained indefinitely.
	 * - **`number`** — Once the limit is reached, the oldest snapshot is evicted
	 *   to make room for the new one (FIFO).
	 */
	capacity?: number | "no-limit";
};

/**
 * Return value of [useStateHistory](https://react-tools.ndria.dev/hooks/state/useStateHistory).
 *
 * @template T - The type of the state value.
 */
export type UseStateHistoryResult<T> = [
	/** The current state value, reactive — triggers a re-render when updated. */
	T,

	/**
	 * A stable setter (same semantics as the setter returned by `useState`).
	 * Accepts either a new value or an updater function receiving the current
	 * state and returning the next.
	 */
	Dispatch<SetStateAction<T>>,

	/** The history controls object. See {@link StateHistoryControls}. */
	StateHistoryControls<T>
];

/**
 * Return value of [useStateHistoryGetter](https://react-tools.ndria.dev/hooks/state/useStateHistoryGetter).
 *
 * @template T - The type of the state value.
 */
export type UseStateHistoryGetterResult<T> = [
	/** The current state value, reactive — triggers a re-render when updated. */
	T,

	/**
	 * A stable setter (same semantics as the setter returned by `useState`).
	 * Accepts either a new value or an updater function receiving the current
	 * state and returning the next.
	 */
	Dispatch<SetStateAction<T>>,

	/**
	 * A stable getter that returns the current state value synchronously without
	 * causing a re-render. Useful for reading state inside callbacks without
	 * adding it as a dependency.
	 */
	() => T,

	/** The history controls object. See {@link StateHistoryControls}. */
	StateHistoryControls<T>
];