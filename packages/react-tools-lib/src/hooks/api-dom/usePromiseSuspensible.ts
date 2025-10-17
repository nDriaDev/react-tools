import { DependencyList, useReducer, useRef } from "react";
import { useEffectOnce } from "../lifecycle";
import { isDeepEqual } from "../../utils";

const promiseCache: Map<string,{ deps: DependencyList, promise: Promise<void>, error?: unknown, response?: unknown, cache: "unmount" | number | null, errorTimeout?: number, identifier: string | null }> = new Map();

/**
 * **`usePromiseSuspensible`**: Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. This hook can be used in conditional blocks. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/usePromiseSuspensible)
 * @param {()=>Promise<T>} promise - Function that returns a promise to suspense.
 * @param {DependencyList} deps - DependencyList for promise to suspense.
 * @param {{ clearCacheOnUnmount?: "unmount"|number, cleanOnError?: boolean }} [options] - optional options.
 * @param {"unmount"|number} [options.cache=undefined] - value can be "unmount", to clean promise cached at component unmounting, or it can be the duration in __seconds__ of cached promise.
 * @param {boolean} [options.cleanOnError=undefined] - if true, when there is an error, remove promise from cache with a delay of 20 millisecond (due to multiple renders of react strict mode).
 * @param {boolean} [options.invalidateManually=undefined] - if true, returns resolved promise value and a function to invalidate and revaluate promise.
 * @param {string} [options.identifier=undefined] - a string to identify _promise_. If it isn't present, a serialization of _promise_ will be used.
 * @returns {Awaited<ReturnType<T>> | [Awaited<ReturnType<T>>, ()=>void]} result - resolve promise value.
 */
function usePromiseSuspensible<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: undefined }): Awaited<ReturnType<typeof promise>>;
function usePromiseSuspensible<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: false }): Awaited<ReturnType<typeof promise>>;
function usePromiseSuspensible<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: true }): [Awaited<ReturnType<typeof promise>>, ()=>void];
function usePromiseSuspensible<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: boolean } = {}): Awaited<ReturnType<typeof promise>> | [Awaited<ReturnType<typeof promise>>, () => void] {
	let identifier = options.identifier ?? String.raw`${promise.toString()}`;
	const [, reRender] = useReducer(t => t + 0.00000000001, 0);
	const invalidate = useRef(() => {
		promiseCache.delete(identifier) && reRender();
	});

	useEffectOnce(() => () => {
		if (options.cache === "unmount") {
			promiseCache.delete(identifier);
		} else {
			const value = promiseCache.get(identifier);
			let interval = setInterval(() => {
				if (!value || value && Date.now() > (value.cache as number)) {
					promiseCache.delete(identifier);
					clearInterval(interval);
				}
			}, 1000);
		}
	})

	for (const [key, value] of promiseCache.entries()) {
		if (isDeepEqual([...deps, options.identifier ?? String.raw`${promise.toString()}`], [...value.deps, value.identifier])) {
			if (value.cache && value.cache !== "unmount" && Date.now() > (value.cache as number)) {
				promiseCache.delete(key);
				break;
			} else {
				if ("error" in value) {
					if (options.cleanOnError) {
						value.errorTimeout !== -1 && clearTimeout(value.errorTimeout);
						value.errorTimeout = setTimeout(() => {
							promiseCache.delete(key);
						}, 20) as unknown as number;
					}
					throw value.error;
				}
				if ("response" in value) {
					if (options.invalidateManually) {
						return [
							value.response,
							invalidate.current
						] as [Awaited<ReturnType<typeof promise>>, () => void]
					}
					return value.response as Awaited<ReturnType<typeof promise>>;
				}
				throw value.promise;
			}
		}
	}

	const cached: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: Awaited<ReturnType<typeof promise>>, cache: "unmount" | number | null, identifier: string | null } = {
		deps: deps,
		identifier: options.identifier ?? String.raw`${promise.toString()}`,
		cache: options.cache ? options.cache === "unmount" ? "unmount" : Date.now() + (options.cache*1000) : null,
		promise: promise()
			.then(response => {
				cached.response = response as Awaited<ReturnType<typeof promise>>;
			})
			.catch(err => {
				cached.error = err;
			})
	};

	promiseCache.set(identifier, cached);
	throw cached.promise;
}

export { usePromiseSuspensible };