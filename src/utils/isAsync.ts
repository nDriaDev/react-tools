import { IsAsyncProps } from "../models";

/**
 * **`isAsync`**: It detects if a function is asynchronous.
 * @see [📖 Documentation](https://react-tools.ndria.dev/utils/isAsync)
 * @template T - The argument tuple type of the function, when `fn` is callable.
 * @template E - The return or resolved value type.
 * @param {IsAsyncProps<T, E>["fn"]} fn - {@link IsAsyncProps}
 * @returns {boolean} result
 */
export const isAsync = <T extends unknown[], E = unknown>(fn: IsAsyncProps<T, E>["fn"]): boolean => {
	return (typeof fn === "function" && fn.constructor.name === "AsyncFunction") || (typeof fn === "object" && typeof (fn as PromiseLike<E>).then === "function");
}