import { useCallback, useRef } from "react"

const debounce = (fn: () => void, delay: number, focusedWindow=false) => {
	if (!focusedWindow || typeof requestAnimationFrame === "undefined") {
		return {
			id: setTimeout(fn, delay)
		};
	}
	const handle: {id: number | NodeJS.Timeout} = {id:0};
	const startTime = new Date().getTime();
	const loop = () => {
		const current = new Date().getTime();
		console.log(((current-startTime)/1000).toFixed(0))
		current - startTime >= delay
			? fn()
			: (handle.id = requestAnimationFrame(loop));
	}
	handle.id = requestAnimationFrame(loop);
	return handle;
}
const cancelDebounce = (handle: {id: number | NodeJS.Timeout}, focusedWindow=false) => {
	if (!focusedWindow || typeof cancelAnimationFrame === "undefined") {
		return clearTimeout(handle.id);
	}
	cancelAnimationFrame(handle.id as number);
}

/**
 * **`useDebounce`**: Hook to delay a function execution with possibility to cancel execution and to invoke them immediately.
 * @param {T extends (...args: unknown[]) => void} fn - The function to debounce.
 * @param {Object} opts - options for debounce behaviors.
 * @param {number} opts.delay - time in milliseconds to delay function execution.
 * @param {boolean} [opts.focusedWindow] - if true, the function is executed after delay but only if the window is focused. __N.B._: works only in browser context.
 * @returns {[(...args: unknown[]) => void, ()=>void, (...args: unknown[]) => void]} - array with debounced function, cancel function to abor debounced function and and immediate function to execute function immediately.
 */
export const useDebounce = <T extends unknown[]>(fn: (...args: T)=>void, opts: { delay: number, focusedWindow?: boolean }): [(...args: T) => void, () => void, (...args: T) => void] => {
	const idRef = useRef<{ id: number | NodeJS.Timeout }>({id:0});
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