/**
 * Parameters accepted by [useTimeout](https://react-tools.ndria.dev/hooks/api-dom/useTimeout).
 *
 * @template TArgs - The argument tuple type of the callback. Inferred automatically from the `callback` argument.
 */
export type UseTimeoutProps<TArgs extends unknown[]> = {
	/**
	 * The function to invoke after `delay` milliseconds. Accepts any number of
	 * arguments whose types are preserved on the returned `start` and `startPromisified`
	 * functions.
	 */
	callback: (...args: TArgs) => void;

	/**
	 * Duration in milliseconds to wait before invoking `callback`. Passed directly
	 * to `setTimeout`. A value of `0` defers execution to the next event loop tick.
	 */
	delay: number;
};

/**
 * Return value of [useTimeout](https://react-tools.ndria.dev/hooks/api-dom/useTimeout).
 *
 * @template TArgs - The argument tuple type of the callback.
 */
export type UseTimeoutResult<TArgs extends unknown[]> = [
	/**
	 * Schedules `callback` to run after `delay` milliseconds, forwarding any provided
	 * arguments. Cancels any previously pending timeout before scheduling a new one,
	 * so calling this multiple times in quick succession only results in a single
	 * invocation.
	 */
	(...args: TArgs) => void,

	/**
	 * Cancels the currently pending timeout, if any. Has no effect if no timeout
	 * is active.
	 */
	() => void,

	/**
	 * Schedules `callback` exactly like the first tuple entry, but returns a `Promise`
	 * that resolves once `callback` has been invoked. Useful when downstream logic
	 * needs to await the timeout completion. Cancels any previously pending timeout
	 * before scheduling a new one.
	 */
	(...args: TArgs) => Promise<void>
];