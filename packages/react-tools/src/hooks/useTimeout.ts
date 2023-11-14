import { useCallback, useEffect, useRef } from "react"

/**
 * **`useTimeout`**: Hook to handle setTimeout timer function with the possibility to clear and promisify execution.
 * @param {(...args: unknown[])=>void} callback - Function to call when the timer elapses.
 * @param {number} delay - The number of milliseconds to wait before calling the `callback`.
 * @returns {[(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>]} - array: first element is the function to call setTimeout; second element is the function to clearTimeout; thrid element promisify setTimeout.
 */
export const useTimeout = <TArgs extends unknown[]>(callback: (...args: TArgs) => void, delay: number): [(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>] => {
	const idTimeout = useRef<number | NodeJS.Timeout>();

	const apply = useCallback((...args: TArgs): void => {
		clearTimeout(idTimeout.current);
		idTimeout.current = setTimeout(() => callback(...args), delay);
	}, [callback, delay]);

	const applyPromisify = useCallback((...args: TArgs): Promise<void> => {
		clearTimeout(idTimeout.current);
		return new Promise<void>(res => {
			idTimeout.current = setTimeout(() => {
				res(callback(...args));
			}, delay);
		})
	}, [callback, delay]);

	const clear = useCallback(() => {
		clearTimeout(idTimeout.current);
	}, []);

	useEffect(() => {
		clearTimeout(idTimeout.current);
	}, []);

	return [
		apply,
		clear,
		applyPromisify
	];
}