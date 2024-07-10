import { DependencyList, useReducer, useRef } from "react";
import { useEffectOnce } from "../lifecycle";
import { isDeepEqual } from "../../utils";

const promiseCache: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: unknown, cache: "unmount" | number | null, errorTimeout?: number, identifier: string | null }[] = [];

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
	let index = -1;
	const [, reRender] = useReducer(t => t + 0.00000000001, 0);
	const invalidate = useRef(() => {
		index !== -1 && promiseCache.splice(index, 1);
		index = -1;
		reRender();
	});

	useEffectOnce(() => () => {
		if (options.cache === "unmount") {
			index !== -1 && promiseCache.splice(index, 1);
			index = -1;
		}
	})
	for (const ind in promiseCache) {
		if (isDeepEqual([...deps, options.identifier ?? String.raw`${promise.toString()}`], [...promiseCache[ind].deps, promiseCache[ind].identifier])) {
			if (promiseCache[ind].cache && promiseCache[ind].cache !== "unmount" && Date.now() > (promiseCache[ind].cache as number)) {
				promiseCache.splice(Number(ind), 1);
				break;
			} else {
				index = Number(ind);
				if ("error" in promiseCache[ind]) {
					if (options.cleanOnError) {
						promiseCache[ind].errorTimeout !== -1 && clearTimeout(promiseCache[ind].errorTimeout);
						promiseCache[ind].errorTimeout = setTimeout(() => {
							promiseCache.splice(Number(ind), 1);
						}, 20) as unknown as number;
					}
					throw promiseCache[ind].error;
				}
				if ("response" in promiseCache[ind]) {
					if (options.invalidateManually) {
						return [
							promiseCache[ind].response,
							invalidate.current
						] as [Awaited<ReturnType<typeof promise>>, () => void]
					}
					return promiseCache[ind].response as Awaited<ReturnType<typeof promise>>;
				}
				throw promiseCache[ind].promise;
			}
		}
	}
	const cached: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: Awaited<ReturnType<typeof promise>>, cache: "unmount" | number | null, identifier: string|null } = {
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

	index = promiseCache.push(cached) - 1;
	throw cached.promise;
}

export { usePromiseSuspensible };