import { Dispatch, Reducer, ReducerAction, ReducerState, useCallback, useRef, useState } from "react"
import { UseReducerHistoryProps, UseReducerHistoryResult } from "../../models";

/**
 * **`useReducerHistory`**: Custom useReducer that tracks and allows to use previous values.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useReducerHistory)
 * @template R - The reducer type.
 * @param {UseReducerHistoryProps<R>["obj"]} reducer - {@link UseReducerHistoryProps}
 * @param {UseReducerHistoryProps<R>["mutatorsFn"]} initialState - {@link UseReducerHistoryProps}
 * @param {UseReducerHistoryProps<R>["persist"]} [initializer] - {@link UseReducerHistoryProps}
 * @param {UseReducerHistoryProps<R>["persist"]} [capacity] - {@link UseReducerHistoryProps}
 * @returns {UseReducerHistoryResult<R>} result - {@link UseReducerHistoryResult}
 */
export const useReducerHistory = <R extends Reducer<any, any>>(reducer: UseReducerHistoryProps<R>["reducer"], initialState: UseReducerHistoryProps<R>["initialState"], initializer?: UseReducerHistoryProps<R>["initializer"], capacity: UseReducerHistoryProps<R>["capacity"] = "no-limit"): UseReducerHistoryResult<R> => {
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
		setState(derivedValue);
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