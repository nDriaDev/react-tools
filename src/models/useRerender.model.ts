import { DispatchWithoutAction } from "react";

/**
 * Return value of [useRerender](https://react-tools.ndria.dev/hooks/lifecycle/useRerender), which varies based on the `withValue` argument.
 *
 * | `withValue`           | Return type                   | Description                                                      |
 * | --------------------- | ----------------------------- | ---------------------------------------------------------------- |
 * | `false` / `undefined` | `DispatchWithoutAction`       | A bare dispatch function with no state value exposed.            |
 * | `true`                | `[T, DispatchWithoutAction]`  | A tuple of the render counter value and the dispatch function.   |
 *
 * @template T - The type of the internal counter value. Only relevant when `withValue` is `true` — ignored in the `DispatchWithoutAction` overload.
 */
export type UseRerenderResult<T> =
	| DispatchWithoutAction
	| [
		/**
		 * The current render counter value. Incremented each time the dispatch
		 * function is called, allowing consumers to track how many forced re-renders
		 * have occurred or to use the value as a reactive dependency.
		 */
		T,

		/**
		 * A stable dispatch function that increments the internal counter and
		 * triggers a re-render of the component when called.
		 */
		DispatchWithoutAction
	];