import { useCallback } from "react"

/**
 * **`useLock`**: Hook to use [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API).
 * @param {string} [name] - an identifier for the lock.
 * @param {LockGrantedCallback | LockOptions} [options] - an object describing characteristics of the lock.
 * @param {LockGrantedCallback} [callback] - method called when the lock is granted.
 * @returns {[<T>(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>, () => Promise<LockManagerSnapshot>]} result
 * Array with two element:
 * - first element: __acquire__ function that requests a Lock object with parameters specified in hook invocation or passed to this function. The requested Lock is passed to the callback specified in hook or passed to this function. It returns a Promise that resolves (or rejects) with the result of the callback after the lock is released, or rejects if the request is aborted.
 * - second element: __query__ function that returns a Promise that resolves with an object containing information about held and pending locks.
 */
export const useLock = <T>(name?: string, cb?: LockGrantedCallback, opts?: LockOptions): [(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>, () => Promise<LockManagerSnapshot>] => {
	const acquire = useCallback((currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions): Promise<T> => {
		const n = currName ?? name;
		const callback = currCb ?? cb;
		const options = currOpts ?? opts;
		if (!n || !callback) {
			throw Error("useLock acquire function parameters missed.");
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