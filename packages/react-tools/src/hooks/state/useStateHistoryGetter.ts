import { Dispatch, SetStateAction } from "react";
import { useMemoizedFn } from "../performance"
import { useStateHistory } from "../state"

/**
 * **`useStateHistoryGetter`**: custom useState with getter state function and that tracks and allows to use previous values. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateHistoryGetter)
 * @param {T | () => T} initialState - value or a function.
 * @param {number | "no-limit"} [capacity="no-limit"] - history capacity (default 'no-limit').
 * @returns {[T, Dispatch<SetStateAction<T>>, () => T, {history: readonly T[], presentPointer: number, trackUpdate: (enable:boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: T) => void}]} array
 */
export const useStateHistoryGetter = <T>(initialState: T | (() => T), capacity: number | "no-limit" = "no-limit"): [T, Dispatch<SetStateAction<T>>, () => T, ReturnType<typeof useStateHistory<T>>[2]] => {
	const [state, setter, history] = useStateHistory(initialState, capacity);
	const getter = useMemoizedFn<() => T>(() => state);

	return [
		state,
		setter,
		getter,
		history
	];
}