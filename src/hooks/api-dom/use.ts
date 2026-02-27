import { useContext } from "react";
import { PromiseStatus } from "../../models";
import * as React from "react";

const promiseStatusCache = new WeakMap<Promise<unknown>, PromiseStatus>();

/** Type-guard: distinguishes a React Context object from a Promise. */
function isContext<T>(value: unknown): value is React.Context<T> {
	return (
		value !== null &&
		typeof value === "object" &&
		"$$typeof" in (value as object) &&
		typeof (value as { Provider?: unknown }).Provider !== "undefined" &&
		typeof (value as { Consumer?: unknown }).Consumer !== "undefined"
	);
}

/**
 * Instruments a promise so its status is always readable synchronously,
 * mirroring what React 19's native `use` receives from the scheduler.
 */
function trackPromise<T>(promise: Promise<T>): PromiseStatus {
	if (promiseStatusCache.has(promise)) {
		return promiseStatusCache.get(promise)!;
	}
	const entry: PromiseStatus = {
		status: "pending",
		promise: promise.then(
			(value) => {
				(entry as unknown as { status: string; value: unknown }).status = "fulfilled";
				(entry as unknown as { value: unknown }).value = value;
			},
			(reason) => {
				(entry as unknown as { status: string; reason: unknown }).status = "rejected";
				(entry as unknown as { reason: unknown }).reason = reason;
			}
		),
	};

	promiseStatusCache.set(promise as Promise<unknown>, entry);
	return entry;
}

/**
 * **`use`**: Polyfill of React 19's `use` hook for React 16.8 – 18.
 *
 * Reads the value of a **Promise** or a **React Context**, suspending the
 * component (via Suspense) when the promise is still pending, and resuming
 * with the resolved value once it settles.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/use)
 *
 * @param input - A `Promise<T>` or a `React.Context<T>`.
 * @returns The resolved value `T`.
 */
function usePolyfill<T>(input: Promise<T> | React.Context<T>): T {
	if (isContext<T>(input)) {
		return useContext(input);
	}

	const tracked = trackPromise(input);

	switch (tracked.status) {
		case "fulfilled":
			return (tracked as { status: "fulfilled"; value: T }).value;

		case "rejected":
			throw (tracked as { status: "rejected"; reason: unknown }).reason;

		case "pending":
		default:
			throw tracked.promise;
	}
}

export const use = ((React as any).use ?? usePolyfill) as typeof usePolyfill;