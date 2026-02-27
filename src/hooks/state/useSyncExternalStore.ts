import * as React from 'react';
import { UseSyncExternalStoreProps, UseSyncExternalStoreResult } from '../../models';


/**
 * __`useSyncExternalStore`__: _useSyncExternalStore_ hook polyfilled for React versions below 18 ___only client side___.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/state/useSyncExternalStore)
 * @template Snapshot - The type of the snapshot value returned by `getSnapshot`.
 * @param {UseSyncExternalStoreProps<Snapshot>["subscribe"]} subscribe - {@link UseSyncExternalStoreProps}
 * @param {UseSyncExternalStoreProps<Snapshot>["getSnapshot"]} getSnapshot - {@link UseSyncExternalStoreProps}
 * @returns {UseSyncExternalStoreResult<Snapshot>} result - {@link UseSyncExternalStoreResult}
 */
function useSyncExternalStorePolyfill<Snapshot>(subscribe: UseSyncExternalStoreProps<Snapshot>["subscribe"], getSnapshot: UseSyncExternalStoreProps<Snapshot>["getSnapshot"]): UseSyncExternalStoreResult<Snapshot> {
	const [, forceRender] = React.useReducer(c => c + 1, 0)
	const snapshotRef = React.useRef<Snapshot>(getSnapshot())

	const currentSnapshot = getSnapshot()
	if (!Object.is(snapshotRef.current, currentSnapshot)) {
		snapshotRef.current = currentSnapshot
	}

	React.useEffect(() => {
		const checkForUpdates = () => {
			const next = getSnapshot()
			if (!Object.is(snapshotRef.current, next)) {
				snapshotRef.current = next
				forceRender()
			}
		}
		checkForUpdates()
		return subscribe(checkForUpdates)
	}, [subscribe, getSnapshot])

	return snapshotRef.current
}

export const useSyncExternalStore = ((React as any).useSyncExternalStore ?? useSyncExternalStorePolyfill) as typeof useSyncExternalStorePolyfill;
