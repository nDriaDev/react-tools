/**
 * Props accepted by [useWebWorkerFn](https://react-tools.ndria.dev/hooks/api-dom/useWebWorkerFn).
 *
 * @template T - The type of the function to execute inside the Web Worker. Must be a callable accepting any number of arguments and returning any value.
 */
export interface UseWebWorkerFnProps<T extends (...args: unknown[]) => unknown> {
	/**
	 * The function to run inside a Web Worker. It is serialised via
	 * `.toString()` and reconstructed in an isolated worker context, so it
	 * must be a **pure, self-contained function** — it cannot reference
	 * variables, imports, or closures from the outer scope. Any dependencies
	 * must either be passed as arguments or loaded via `deps`.
	 */
	fn: T;

	/**
	 * An optional array of external script URLs imported into the worker
	 * context via `importScripts()` before `fn` is invoked. Use this to
	 * provide third-party libraries, polyfills, or shared utilities that
	 * `fn` depends on at runtime.
	 */
	deps?: string[];
}

/**
 * Return value of [useWebWorkerFn](https://react-tools.ndria.dev/hooks/api-dom/useWebWorkerFn).
 *
 * An async wrapper function with the same parameter signature as `fn`. Calling
 * it serialises the arguments, transfers them to the Web Worker, executes `fn`
 * in the isolated worker context, and resolves the returned `Promise` with the
 * result once the worker replies. Rejects if the worker throws or is terminated
 * before completing.
 *
 * @template T - The type of the original function, used to preserve its
 *   parameter and return types.
 */
export interface UseWebWorkerFnResult<T extends (...args: unknown[]) => unknown> {
	/**
	 * @param args - The arguments forwarded to `fn` inside the worker. Must
	 *   be serialisable via the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
	 * @returns A `Promise` that resolves with the return value of `fn`, or
	 *   rejects if the worker encounters an error.
	 */
	(...args: Parameters<T>): Promise<ReturnType<T>>;
}