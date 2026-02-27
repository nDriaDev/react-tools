import { useCallback } from "react"
import { UseLockResult } from "../../models";

/**
 * **`useLock`**: Hook to use [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useLock)
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useAudio)
 * @template T Return type of the lock callback.
 * @param {string} [name]
 * @param {LockOptions} [opts]
 * @returns {UseLockResult} result {@link UseLockResult}
 */
export const useLock = <T>(name?: string, cb?: LockGrantedCallback<T>, opts?: LockOptions): UseLockResult<T> => {
	const acquire = useCallback((currName?: string, currCb?: LockGrantedCallback<T>, currOpts?: LockOptions): Promise<T> => {
		const n = currName ?? name;
		const callback = currCb ?? cb;
		const options = currOpts ?? opts;
		if (!n || !callback) {
			return Promise.resolve() as Promise<T>;
		}
		if (options) {
			return navigator.locks.request(n, options, callback) as Promise<T>
		} else {
			return navigator.locks.request(n, callback) as Promise<T>
		}
	}, [name, cb, opts]);

	const query = useCallback<LockManager["query"]>(() => navigator.locks.query(), []);

	return [acquire, query];
}