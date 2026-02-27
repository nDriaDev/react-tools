/**
 * Options used by [useDebounce](https://react-tools.ndria.dev/hooks/api-dom/useDebounce).
 */
export interface UseDebounceOpts {
	/** Delay in milliseconds before the debounced function is invoked. */
	delay: number;
	/**
	 * When `true`, uses `requestAnimationFrame` as the timer mechanism instead of `setTimeout`.
	 * Only fires when the browser window is focused. Useful for animation-related debouncing.
	 * @default false
	 */
	focusedWindow?: boolean;
}

/**
 * Function used by [useDebounce](https://react-tools.ndria.dev/hooks/api-dom/useDebounce).
 * @template T Type of the parameters function.
 */
export interface UseDebounceFunction<T extends unknown[]> {
	(...args: T): void;
}

/**
 * Result tuple by [useDebounce](https://react-tools.ndria.dev/hooks/api-dom/useDebounce).
 *
 * @template T Type of the UseDebounceFunction parameters function.
 */
export type UseDebounceResult<T extends unknown[]> = [
	/** the debounced version of the function; calling it resets the delay timer. */
	(...args: T) => void,
	/** cancel any pending invocation without calling the function. */
	() => void,
	/** flush: execute the function immediately, cancelling the pending debounced call. */
	(...args: T) => void
];