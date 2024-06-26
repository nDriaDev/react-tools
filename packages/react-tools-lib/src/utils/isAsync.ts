/**
 * **`isAsync`**: It detects if a function is asynchronous. [See demo](https://react-tools.ndria.dev/#/utils/isAsync)
 * @param {(...args: unknown[])=> unknown | Promise<unknown>} fn
 * @returns {boolean} result
 */
export const isAsync = <T extends unknown[], E = unknown>(fn: E | Promise<E> | ((...args: T)=> E | Promise<E>)): boolean => {
	return (typeof fn === "function" && fn.constructor.name === "AsyncFunction") || (typeof fn === "object" && typeof (fn as PromiseLike<E>).then === "function");
}