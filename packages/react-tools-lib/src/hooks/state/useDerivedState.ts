import { DependencyList, useRef, useReducer, useCallback, Dispatch, SetStateAction, useEffect, EffectCallback } from "react";
import { isShallowEqual } from "../../utils";

/**
 * **`useDerivedState`**: Hook useful when the internal state of a component depends on one or more props. It receives an _initial state_ and a _dependency array_ that works the same way as that of a _useEffect_, _useMemo_, and _useCallback_. Every time the dependencies change, the __derived state__ is resetted to _initial state_. A third optional parameter can be passed, to execute a _compute_ function after the dependencies are updated, without having a _useEffect_ within the component. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useDerivedState)
 * @param {T|()=>T} initialState
 * @param {DependencyList} deps - dependencies list from which depends derived state.
 * @param {EffectCallback} [compute] - function that will be executed when dependencies list change after resetting derived state to __initialState__.
 * @returns {[T, Dispatch<SetStateAction<T>>]} result - array with a stateful value and a function to update it.
 */
export const useDerivedState = <T>(initialState: T | (() => T), deps: DependencyList, compute?: EffectCallback): [T, Dispatch<SetStateAction<T>>] => {
	const [, update] = useReducer(t => t+0.000001, 0);
	const ref = useRef<{ localState: T, deps: DependencyList }>({
		localState: typeof initialState === "function" ? (initialState as ()=> T)() : initialState,
		deps
	});

	let localState: T;
	if (!isShallowEqual(ref.current.deps, deps)) {
		localState = typeof initialState === "function" ? (initialState as ()=>T)() : initialState;
		ref.current = {
			localState: localState,
			deps
		}
		update();
	} else {
		localState = ref.current.localState;
	}

	const updateLocalState = useCallback((state: T | ((state: T) => T)) => {
		const localState = typeof state === "function"
			? (state as ((state: T) => T))(ref.current.localState!)
			: state;
		ref.current.localState = localState;
		update();
	}, []) as Dispatch<SetStateAction<T>>;

	useEffect(() => {
		let cleanUp: ReturnType<EffectCallback>;
		compute && (cleanUp = compute());
		return () => cleanUp && (cleanUp as ()=>void)();
	}, [compute]);

	return [localState, updateLocalState];

}