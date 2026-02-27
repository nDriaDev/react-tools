/**
 * Parameters accepted by [usePrevious](https://react-tools.ndria.dev/hooks/state/usePrevious).
 *
 * @template T - The type of the value being tracked.
 */
export type UsePreviousProps<T> = {
	/**
	 * The value to track. On each render, the hook stores the current value so
	 * it can be returned as the "previous" value on the next render.
	 */
	variable: T;
};

/**
 * Return value of [usePrevious](https://react-tools.ndria.dev/hooks/state/usePrevious).
 *
 * @template T - The type of the tracked value.
 */
export type UsePreviousResult<T> = [
	/**
	 * The value from the previous render. `undefined` on the first render, before
	 * any previous value has been recorded.
	 */
	T | undefined,

	/**
	 * A function that enables or disables tracking. When called with `false`,
	 * the hook stops recording new previous values — the last recorded value
	 * is frozen until tracking is re-enabled with `true`.
	 */
	(enable: boolean) => void
];