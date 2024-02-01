import { useCallback, useEffect, useRef } from "react"

/**
 * **`useInterval`**: Hook to handle setInterval timer function with the possibility to clear and promisify execution.
 * @param {(...args: unknown[])=>void} callback - Function to call when the timer elapses.
 * @param {number} delay - The number of milliseconds to wait before calling the `callback`.
 * @returns {[(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>]} - array: first element is the function to call setInterval; second element is the function to clearInterval; thrid element promisify setInterval.
 */
export const useInterval = <TArgs extends unknown[]>(callback: (...args: TArgs) => void, delay: number): [(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>] => {
	const idInterval = useRef<number>();

	const apply = useCallback((...args: TArgs): void => {
		clearInterval(idInterval.current);
		idInterval.current = setInterval(() => callback(...args), delay) as unknown as number;
	}, [callback, delay]);

	const applyPromisify = useCallback((...args: TArgs): Promise<void> => {
		clearInterval(idInterval.current);
		return new Promise<void>(res => {
			idInterval.current = setInterval(() => {
				res(callback(...args));
			}, delay) as unknown as number;
		})
	}, [callback, delay]);

	const clear = useCallback(() => {
		clearInterval(idInterval.current);
	}, []);

	useEffect(() => {
		clearInterval(idInterval.current);
	}, []);

	return [
		apply,
		clear,
		applyPromisify
	];
}