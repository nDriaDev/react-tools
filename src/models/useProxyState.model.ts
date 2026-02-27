/**
 * Parameters accepted by [useProxyState](https://react-tools.ndria.dev/hooks/state/useProxyState).
 *
 * @template T - The state object type. Must be a plain object (record).
 */
export type UseProxyStateProps<T extends Record<string, any>> = {
	/**
	 * The initial state object. Accepts either a direct value or a lazy
	 * initializer function invoked only on the first render.
	 */
	initialState: T | (() => T);

	/**
	 * When `true`, nested objects within the state are also wrapped in a `Proxy`,
	 * making deep mutations reactive. When `false` *(default)*, only top-level
	 * property assignments trigger a re-render.
	 */
	proxyInDepth?: boolean;
};

/**
 * Return value of [useProxyState](https://react-tools.ndria.dev/hooks/state/useProxyState).
 *
 * A `Proxy`-wrapped version of the state object `T`. Assigning any property
 * directly on the returned object (e.g. `state.count = 5`) triggers a re-render
 * automatically — no setter function is needed.
 *
 * @template T - The state object type.
 */
export type UseProxyStateResult<T extends Record<string, any>> = T;