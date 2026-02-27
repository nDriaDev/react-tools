import { useMemoizedFn } from "../performance";
import { useStateHistory } from "./useStateHistory";
import { UseStateHistoryGetterResult, UseStateHistoryProps } from "../../models";

/**
 * **`useStateHistoryGetter`**: custom useState with getter state function and that tracks and allows to use previous values.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useStateHistoryGetter)
 * @template T - The type of the state value.
 * @param {UseStateHistoryProps<T>["initialState"]} initialState - {@link UseStateHistoryProps}
 * @param {UseStateHistoryProps<T>["capacity"]} capacity - {@link UseStateHistoryProps}
 * @returns {UseStateHistoryGetterResult<T>} result - {@link UseStateHistoryGetterResult}
 */
export const useStateHistoryGetter = <T>(initialState: UseStateHistoryProps<T>["initialState"], capacity: UseStateHistoryProps<T>["capacity"] = "no-limit"): UseStateHistoryGetterResult<T> => {
	const [state, setter, history] = useStateHistory(initialState, capacity);
	const getter = useMemoizedFn<() => T>(() => state);

	return [
		state,
		setter,
		getter,
		history
	];
}