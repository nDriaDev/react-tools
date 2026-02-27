import { DependencyList, useReducer, useRef } from "react";
import { isDeepEqual } from "../../utils";
import { UseParallelPromisesProps, UseParallelPromisesResult } from "../../models";

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
 * **`useParallelPromises`** – Executes multiple promises **in parallel** with Suspense.
 *
 * Suspends the component until **all** promises are resolved,
 * similar to `Promise.all`. If at least one fails, it propagates the error to
 * the nearest `ErrorBoundary`.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useParallelPromises)
 * @template T - A readonly tuple of zero-argument async factory functions. Inferred automatically from the `factories` argument. The return types of each factory determine the corresponding entry in the result tuple.
 * @param {UseParallelPromisesProps["factories"]} factories - {@link UseParallelPromisesProps["factories"]}
 * @param {UseParallelPromisesProps["deps"]} deps - {@link UseParallelPromisesProps["deps"]}
 * @param {UseParallelPromisesProps["options"]} [options] - {@link UseParallelPromisesProps["options"]}
 * @returns {UseParallelPromisesResult} result {@link UseParallelPromisesResult}
 */
function useParallelPromises<const T extends readonly (() => Promise<any>)[]>(factories: UseParallelPromisesProps<T>["factories"], deps: UseParallelPromisesProps<T>["deps"], options: UseParallelPromisesProps<T>["options"] = {}): UseParallelPromisesResult<T> {
	const [, reRender] = useReducer((t: number) => t + 1, 0);
	const entries = factories.map((factory, i) => {
		const id = options.identifiers?.[i] ?? buildIdentifier(factory, undefined);
		const combinedDeps = [...deps, id];
		for (const [key, entry] of promiseCache.entries()) {
			const entryKey = [...(entry.deps as unknown[]), entry.identifier];
			if (isDeepEqual(entryKey, combinedDeps)) {
				if (isExpired(entry)) {
					promiseCache.delete(key);
					break;
				}
				return { id, entry };
			}
		}

		const newEntry: { deps: DependencyList, identifier: string | null, status: "pending" | "fulfilled" | "rejected", promise: Promise<void>, response?: unknown, error?: unknown, cache: "unmount" | number | null, errorTimeout?: ReturnType<typeof setTimeout> } = {
			deps,
			identifier: id,
			status: "pending",
			cache: options.cache
				? options.cache === "unmount"
					? "unmount"
					: Date.now() + (options.cache * 1000)
				: null,
			promise: factory()
				.then((res) => {
					newEntry.status = "fulfilled";
					newEntry.response = res;
				})
				.catch((err) => {
					newEntry.errorTimeout = setTimeout(() => {
						promiseCache.delete(id);
					}, 20);
					newEntry.status = "rejected";
					newEntry.error = err;
					throw err;
				}),
		};
		promiseCache.set(id, newEntry);
		return { id, entry: newEntry };
	});

	const invalidate = useRef(() => {
		let hasDelete = false;
		for (const key of promiseCache.keys()) {
			if (promiseCache.delete(key)) {
				hasDelete = true;
			}
		}
		hasDelete && reRender();
	});

	const results: unknown[] = [];

	for (const { entry } of entries) {
		if (entry.status === "rejected") {
			throw entry.error;
		}
		if (entry.status === "pending") {
			throw entry.promise;
		}
		results.push(entry.response);
	}

	return {
		result: results as { [K in keyof T]: Awaited<ReturnType<T[K]>> },
		invalidate: invalidate.current
	};
}

export { useParallelPromises };
