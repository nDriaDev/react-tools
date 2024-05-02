import { DependencyList } from "react";
import { useEffectOnce } from "../lifecycle";
import { isDeepEqual } from "../../utils";

const promiseCache: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: unknown, cache: "unmount" | number | null, errorTimeout?: number }[] = [];

/**
 * **`usePromiseSuspensible`**: Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. This hook can be used in conditional blocks. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePromiseSuspensible)
 * @param {()=>Promise<T>} promise - Function that returns a promise to suspense.
 * @param {DependencyList} deps - DependencyList for promise to suspense.
 * @param {{ clearCacheOnUnmount?: "unmount"|number, cleanOnError?: boolean }} [options] - optional options.
 * @param {"unmount"|number} [options.cache=undefined] - value can be "unmount", to clean promise cached at component unmounting, or it can be the duration in __seconds__ of cached promise.
 * @param {boolean} [options.cleanOnError=undefined] - if true, when there is an error, remove promise from cache with a delay of 20 millisecond (due to multiple renders of react strict mode).
 * @returns {Awaited<ReturnType<T>>} result - resolve promise value.
 */
export const usePromiseSuspensible = <T>(promise: ()=>Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean } = {}): Awaited<ReturnType<typeof promise>> => {
	let index = -1;
	useEffectOnce(() => () => {
		if (options.cache === "unmount") {
			index !== -1 && promiseCache.splice(index, 1);
			index = -1;
		}
	})
	for (const ind in promiseCache) {
		if (isDeepEqual([...deps, String.raw`${promise.toString()}`], promiseCache[ind].deps)) {
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
					return promiseCache[ind].response as Awaited<ReturnType<typeof promise>>;
				}
				throw promiseCache[ind].promise;
			}
		}
	}
	const cached: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: Awaited<ReturnType<typeof promise>>, cache: "unmount" | number | null } = {
		deps: [...deps, String.raw`${promise.toString()}`],
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