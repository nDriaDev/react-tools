/**
 * Options that control the throttle behaviour of [useThrottle](https://react-tools.ndria.dev/hooks/api-dom/useThrottle).
 * Exactly one of `delay` or `waitFn` should be set.
 */
export type UseThrottleOptions = {
	/**
	 * Minimum number of milliseconds that must elapse between successive invocations
	 * of `fn`. After `fn` is called, further calls are dropped until the delay has
	 * expired. A value of `0` allows back-to-back calls on consecutive ticks.
	 * Mutually exclusive with `waitFn`.
	 */
	delay?: number;

	/**
	 * When `true`, throttling is based on the completion of `fn` rather than a fixed
	 * time interval. The next invocation is only allowed once the `Promise` returned
	 * by the previous call has settled. If `fn` returns `void` (i.e. is synchronous),
	 * the lock is released immediately after the call returns.
	 * Mutually exclusive with `delay`.
	 */
	waitFn?: boolean;
};

/**
 * Parameters accepted by [useThrottle](https://react-tools.ndria.dev/hooks/api-dom/useThrottle).
 *
 * @template T - The argument tuple type of the function to throttle. Inferred automatically from the `fn` argument.
 */
export type UseThrottleProps<T extends unknown[]> = {
	/**
	 * The function to throttle. Accepts any number of arguments and may return either
	 * `void` or a `Promise<void>`. The same argument types are preserved on the returned
	 * throttled function.
	 */
	fn: (...args: T) => void | Promise<void>;

	/**
	 * Configuration that controls the throttle strategy. Exactly one of `delay` or
	 * `waitFn` must be provided — supplying neither will cause the throttled function
	 * to throw at call time.
	 */
	opts: UseThrottleOptions;
};

/**
 * Return value of {@link https://ndriadev.github.io/react-tools/hooks/api-dom/useThrottle}.
 *
 * @template T - The argument tuple type of the throttled function.
 */
export type UseThrottleResult<T extends unknown[]> = [
	/**
	 * The throttled version of `fn`. Calls are forwarded to `fn` only when the
	 * throttle condition is not active; otherwise they are silently dropped.
	 * Preserves the original argument signature of `fn`.
	 */
	(...args: T) => void,

	/**
	 * Resets the throttle state immediately, allowing the next call to `fn` to pass
	 * through regardless of whether the delay has elapsed or the previous `Promise`
	 * has settled.
	 */
	() => void,

	/**
	 * Bypasses throttling entirely and invokes `fn` immediately with the provided
	 * arguments, also resetting the throttle state so the next throttled call is
	 * treated as a fresh invocation.
	 */
	(...args: T) => void
];
