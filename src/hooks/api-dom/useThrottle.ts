import { useCallback, useRef } from "react"
import { isAsync } from "../../utils";
import { UseThrottleProps, UseThrottleResult } from "../../models";

/**
 * **`useThrottle`**: Hook to limit function execution frequency.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useThrottle)
 * @template T - The argument tuple type of the function to throttle. Inferred automatically from the `fn` argument.
 * @param {UseThrottleProps["fn"]} fn - {@link UseThrottleProps}
 * @param {UseThrottleProps["opts"]} opts - {@link UseThrottleProps}
 * @returns {UseThrottleResult} result {@link UseThrottleResult}
 */
export const useThrottle = <T extends unknown[]>(fn: UseThrottleProps<T>["fn"] , opts: UseThrottleProps<T>["opts"]): UseThrottleResult<T> => {
	const optsRef = useRef(opts);
	const pending = useRef(false);
	const idRef = useRef<number>();

	const fnThrottled = useCallback<typeof fn>((...args: T) => {
		if (pending.current) {
			return;
		}
		pending.current = true;
		if (optsRef.current.delay !== undefined) {
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
