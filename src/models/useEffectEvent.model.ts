/**
 * Parameters accepted by [useEffectEvent](https://react-tools.ndria.dev/hooks/lifecycle/useEffectEvent).
 *
 * @template T - The type of the event handler function. Must be callable with any arguments and return any value.
 */
export type UseEffectEventProps<T extends (...args: any[]) => any> = {
	/**
	 * The event handler function to wrap. The returned stable wrapper always
	 * delegates to the latest version of `fn` captured at render time, so it
	 * is safe to read props, state, or context without being listed as an
	 * effect dependency.
	 */
	fn: T;
};

/**
 * Return value of [useEffectEvent](https://react-tools.ndria.dev/hooks/lifecycle/useEffectEvent).
 *
 * A stable function with the same signature as `fn`. Its identity never
 * changes between renders, making it safe to pass as a non-reactive
 * dependency to effects. Internally it always delegates to the latest
 * version of `fn`, so the handler always reads fresh props and state
 * without triggering effect re-runs.
 *
 * @template T - The type of the original handler function.
 */
export type UseEffectEventResult<T extends (...args: any[]) => any> = T;
