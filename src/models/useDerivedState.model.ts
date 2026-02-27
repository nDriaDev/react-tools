import { DependencyList, Dispatch, EffectCallback, SetStateAction } from "react";

/**
 * Parameters accepted by [useDerivedState](https://react-tools.ndria.dev/hooks/state/useDerivedState).
 *
 * @template T - The type of the state value.
 */
export type UseDerivedStateProps<T> = {
	/**
	 * The initial state value. Accepts either a direct value or a lazy initializer
	 * function invoked only on the first render.
	 */
	initialState: T | (() => T);

	/**
	 * A React dependency array (same semantics as `useEffect`). When any dependency
	 * changes, `compute` is invoked to derive and apply a new state value.
	 */
	deps: DependencyList;

	/**
	 * An optional effect callback invoked whenever `deps` change, following the
	 * same semantics as `useEffect`. Use it to derive the next state value and
	 * call the returned setter to update it. When omitted, the state is not
	 * automatically recomputed on dependency changes.
	 */
	compute?: EffectCallback;
};

/**
 * Return value of [useDerivedState](https://react-tools.ndria.dev/hooks/state/useDerivedState).
 *
 * @template T - The type of the state value.
 */
export type UseDerivedStateResult<T> = [
	/**
	 * The current state value, reactive — triggers a re-render when updated.
	 */
	T,

	/**
	 * A stable setter function (same semantics as the setter returned by
	 * `useState`). Accepts either a new value or an updater function receiving
	 * the current state and returning the next state.
	 */
	Dispatch<SetStateAction<T>>
];