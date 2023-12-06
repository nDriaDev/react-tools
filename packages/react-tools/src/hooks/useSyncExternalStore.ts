import { useSyncExternalStore as legacy, useCallback, useEffect, useRef, useState } from 'react';

/**
 * __`useSyncExternalStore`__: _useSyncExternalStore_ hook polyfilled for React versions below 18 ___only client side___.
 * @param {(onStoreChange: () => void) => ()=>void} subscribe - function to register a callback that is called whenever the store changes.
 * @param {()=>Snapshot} getSnapshot - function that returns the current value of the store.
 * @returns {Snapshot} result - state
 */
function useSyncExternalStorePolyfill<Snapshot>(subscribe: (onStoreChange: () => void) => () => void, getSnapshot: () => Snapshot): Snapshot {
	const [state, setState] = useState<Snapshot>(getSnapshot());
	const getSnapshotRef = useRef(getSnapshot);
	const update = useCallback(() => { setState(getSnapshotRef.current()) }, []);

	useEffect(() => {
		update();
		return subscribe(update);
	}, [update, subscribe]);

	return state;
}

export const useSyncExternalStore = legacy === undefined ? useSyncExternalStorePolyfill : legacy;
