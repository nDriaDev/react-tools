import { Dispatch, SetStateAction, useRef, useState } from "react";
import { StateValidator } from "../../models";
import { useMemoizedFn } from "../performance";

/**
 * **`useStateValidator`**: custom _useState_ hook that validates state on every update. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useStateValidator)
 * @param {T | () => T} initialState - value or a function.
 * @param {StateValidator} validator - function that will be executed to validate state.
 * @returns {[T, Dispatch<SetStateAction<T>>, T extends Record<string, unknown> ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: string}]} invalid
 * Array with:
 * - first element: __state__ value.
 * - second element: __setState__ function to update state.
 * - third element: __valid__ validation value/object for state.
 */
export const useStateValidator = <T>(initialState: T | (() => T), validator: StateValidator<T>): [T, Dispatch<SetStateAction<T>>, T extends Record<string, unknown> ? {[k in keyof T]:{invalid: boolean, message?: string}} : {invalid: boolean, message?: string}] => {
	const refValidator = useRef<{ [k in keyof T]: { invalid: boolean, message?: string } } | { invalid: boolean, message?: string }>();
	const [state, setState] = useState<{ state: T, validation: { [k in keyof T]: { invalid: boolean, message?: string } } | { invalid: boolean, message?: string } }>(() => {
		let state;
		if (initialState instanceof Function) {
			state = initialState();
		} else {
			state = initialState;
		}
		let validation: { [k in keyof T]: {invalid: boolean, message?: string} } | {invalid: boolean, message?: string} = {} as { [k in keyof T]: {invalid: boolean, message?: string} };
		if (!Array.isArray(state) && !(state instanceof Date) && !(state instanceof RegExp) && typeof state === "object") {
			const keys = Reflect.ownKeys(state as Record<string, unknown>);
			keys.forEach((key) => {
				Reflect.set(validation, key, {invalid: false});
			})
		} else {
			validation = {invalid: false};
		}
		refValidator.current = validation;
		return {
			state: state!,
			validation: validation
		}
	});
	const update = useMemoizedFn((val: T | ((value: T) => T)) => {
		const newState = val instanceof Function
			? val(state.state)
			: val;
		const validation = validator(newState, JSON.parse(JSON.stringify(refValidator.current)) as T extends Record<string, unknown> ? { [k in keyof T]: { invalid: boolean, message?: string } } : { invalid: boolean, message?: string });
		setState({ state: newState, validation: validation });
	});

	return [state.state, update, state.validation as T extends Record<string,unknown> ? {[k in keyof T]: {invalid: boolean, message?: string}}:{invalid: boolean, message?: string}];
}