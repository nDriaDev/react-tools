import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react"

/**
 * **`useStateHistory`**: custom useState that tracks and allows to use previous values. [See demo](https://react-tools.ndria.dev/#/hooks/state/useStateHistory)
 * @param {T | () => T} initialState - value or a function.
 * @param {number | "no-limit"} [capacity="no-limit"] - history capacity (default 'no-limit').
 * @returns {[T, Dispatch<SetStateAction<T>>, {history: readonly T[], presentPointer: number, trackUpdate: (enable:boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: T) => void}]} array
 */
export const useStateHistory = <T>(initialState: T | (() => T), capacity: number | "no-limit" = "no-limit"): [T, Dispatch<SetStateAction<T>>, { history: readonly T[], presentPointer: number, trackUpdate: (enable:boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: T) => void }] => {
	const [state, setState] = useState(initialState);
	const [, setVersion] = useState(0);
	const historyState = useRef<T[]>([state]);
	const memoryLimit = useRef<number>(capacity === "no-limit" ? Infinity : capacity);
	const presentPointer = useRef<number>(0);
	const trackHistory = useRef(true);

	const trackUpdate = useCallback((enable: boolean) => (trackHistory.current = enable), []);

	const setter: Dispatch<SetStateAction<T>> = useCallback((value: T | ((prevState: T) => T)) => {
		const derivedValue = value instanceof Function ? value(historyState.current[presentPointer.current]) : value;
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
	}, [memoryLimit]);

	const undo = useCallback(() => {
		if (presentPointer.current === 0) {
			return;
		}
		presentPointer.current--;
		setState(historyState.current[presentPointer.current]);
		setVersion(v => v + 1);
	}, []);

	const redo = useCallback(() => {
		if (presentPointer.current === historyState.current.length-1) {
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

	const clear = useCallback((value?: T) => {
		const derivedValue = value ? value : historyState.current[presentPointer.current];
		historyState.current = [derivedValue];
		presentPointer.current = 0;
		setState(historyState.current[presentPointer.current]);
		setVersion(v => v + 1);
	}, []);

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