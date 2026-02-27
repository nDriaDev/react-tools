import { DependencyList, useReducer, useRef } from "react";
import { useEffectOnce } from "../lifecycle";
import { isDeepEqual } from "../../utils";
import { UsePromiseProps, UsePromiseResultWithInvalidate } from "../../models";

const promiseCache = new Map<string, { deps: DependencyList, identifier: string | null, status: "pending" | "fulfilled" | "rejected", promise: Promise<void>, response?: unknown, error?: unknown, cache: "unmount" | number | null, errorTimeout?: ReturnType<typeof setTimeout> }>();

function buildIdentifier(promise: () => Promise<unknown>, explicitId?: string): string {
	return explicitId ?? String.raw`${promise.toString()}`;
}

function isExpired(entry: { deps: DependencyList, identifier: string | null, status: "pending" | "fulfilled" | "rejected", promise: Promise<void>, response?: unknown, error?: unknown, cache: "unmount" | number | null, errorTimeout?: ReturnType<typeof setTimeout> }): boolean {
	return (
		entry.cache !== null &&
		entry.cache !== "unmount" &&
		Date.now() > entry.cache
	);
}

/**
 * **`usePromise`**: Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. This hook can be used in conditional blocks.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/usePromise)
 * @template T - The resolved value type of the promise returned by `promise`.
 * @param {UsePromiseProps["promise"]} promise - {@link UsePromiseProps}
 * @param {UsePromiseProps["deps"]} deps - {@link UsePromiseProps}
 * @param {UsePromiseProps["options"]} [options] - {@link UsePromiseProps}
 * @returns {T | UsePromiseResultWithInvalidate} result {@link T | UsePromiseResultWithInvalidate}
 */
function usePromise<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: undefined }): T;
function usePromise<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: false }): T;
function usePromise<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: true }): [T, ()=>void];
function usePromise<T>(promise: UsePromiseProps<T>["promise"], deps: UsePromiseProps<T>["deps"], options: UsePromiseProps<T>["options"] = {}): T | UsePromiseResultWithInvalidate<T> {
	const identifier = buildIdentifier(promise, options.identifier);
	const [, reRender] = useReducer((t: number) => t + 1, 0);
	const invalidate = useRef(() => {
		if (promiseCache.delete(identifier)) {
			reRender();
		}
	});

	useEffectOnce(() => () => {
		if (options.cache === "unmount") {
			promiseCache.delete(identifier);
		}
	})

	for (const [key, value] of promiseCache.entries()) {
		const cacheKey = [...deps, value.identifier];
		const currentKey = [...deps, options.identifier ?? String.raw`${promise.toString()}`];

		if (isDeepEqual(cacheKey, currentKey)) {
			if (isExpired(value)) {
				promiseCache.delete(key);
				break;
			}
			if (value.status === "rejected") {
				if (options.cleanOnError) {
					if (value.errorTimeout !== undefined) {
						clearTimeout(value.errorTimeout);
					}
					value.errorTimeout = setTimeout(() => {
						promiseCache.delete(key);
					}, 20);
				}
				throw value.error;
			}
			if (value.status === "fulfilled") {
				if (options.invalidateManually) {
					return [value.response as T, invalidate.current];
				}
				return value.response as T;
			}
			throw value.promise;
		}
	}

	const cached: { deps: DependencyList, identifier: string | null, status: "pending" | "fulfilled" | "rejected", promise: Promise<void>, response?: unknown, error?: unknown, cache: "unmount" | number | null, errorTimeout?: ReturnType<typeof setTimeout> } = {
		deps: deps,
		identifier: options.identifier ?? String.raw`${promise.toString()}`,
		status: "pending",
		cache: options.cache
			? options.cache === "unmount"
				? "unmount"
				: Date.now() + (options.cache * 1000)
			: null,
		promise: promise()
			.then(response => {
				cached.status = "fulfilled";
				cached.response = response;
			})
			.catch(err => {
				cached.status = "rejected";
				cached.error = err;
			})
	};

	promiseCache.set(identifier, cached);
	throw cached.promise;
}

export { usePromise };