import { DependencyList, useRef } from "react";
import { useEffectOnce } from "../lifecycle";
import { isDeepEqual } from "../../utils";

const promiseCache: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: unknown, cache: "unmount" | number | null }[] = [];

/**
 * **`usePromiseSuspensible`**: Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/usePromiseSuspensible)
 * @param {T} promise - Function that returns a promise to suspense.
 * @param {DependencyList} deps - DependencyList for promise to suspense.
 * @param {{ clearCacheOnUnmount?: boolean }} [options] - optional options.
 * @param {"unmount"|number} [options.cache=undefined] - value can be "unmount", to clean promise cached at component unmounting, or it can be the duration in millisecond of cached promise.
 * @returns {Awaited<ReturnType<T>>} result - resolve promise value.
 */
export const usePromiseSuspensible = <T extends (...args: unknown[]) => Promise<unknown>>(promise: T, deps: DependencyList, options: { cache?: "unmount" | number } = {}): Awaited<ReturnType<T>> => {
	const index = useRef(-1);
	useEffectOnce(() => () => {
		if (options.cache === "unmount") {
			index.current !== -1 && promiseCache.splice(index.current, 1);
			index.current = -1;
		}
	})
	for (const ind in promiseCache) {
		if (isDeepEqual([...deps, String.raw`${promise.toString()}`], promiseCache[ind].deps)) {
			if (promiseCache[ind].cache && promiseCache[ind].cache !== "unmount" && Date.now() > (promiseCache[ind].cache as number)) {
				promiseCache.splice(Number(ind), 1);
				break;
			} else {
				index.current = Number(ind);
				if ("error" in promiseCache[ind]) {
					throw promiseCache[ind].error;
				}
				if ("response" in promiseCache[ind]) {
					return promiseCache[ind].response as Awaited<ReturnType<T>>;
				}
				throw promiseCache[ind].promise;
			}
		}
	}
	const cached: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: Awaited<ReturnType<T>>, cache: "unmount" | number | null } = {
		deps: [...deps, String.raw`${promise.toString()}`],
		cache: options.cache ? options.cache === "unmount" ? "unmount" : Date.now() + options.cache : null,
		promise: promise()
			.then(response => {
				cached.response = response as Awaited<ReturnType<T>>;
			})
			.catch(err => {
				cached.error = err;
			})
	};

	index.current = promiseCache.push(cached) - 1;
	throw cached.promise;
}