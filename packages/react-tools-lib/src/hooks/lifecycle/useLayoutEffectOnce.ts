import { EffectCallback, useLayoutEffect, useRef } from "react";
import { useRerender } from "./useRerender"

/**
 * **`useLayoutEffectOnce`**: Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useLayoutEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useLayoutEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useLayoutEffectOnce)
 * @param {EffectCallback} effect
 */
export const useLayoutEffectOnce = (effect: EffectCallback) => {
	const update = useRerender();
	const effectFn = useRef(effect);
	const cleanUpFn = useRef<ReturnType<EffectCallback>>();
	const effectCalled = useRef(false);
	const rendered = useRef(false);

	if (effectCalled.current) {
		rendered.current = true;
	}

	useLayoutEffect(() => {
		if (!effectCalled.current) {
			cleanUpFn.current = effectFn.current();
			effectCalled.current = true
			update();
		}
		return () => {
			if (rendered.current) {
				cleanUpFn.current && cleanUpFn.current();
				effectCalled.current = false;
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}