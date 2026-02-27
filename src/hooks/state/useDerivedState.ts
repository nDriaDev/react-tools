import { DependencyList, useRef, useReducer, useCallback, Dispatch, SetStateAction, useEffect, EffectCallback } from "react";
import { isShallowEqual } from "../../utils";
import { UseDerivedStateProps, UseDerivedStateResult } from "../../models";

/**
 * **`useDerivedState`**: Hook useful when the internal state of a component depends on one or more props. It receives an _initial state_ and a _dependency array_ that works the same way as that of a _useEffect_, _useMemo_, and _useCallback_. Every time the dependencies change, the __derived state__ is resetted to _initial state_. A third optional parameter can be passed, to execute a _compute_ function after the dependencies are updated, without having a _useEffect_ within the component.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useDerivedState)
 * @template T - The type of the state value.
 * @param {UseDerivedStateProps<T>["initialState"]} initialState - {@link UseDerivedStateProps}
 * @param {UseDerivedStateProps<T>["deps"]} deps - {@link UseDerivedStateProps}
 * @param {UseDerivedStateProps<T>["compute"]} [compute] - {@link UseDerivedStateProps}
 * @returns {UseDerivedStateResult<T>} result - {@link UseDerivedStateResult}
 */
export const useDerivedState = <T>(initialState: UseDerivedStateProps<T>["initialState"], deps: UseDerivedStateProps<T>["deps"], compute?: UseDerivedStateProps<T>["compute"]): UseDerivedStateResult<T> => {
	const [, update] = useReducer(t => t+1, 0);
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