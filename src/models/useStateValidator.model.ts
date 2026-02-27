import { Dispatch, SetStateAction } from "react";

/**
 * Validator function accepted by [useStateValidator](https://react-tools.ndria.dev/hooks/state/useStateValidator).
 *
 * The function is called on every state update and must return the (possibly
 * mutated) `validation` argument so React can detect changes.
 *
 * @template T Type of the validated state.
 *
 * ### Overloads
 * - **Object state** — both `this` context and the first argument receive the full object;
 *   the `validation` argument is shaped as `{ [key in keyof T]: ValidationEntry }`.
 * - **Primitive state** — the first argument is the primitive value;
 *   the `validation` argument is a single `ValidationEntry`.
 */
export interface StateValidator<T> {
	(this: T, state: T, validation: T extends object ? {[k in keyof T]: {invalid: boolean, message?: string}}: {invalid: boolean, message?: string}): typeof validation;
	(state: T, validation: T extends object ? { [k in keyof T]: {invalid: boolean, message?: string} } : {invalid: boolean, message?: string}): typeof validation;
}

/**
 * Parameters accepted by [useStateValidator](https://react-tools.ndria.dev/hooks/state/useStateValidator).
 *
 * @template T - The type of the state value being validated.
 */
export type UseStateValidatorProps<T> = {
	/**
	 * The initial state value. Accepts either a direct value or a lazy initializer
	 * function invoked only on the first render.
	 */
	initialState: T | (() => T);

	/**
	 * A validator function or configuration object that defines the validation
	 * rules applied to the state. See {@link StateValidator}.
	 */
	validator: StateValidator<T>;
};

/**
 * Return value of [useStateValidator](https://react-tools.ndria.dev/hooks/state/useStateValidator).
 *
 * @template T - The type of the state value being validated.
 */
export type UseStateValidatorResult<T> = [
	/** The current state value, reactive — triggers a re-render when updated. */
	T,

	/**
	 * A stable setter (same semantics as the setter returned by `useState`).
	 * Accepts either a new value or an updater function receiving the current
	 * state and returning the next. Triggers re-validation after each update.
	 */
	Dispatch<SetStateAction<T>>,

	/**
	 * The current validation result, updated synchronously after each state change.
	 * Shape depends on `T`:
	 * - When `T` is an **object** — a mirrored object where each key maps to
	 *   `{ invalid: boolean, message?: string }`, allowing per-field validation
	 *   feedback.
	 * - When `T` is a **primitive** — a single `{ invalid: boolean, message?: string }`
	 *   object describing the overall validity of the value.
	 */
	T extends object
	? { [k in keyof T]: { invalid: boolean; message?: string } }
	: { invalid: boolean; message?: string }
];