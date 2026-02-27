import { useCallback, useRef } from "react"
import { UseDebounceFunction, UseDebounceOpts, UseDebounceResult } from "../../models";

const debounce = (fn: () => void, delay: number, focusedWindow=false) => {
	if (!focusedWindow || typeof requestAnimationFrame === "undefined") {
		return {
			id: setTimeout(fn, delay) as unknown as number
		};
	}
	const handle: {id: number} = {id:0};
	const startTime = new Date().getTime();
	const loop = () => {
		const current = new Date().getTime();
		current - startTime >= delay
			? fn()
			: (handle.id = requestAnimationFrame(loop));
	}
	handle.id = requestAnimationFrame(loop);
	return handle;
}
const cancelDebounce = (handle: {id: number}, focusedWindow=false) => {
	if (!focusedWindow || typeof cancelAnimationFrame === "undefined") {
		return clearTimeout(handle.id);
	}
	cancelAnimationFrame(handle.id as number);
}

/**
 * **`useDebounce`**: Hook to delay a function execution with possibility to cancel execution and to invoke them immediately.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useDebounce)
 * @template T Type of the parameters function.
 * @param {UseDebounceFunction} fn - {@link UseDebounceFunction}
 * @param {UseDebounceOpts} opts - {@link UseDebounceOpts}
 * @returns {UseDebounceResult} result {@link UseDebounceResult}
 */
export const useDebounce = <T extends unknown[]>(fn: UseDebounceFunction<T>, opts: UseDebounceOpts): UseDebounceResult<T> => {
	const idRef = useRef<{ id: number }>({id:0});
	const optsRef = useRef(opts);

	const fnDebounced = useCallback((...args: T) => {
		cancelDebounce(idRef.current, optsRef.current.focusedWindow);
		idRef.current = debounce(()=>fn(...args), optsRef.current.delay, optsRef.current.focusedWindow);
	}, [fn]);

	const cancel = useCallback(() => { cancelDebounce(idRef.current, optsRef.current.focusedWindow) }, []);

	const immediate = useCallback((...args: T) => {
		cancelDebounce(idRef.current, optsRef.current.focusedWindow);
		void fn(...args);
	}, [fn])

	return [
		fnDebounced,
		cancel,
		immediate
	]
}