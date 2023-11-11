/**
 * **`isAsync`**: It detects if a function is asynchronous.
 * @returns {boolean} result
 */
export const isAsync = <T extends unknown[], E = unknown>(fn: (...args: T)=> E | Promise<E>): boolean => {
	return fn.constructor.name === "AsyncFunction" || (typeof fn === "function" && typeof fn === "object" && typeof (fn as PromiseLike<E>).then === "function");
}