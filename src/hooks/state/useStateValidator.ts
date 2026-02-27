import { useRef, useState } from "react";
import { UseStateValidatorProps, UseStateValidatorResult } from "../../models";
import { useMemoizedFn } from "../performance";

/**
 * **`useStateValidator`**: custom _useState_ hook that validates state on every update.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useStateValidator)
 * @template T Type of the validated state.
 * @param {CreatePubSubStoreProps<T>["initialState"]} initialState - {@link CreatePubSubStoreProps}
 * @param {CreatePubSubStoreProps<T>["validator"]} validator - {@link CreatePubSubStoreProps}
 * @returns {CreatePubSubStoreResult<T>} result - {@link CreatePubSubStoreResult}
 */
export const useStateValidator = <T>(initialState: UseStateValidatorProps<T>["initialState"], validator: UseStateValidatorProps<T>["validator"]): UseStateValidatorResult<T> => {
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
			const keys = Reflect.ownKeys(state as object);
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
		const validation = validator(newState, JSON.parse(JSON.stringify(refValidator.current)));
		setState({ state: newState, validation: validation });
	});

	return [state.state, update, state.validation as T extends object ? {[k in keyof T]: {invalid: boolean, message?: string}}:{invalid: boolean, message?: string}];
}