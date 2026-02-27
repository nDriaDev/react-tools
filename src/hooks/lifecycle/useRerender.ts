import { DispatchWithoutAction, useReducer } from "react"
import { UseRerenderResult } from "../../models";

/**
 * **`useRerender`**: Hook to force a render.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useRerender)
 * @template T - The type of the internal counter value. Only relevant when `withValue` is `true` — ignored in the `DispatchWithoutAction` overload.
 * @param {boolean} [withValue]
 * @returns {UseRerenderResult<T>} result - {@link UseRerenderResult}
 */
function useRerender(withValue?: never): DispatchWithoutAction;
function useRerender(withValue?: false): DispatchWithoutAction;
function useRerender<T>(withValue?: true): [T, DispatchWithoutAction];
function useRerender<T>(withValue?: true | false | never): UseRerenderResult<T> {
	const reducer = useReducer(t => t+1, 0);

	return withValue
		? reducer
		: reducer[1];
}

export { useRerender };