import { useSyncExternalStore as legacy, useCallback, useEffect, useState } from 'react';

/**
 * __`useSyncExternalStore`__: _useSyncExternalStore_ hook polyfilled for React versions below 18 ___only client side___. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useSyncExternalStore)
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

export const useSyncExternalStore = legacy === undefined ? useSyncExternalStorePolyfill : legacy;
