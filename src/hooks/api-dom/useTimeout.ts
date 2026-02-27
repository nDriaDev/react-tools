import { useCallback, useEffect, useRef } from "react"
import { UseTimeoutProps, UseTimeoutResult } from "../../models/useTimeout.model";

/**
 * **`useTimeout`**: Hook to handle setTimeout timer function with the possibility to clear and promisify execution.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useTimeout)
 * @template TArgs - The argument tuple type of the callback. Inferred automatically from the `callback` argument.
 * @param {UseTimeoutProps<T>["callback"]} callback - {@link UseTimeoutProps}
 * @param {UseTimeoutProps<T>["delay"]} delay - {@link UseTimeoutProps}
 * @returns {UseAudioResult} result {@link UseAudioResult}
 */
export const useTimeout = <TArgs extends unknown[]>(callback: UseTimeoutProps<TArgs>["callback"], delay: UseTimeoutProps<TArgs>["delay"]): UseTimeoutResult<TArgs> => {
	const idTimeout = useRef<number>();

	const apply = useCallback((...args: TArgs): void => {
		clearTimeout(idTimeout.current);
		idTimeout.current = setTimeout(() => callback(...args), delay) as unknown as number;
	}, [callback, delay]);

	const applyPromisify = useCallback((...args: TArgs): Promise<void> => {
		clearTimeout(idTimeout.current);
		return new Promise<void>(res => {
			idTimeout.current = setTimeout(() => {
				res(callback(...args));
			}, delay) as unknown as number;
		})
	}, [callback, delay]);

	const clear = useCallback(() => {
		clearTimeout(idTimeout.current);
	}, []);

	useEffect(() => () => clearTimeout(idTimeout.current), []);

	return [
		apply,
		clear,
		applyPromisify
	];
}