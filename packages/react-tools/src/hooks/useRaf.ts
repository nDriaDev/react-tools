import { useCallback, useRef } from "react"

/**
 * **`useRaf`**: Hook to execute a callback function with _requestAnimationFrame_ to optimize performance. Refer to (requestAnimationFrame)[https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame].
 * @param {(timer:number, ()=>void, ...args: T) => void} cb -  callback to execute prior to the next repaint. In addition to the classic timeStamp parameter, which indicates the end time of rendering of the previous frame, the second parameter is a function which, if invoked, re-executes the requestAnimationFrame with the callback itself, and finally various parameters can be added, passed with the invocation function returned by the hook.
 * @returns {[(...args: T)=>void, ()=>void]} results - array with __start__ function to invoke _requestAnimationFrame_ and __cancel__ function to invoke _cancelAnimationFrame_.
 */
export const useRaf = <T extends unknown[]>(cb: (timer: number, repeat: ()=>void, ...args: T) => void): [(...args: T)=>void, ()=>void] => {
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