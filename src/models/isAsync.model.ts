/**
 * Parameters accepted by [isAsync](https://react-tools.ndria.dev/utils/isAsync).
 *
 * @template T - The argument tuple type of the function, when `fn` is callable.
 * @template E - The return or resolved value type.
 */
export type IsAsyncProps<T extends unknown[], E = unknown> = {
	/**
	 * The value to inspect. Accepts:
	 * - A plain value of type `E` — considered synchronous.
	 * - A `Promise<E>` — considered asynchronous.
	 * - A function `(...args: T) => E | Promise<E>` — considered asynchronous
	 *   if the function is declared `async` or its `toString()` representation
	 *   contains the `async` keyword.
	 */
	fn: E | Promise<E> | ((...args: T) => E | Promise<E>);
};