import { DispatchWithoutAction, useReducer } from "react"

/**
 * **`useRerender`**: Hook to force a render. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useRerender)
 * @param {boolean} [withValue] - optional boolean value: if it is true, an array with _value_ and _rerender_ function is returned.
 * @returns {DispatchWithoutAction|[T,DispatchWithoutAction]} array with _value_ and _updateValue_ function or _rerender_ function.
 */
function useRerender(withValue?: never): DispatchWithoutAction;
function useRerender(withValue?: false): DispatchWithoutAction;
function useRerender<T>(withValue?: true): [T, DispatchWithoutAction];
function useRerender<T>(withValue?: true|false|never): DispatchWithoutAction | [T, DispatchWithoutAction] {
	const reducer = useReducer(t => t+0.00000000001, 0);

	return withValue
		? reducer
		: reducer[1];
}

export { useRerender };