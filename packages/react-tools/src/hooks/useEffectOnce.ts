import { EffectCallback, useEffect, useRef } from "react";

/**
 * **`useEffectOnce`**: Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_.
 * @param {EffectCallback} effect
 */
export const useEffectOnce = (effect: EffectCallback) => {
	const effectCalled = useRef(false);
	const cleanUpFn = useRef<ReturnType<EffectCallback>>();
	const rendered = useRef(false);
	useEffect(() => {
		if (!effectCalled.current) {
			cleanUpFn.current = effect();
			effectCalled.current = true;
			setTimeout(() => rendered.current = true, 1);
		}
		return () => {
			if (rendered.current) {
				cleanUpFn.current && cleanUpFn.current();
				effectCalled.current = false;
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}

/**
 *
 * INFO this implementation works but gives a rerender.

export const useEffectOnce = (effect: EffectCallback) => {
	const update = useRerender();
	const effectFn = useRef(effect);
	const cleanUpFn = useRef<ReturnType<EffectCallback>>();
	const effectCalled = useRef(false);
	const rendered = useRef(false);

	if (effectCalled.current) {
		rendered.current = true;
	}

	useEffect(() => {
		if (!effectCalled.current) {
			cleanUpFn.current = effectFn.current();
			effectCalled.current = true
			update();
		}
		return () => {
			if (rendered.current) {
				cleanUpFn.current && cleanUpFn.current();
				effectCalled.current = false
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}

 */
