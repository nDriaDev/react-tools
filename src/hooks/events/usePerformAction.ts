import { useCallback, useEffect, useReducer, useRef } from "react"
import { useDeferredValue } from "../lifecycle";
import { UsePerformActionProps, UsePerformActionResult } from "../../models";

/**
 * **`usePerformAction`**: Hook that executes a callback after a render.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/usePerformAction)
 * @template T - The type of the callback function. Must extend a function accepting any number of unknown arguments and returning void.
 * @param {UsePerformActionProps<T>["cb"]} cb - {@link UsePerformActionProps}
 * @returns {UsePerformActionResult<T>} result {@link UsePerformActionResult}
 */
export const usePerformAction = <T extends (...args: unknown[]) => void>(cb: UsePerformActionProps<T>["cb"]): UsePerformActionResult<T> => {
	const [internalState, setInternalState] = useReducer(t => t + 0.0001, 0);
	const deferredValue = useDeferredValue(internalState);
	const actionRef = useRef(cb);
	const argsActionRef = useRef<Parameters<T>>();

	useEffect(() => {
		if (deferredValue !== 0) {
			argsActionRef.current
				? actionRef.current(...argsActionRef.current)
				: actionRef.current();
		}
	}, [deferredValue])

	const performAction = useCallback((...args: Parameters<T>) => {
		argsActionRef.current = args;
		setInternalState();
	}, [])

	return performAction;
}