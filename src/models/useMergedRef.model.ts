import { Ref } from "react";

/**
 * Parameters accepted by [useMergedRef](https://react-tools.ndria.dev/hooks/performance/useMergedRef).
 *
 * @template T - The element or value type that all refs point to.
 */
export type UseMergedRefProps<T> = {
	/**
	 * A variadic list of React refs to merge. Each entry may be a
	 * `RefCallback<T>`, a `MutableRefObject<T>`, or `null`. When the merged ref
	 * is set, all provided refs are updated simultaneously with the same value,
	 * allowing multiple consumers to observe the same DOM element or imperative
	 * handle.
	 */
	refs: Ref<T>[];
};

/**
 * Return value of [useMergedRef](https://react-tools.ndria.dev/hooks/performance/useMergedRef).
 *
 * A single stable {@link Ref} that, when attached to a JSX element, forwards
 * the resolved value to every ref passed as input. Compatible with both
 * `ref` props on DOM elements and `forwardRef` patterns.
 *
 * @template T - The element or value type that the merged ref points to.
 */
export type UseMergedRefResult<T> = Ref<T>;