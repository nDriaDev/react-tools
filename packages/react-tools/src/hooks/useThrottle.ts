import { useCallback, useRef } from "react"
import { isAsync } from "../utils";

/**
 * **`useThrottle`**: Hook to limit function execution frequency.
 * @param {T extends (...args: unknown[]) => void} fn - The function to handle.
 * @param {Object} opts - options for throttle behaviors.
 * @param {number} [opts.delay] - time in milliseconds to limit next function execution.
 * @param {boolean} [opts.waitFn] - if true, next function execution taking place when current has finished.
 * @returns {[(...args: unknown[]) => void, ()=>void, (...args: unknown[]) => void]} - array with throttled function, cancel function to allow other execution and immediate function to execute function immediately.
 */
export const useThrottle = <T extends unknown[]>(fn: (...args: T) => void | Promise<void> , opts: { delay?: number, waitFn?: boolean }): [(...args: T) => void, () => void, (...args: T) => void] => {
	const optsRef = useRef(opts);
	const pending = useRef(false);
	const idRef = useRef<number>();

	const fnThrottled = useCallback<typeof fn>((...args: T) => {
		if (pending.current) {
			return;
		}
		pending.current = true;
		if (optsRef.current.delay) {
			fn(...args);
			idRef.current = setTimeout(() => pending.current = false, optsRef.current.delay) as unknown as number;
		} else if (optsRef.current.waitFn) {
			const current = fn(...args);
			if (isAsync(current)) {
				(current as Promise<void>).finally(() => pending.current = false);
			} else {
				pending.current = false;
			}
		} else {
			throw Error("useThrottled: options aren't setted correctly.");
		}
	}, [fn]);

	const cancel = useCallback(() => {
		pending.current = false;
	}, []);

	const immediate = useCallback((...args: T) => {
		pending.current = false;
		fn(...args);
	}, [fn])

	return [
		fnThrottled,
		cancel,
		immediate
	]
}
