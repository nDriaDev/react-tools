import { useLayoutEffect } from "react";
import { DependencyListTyped } from "../../models";

/**
 * **`useLayoutEffectAbortable`**: custom useLayoutEffect with a unified cancellation mechanism to ensure complete cleanup and to prevent the warning that appears on old React version _"Can't perform a React state update on an unmounted component"_. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useEffectAbortable)
 * @param {(signal: AbortSignal)=> void | Promise<void> | (() => void) | (Promise<() => void>)} cb - Imperative function with abort signal parameter that can return a cleanup function.
 * @param {DependencyListTyped} deps - typed dependency list.
 * @returns {void}
 */
export const useLayoutEffectAbortable = <T = unknown>(cb: (signal: AbortSignal) => void | Promise<void> | (() => void) | (Promise<() => void>), deps: DependencyListTyped<T>) => {
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
	}, deps)
}