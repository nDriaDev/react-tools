import { useCallback, useRef } from "react"

/**
 * **`useRaf`**: Hook to execute a callback function with _requestAnimationFrame_ to optimize performance. Refer to (requestAnimationFrame)[https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame].
 * @param {(timer:number, ...args: T) => void} cb -  callback to execute prior to the next repaint.
 * @returns {[(...args: T)=>void, ()=>void]} results - array with __start__ function to invoke _requestAnimationFrame_ and __cancel__ function to invoke _cancelAnimationFrame_.
 */
export const useRaf = <T extends unknown[]>(cb: (timer:number, ...args: T) => void): [(...args: T)=>void, ()=>void] => {
	const idRequest = useRef<number>();

	return [
		useCallback((...args: T) => {
			idRequest.current = requestAnimationFrame((timer) => cb(timer, ...args));
		}, [cb]),
		useCallback(() => {
			!!idRequest.current && cancelAnimationFrame(idRequest.current)
		}, [])
	]
}