
/**
 * Result tuple returned by [useLock](https://react-tools.ndria.dev/hooks/api-dom/useLock).
 *
 * | Index | Type | Description |
 * |-------|------|-------------|
 * | `[0]` | `(currName?, currCb?, currOpts?) => Promise<T>` | `acquire` — requests the named lock and invokes the callback. Per-call arguments override the hook-level defaults. |
 * | `[1]` | `() => Promise<LockManagerSnapshot>` | `query` — returns the current state of all held and pending locks via `navigator.locks.query()`. |
 *
 * @template T Return type of the lock callback.
 */
export type UseLockResult<T> = [
	/** `acquire` — requests the named lock and invokes the callback. Per-call arguments override the hook-level defaults. */
	(currName?: string, currCb?: LockGrantedCallback<T>, currOpts?: LockOptions) => Promise<T>,
	/** `query` — returns the current state of all held and pending locks via `navigator.locks.query()`. */
	() => Promise<LockManagerSnapshot>
];