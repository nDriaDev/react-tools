import { DependencyListTyped } from "./utilityTypes.model";

/**
 * Parameters accepted by [useEffectAbortable](https://react-tools.ndria.dev/hooks/lifecycle/useEffectAbortable).
 *
 * @template T - The tuple type of the dependency list. Inferred automatically from the `deps` argument, providing stricter typing than the standard `DependencyList`.
 */
export type UseEffectAbortableProps<T = unknown> = {
	/**
	 * The effect callback, receiving an {@link AbortSignal} that is automatically
	 * aborted when the effect is cleaned up (i.e. when `deps` change or the
	 * component unmounts). Supports four return shapes:
	 * - **`void`** — No cleanup needed; the signal abortion is the only teardown.
	 * - **`Promise<void>`** — An async effect with no additional cleanup.
	 * - **`() => void`** — A synchronous cleanup function, called before the next
	 *   effect run or on unmount, in addition to aborting the signal.
	 * - **`Promise<() => void>`** — An async effect that resolves with a cleanup
	 *   function, called before the next effect run or on unmount.
	 */
	cb: (signal: AbortSignal) => void | Promise<void> | (() => void) | Promise<() => void>;
	/**
	 * A strictly-typed dependency array (same semantics as `useEffect`). The effect
	 * re-runs and the previous {@link AbortSignal} is aborted whenever any dependency
	 * changes. Using {@link DependencyListTyped} instead of the standard
	 * `DependencyList` provides compile-time checking of dependency types.
	 */
	deps: DependencyListTyped<T>;
};