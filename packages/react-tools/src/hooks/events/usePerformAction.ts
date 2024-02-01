import { useCallback, useEffect, useReducer, useRef } from "react"
import { useDeferredValue } from "../lifecycle";

/**
 * **`usePerformAction`**: Hook that executes a callback after a render.
 * @param {(...args: unknown[])=>void} cb - callback to execute
 * @returns {(...args: unknown[]) => void} performAction
 */
export const usePerformAction = <T extends (...args: unknown[]) => void>(cb: T): (...args: Parameters<T>) => void => {
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