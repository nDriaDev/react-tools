import { useCallback, useEffect, useState } from 'react';

let legacy;
(async () => {
	try {
		const react = await import('react');
		legacy = react?.useSyncExternalStore;
	} catch (error) {
		legacy = undefined;
	}
})()

/**
 * __`useSyncExternalStore`__: _useSyncExternalStore_ hook polyfilled for React versions below 18 ___only client side___. [See demo](https://react-tools.ndria.dev/#/hooks/state/useSyncExternalStore)
 * @param {(onStoreChange: () => void) => ()=>void} subscribe - function to register a callback that is called whenever the store changes.
 * @param {()=>Snapshot} getSnapshot - function that returns the current value of the store.
 * @returns {Snapshot} result - state
 */
function useSyncExternalStorePolyfill<Snapshot>(subscribe: (onStoreChange: () => void) => () => void, getSnapshot: () => Snapshot): Snapshot {
	const [state, setState] = useState<Snapshot>(getSnapshot());
	const update = useCallback(() => { setState(getSnapshot()) }, [getSnapshot]);

	useEffect(() => {
		update();
		return subscribe(update);
	}, [update, subscribe]);

	return state;
}

export const useSyncExternalStore = legacy ?? useSyncExternalStorePolyfill;
