/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, Reducer, ReducerAction, ReducerState, useCallback, useRef, useState } from "react"

/**
 * **`useReducerHistory`**: Custom useReducer that tracks and allows to use previous values. [See demo](https://react-tools.ndria.dev/#/hooks/state/useReducerHistory)
 * @param {R extends Reducer<any, any>} reducer - The reducer function that specifies how the state gets updated.
 * @param {ReducerState<R>} initialState - The value from which the initial state is calculated. How the initial state is calculated from it depends on the next _init_ argument.
 * @param {(init: ReducerState<R>) => ReducerState<R>} [initializer] - Function that should return the _initial state_. If it’s not specified, the initial state is set to _initialState_, otherwise is set to the result of calling _initializer(initialState)_.
 * @param {number | "no-limit"} [capacity="no-limit"] - history capacity (default 'no-limit').
 * @returns {[ReducerState<R>, Dispatch<ReducerAction<R>>, {history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable:boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void}]} array
 */
export const useReducerHistory = <R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>, capacity: number | "no-limit" = "no-limit"): [ReducerState<R>, Dispatch<ReducerAction<R>>, { history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable: boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void }] => {
	const [state, setState] = useState(() => initializer ? initializer(initialState): initialState);
	const [, setVersion] = useState(0);
	const historyState = useRef<ReducerState<R>[]>([state]);
	const memoryLimit = useRef<number>(capacity === "no-limit" ? Infinity : capacity);
	const presentPointer = useRef<number>(0);
	const trackHistory = useRef(true);

	const trackUpdate = useCallback((enable: boolean) => (trackHistory.current = enable), []);

	const setter: Dispatch<ReducerAction<R>> = useCallback((value: ReducerAction<R>) => {
		const derivedValue = reducer(historyState.current[presentPointer.current], value);
		historyState.current = historyState.current.slice(0, presentPointer.current + 1);
		!trackHistory.current && historyState.current.pop();
		historyState.current.push(derivedValue);
		historyState.current.length > memoryLimit.current
			? historyState.current.shift()
			: !trackHistory.current
				? 0
				: presentPointer.current++;
		setState(value);
		setVersion(v => v + 1);
	}, [memoryLimit, reducer]);

	const undo = useCallback(() => {
		if (presentPointer.current === 0) {
			return;
		}
		presentPointer.current--;
		setState(historyState.current[presentPointer.current]);
		setVersion(v => v + 1);
	}, []);

	const redo = useCallback(() => {
		if (presentPointer.current === historyState.current.length - 1) {
			return;
		}
		presentPointer.current++;
		setState(historyState.current[presentPointer.current]);
		setVersion(v => v + 1);
	}, []);

	const go = useCallback((index: number) => {
		if (index < 0 || index > historyState.current.length - 1) {
			return;
		}
		presentPointer.current = index;
		setState(historyState.current[presentPointer.current]);
		setVersion(v => v + 1);
	}, []);

	const clear = useCallback((value?: ReducerAction<R>) => {
		const derivedValue = value ? reducer(historyState.current[presentPointer.current], value) : historyState.current[presentPointer.current];
		historyState.current = [derivedValue];
		presentPointer.current = 0;
		setState(historyState.current[presentPointer.current]);
		setVersion(v => v + 1);
	}, [reducer]);

	const canUndo = presentPointer.current > 0;

	const canRedo = presentPointer.current < historyState.current.length - 1;

	return [
		state,
		setter,
		{
			history: Object.seal([...historyState.current]),
			presentPointer: presentPointer.current,
			trackUpdate,
			canUndo,
			canRedo,
			undo,
			redo,
			go,
			clear
		}
	];

}