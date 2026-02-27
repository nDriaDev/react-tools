/**
 * Parameters accepted by [useSyncExternalStore](https://react-tools.ndria.dev/hooks/state/useSyncExternalStore).
 *
 * @template Snapshot - The type of the snapshot value returned by `getSnapshot`.
 */
export type UseSyncExternalStoreProps<Snapshot> = {
	/**
	 * A function that subscribes to the external store. Receives an `onStoreChange`
	 * callback that must be called whenever the store changes. Must return a cleanup
	 * function that unsubscribes when called. React may call this multiple times
	 * with different callbacks — always use the latest one.
	 */
	subscribe: (onStoreChange: () => void) => () => void;

	/**
	 * A function that returns the current snapshot of the store. Must be a pure
	 * function that returns the same value when the store has not changed, allowing
	 * React to bail out of re-renders via referential equality. Called on every
	 * render and after every store change notification.
	 */
	getSnapshot: () => Snapshot;
};

/**
 * Return value of [useSyncExternalStore](https://react-tools.ndria.dev/hooks/state/useSyncExternalStore).
 *
 * The current snapshot of the external store, reactive — the component re-renders
 * whenever `subscribe` notifies React of a change and `getSnapshot` returns a
 * different value.
 *
 * @template Snapshot - The type of the snapshot value.
 */
export type UseSyncExternalStoreResult<Snapshot> = Snapshot;