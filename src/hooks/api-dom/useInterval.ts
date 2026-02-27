import { useCallback, useEffect, useRef } from "react"
import { UseIntervalProps, UseIntervalResult } from "../../models";

/**
 * **`useInterval`**: Hook to handle setInterval timer function with the possibility to clear and promisify execution.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useInterval)
 * @template T Type of callback function parameters.
 * @param {UseIntervalProps["callback"]} callback - {@link UseIntervalProps["callback"]}
 * @param {UseIntervalProps["delay"]} delay - {@link UseIntervalProps["delay"]}
 * @returns {UseIntervalResult} result {@link UseIntervalResult}
 */
export const useInterval = <T extends unknown[]>(callback: UseIntervalProps<T>["callback"], delay: UseIntervalProps<T>["delay"]): UseIntervalResult<T> => {
	const idInterval = useRef<ReturnType<typeof setInterval>>();

	const apply = useCallback((...args: T): void => {
		clearInterval(idInterval.current);
		idInterval.current = setInterval(() => callback(...args), delay);
	}, [callback, delay]);

	const applyPromisify = useCallback((...args: T): Promise<void> => {
		clearInterval(idInterval.current);
		return new Promise<void>(res => {
			idInterval.current = setInterval(() => {
				res(callback(...args));
			}, delay);
		})
	}, [callback, delay]);

	const clear = useCallback(() => {
		clearInterval(idInterval.current);
	}, []);

	useEffect(() => () => clearInterval(idInterval.current), []);

	return [
		apply,
		clear,
		applyPromisify
	];
}