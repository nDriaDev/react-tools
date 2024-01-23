import { DependencyList, useRef } from "react";
import { isDeepEqual, useEffectOnce } from "..";

const promiseCache: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: unknown }[] = [];

/**
 * **`usePromiseSuspensible`**: Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component.
 * @param {T} promise - Function that returns a promise to suspense.
 * @param {DependencyList} deps - DependencyList for promise to suspense.
 * @returns {Awaited<ReturnType<T>>} result - resolve promise value.
 */
export const usePromiseSuspensible = <T extends (...args: unknown[]) => Promise<unknown>>(promise: T, deps: DependencyList) => {
	const index = useRef(-1);
	useEffectOnce(() => () => {
		index.current !== -1 && promiseCache.splice(index.current, 1);
		index.current = -1;
	})
	for (const cached of promiseCache) {
		index.current = index.current+1;
		if (isDeepEqual([...deps, promise.toString()], cached.deps)) {
			if (Object.prototype.hasOwnProperty.call(cached, "error")) {
				throw cached.error;
			}
			if (Object.prototype.hasOwnProperty.call(cached, "response")) {
				return cached.response as Awaited<ReturnType<T>>;
			}
			throw cached.promise;
		}
	}
	const cached: { deps: DependencyList, promise: Promise<void>, error?: unknown, response?: Awaited<ReturnType<T>> } = {
		deps:[...deps, promise.toString()],
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