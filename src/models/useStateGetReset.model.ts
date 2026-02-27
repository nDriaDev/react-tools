import { Dispatch, SetStateAction } from "react";

/**
 * Parameters accepted by [useStateGetReset](https://react-tools.ndria.dev/hooks/state/useStateGetReset).
 *
 * @template T - The type of the state value.
 */
export type UseStateGetResetProps<T> = {
	/**
	 * The initial state value. Accepts either a direct value or a lazy initializer
	 * function invoked only on the first render, avoiding unnecessary re-creation
	 * of the initial value on subsequent renders. When omitted, the state is
	 * initialised as `undefined`.
	 */
	initialState?: T | (() => T);
};

/**
 * Return value of [useStateGetReset](https://react-tools.ndria.dev/hooks/state/useStateGetReset).
 *
 * @template T - The type of the state value.
 */
export type UseStateGetResetResult<T> = [
	/** The current state value, reactive — triggers a re-render when updated. */
	T | undefined,

	/**
	 * A stable setter (same semantics as the setter returned by `useState`).
	 * Accepts either a new value or an updater function receiving the current
	 * state and returning the next.
	 */
	Dispatch<SetStateAction<T | undefined>>,

	/**
	 * A stable getter that returns the current state value synchronously without
	 * causing a re-render. Useful for reading state inside callbacks without
	 * adding it as a dependency.
	 */
	() => T | undefined,

	/**
	 * Resets the state back to `initialState`, triggering a re-render.
	 */
	() => void
];