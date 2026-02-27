import { useCallback, useRef } from "react"
import { UseRafProps, UseRafResult } from "../../models";

/**
 * **`useRaf`**: Hook to execute a callback function with _requestAnimationFrame_ to optimize performance. Refer to (requestAnimationFrame)[https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame].
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useRaf)
 * @template T Type of arguments passed to the requestAnimationFrame callback function.
 * @param {UseRafProps["cb"]} cb - {@link UseRafProps}
 * @returns {UseRafResult} result {@link UseRafResult}
 */
export const useRaf = <T extends unknown[]>(cb: UseRafProps<T>["cb"]): UseRafResult<T> => {
	const idRequest = useRef<number>();

	return [
		useCallback((...args: T) => {
			const repeat = () => {
				idRequest.current = requestAnimationFrame((timer) => cb(timer, repeat, ...args));
			}
			idRequest.current = requestAnimationFrame((timer) => cb(timer, repeat, ...args));
		}, [cb]),
		useCallback(() => {
			!!idRequest.current && cancelAnimationFrame(idRequest.current)
		}, [])
	]
}