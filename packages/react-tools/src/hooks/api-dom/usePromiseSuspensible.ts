import { DependencyList, useRef } from "react";
import { useEffectOnce } from "../lifecycle";
import { isDeepEqual } from "../../utils";

const promiseCache: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: unknown }[] = [];

/**
 * **`usePromiseSuspensible`**: Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/usePromiseSuspensible)
 * @param {T} promise - Function that returns a promise to suspense.
 * @param {DependencyList} deps - DependencyList for promise to suspense.
 * @returns {Awaited<ReturnType<T>>} result - resolve promise value.
 */
export const usePromiseSuspensible = <T extends (...args: unknown[]) => Promise<unknown>>(promise: T, deps: DependencyList): Awaited<ReturnType<T>> => {
	const index = useRef(-1);
	useEffectOnce(() => () => {
		index.current !== -1 && promiseCache.splice(index.current, 1);
		index.current = -1;
	})
	for (const cached of promiseCache) {
		index.current = index.current+1;
		if (isDeepEqual([...deps, String.raw`${promise.toString()}`], cached.deps)) {
			if ("error" in cached) {
				throw cached.error;
			}
			if ("response" in cached) {
				return cached.response as Awaited<ReturnType<T>>;
			}
			throw cached.promise;
		}
	}
	const cached: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: Awaited<ReturnType<T>> } = {
		deps:[...deps, String.raw`${promise.toString()}`],
		promise: promise()
			.then(response => {
				cached.response = response as Awaited<ReturnType<T>>;
			})
			.catch(err => {
				cached.error = err;
			})
	};

	promiseCache.push(cached);
	throw cached.promise;
}