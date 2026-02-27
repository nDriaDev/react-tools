import { useLayoutEffect } from "react";
import { UseEffectAbortableProps } from "../../models";

/**
 * **`useLayoutEffectAbortable`**: custom useLayoutEffect with a unified cancellation mechanism to ensure complete cleanup and to prevent the warning that appears on old React version _"Can't perform a React state update on an unmounted component"_.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/lifecycle/useLayoutEffectAbortable)
 * @template T - The tuple type of the dependency list. Inferred automatically from the `deps` argument, providing stricter typing than the standard `DependencyList`.
 * @param {UseEffectAbortableProps} cb - {@link UseEffectAbortableProps}
 * @param {UseEffectAbortableProps} deps - {@link UseEffectAbortableProps}
 * @returns {void} result
 */
export const useLayoutEffectAbortable = <T = unknown>(cb: UseEffectAbortableProps<T>["cb"], deps: UseEffectAbortableProps<T>["deps"]): void => {
	useLayoutEffect(() => {
		const controller = new AbortController();
		const cleanUpFunc = cb(controller.signal);

		return () => {
			controller.abort();
			if (cleanUpFunc instanceof Promise) {
				cleanUpFunc.then(clean => {
					if (typeof clean === "function") {
						clean();
					}
				})
			} else if (typeof cleanUpFunc === "function") {
				cleanUpFunc();
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps)
}