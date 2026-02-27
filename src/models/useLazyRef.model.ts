/**
 * Parameters accepted by [useLazyRef](https://react-tools.ndria.dev/hooks/performance/useLazyRef).
 *
 * @template T - The type of the value produced by the initializer and stored in the ref. Inferred automatically from the return type of `initializer`.
 */
export type UseLazyRefProps<T> = {
	/**
	 * A factory function invoked exactly once on the first render to produce the
	 * initial value stored in the ref. Unlike passing a value directly to
	 * `useRef`, this avoids re-creating expensive objects on every render —
	 * the initializer is only called when the ref is first created.
	 */
	initializer: () => T;
};

/**
 * Return value of [useLazyRef](https://react-tools.ndria.dev/hooks/performance/useLazyRef).
 *
 * A mutable ref object whose `.current` property is initialised lazily on the
 * first render via `initializer` and persists for the lifetime of the component.
 * Mutating `.current` does not trigger a re-render.
 *
 * @template T - The type of the value stored in the ref.
 */
export type UseLazyRefResult<T> = React.MutableRefObject<T>;
