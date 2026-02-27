/**
 * Options used by [useFetch](https://react-tools.ndria.dev/hooks/api-dom/useFetch).
 */
export interface UseFetchOptions extends RequestInit {
	/**
	 * Called whenever the loading state toggles.
	 * @param loading - `true` when a request begins; `false` when it completes or errors.
	 */
	onLoading?: (loading: boolean) => void;
	/**
	 * Called when the request throws an error (network failure, non-OK response, etc.).
	 * @param error - The caught error value.
	 */
	onError?: (error: unknown) => void;
	/**
	 * When `true`, the hook participates in React's Suspense protocol.
	 * The component suspends until the fetch resolves, integrating with `<Suspense>` and `<ErrorBoundary>`.
	 * @default false
	 */
	suspensable?: boolean;
}

/**
 * Result tuple returned by [useFetch](https://react-tools.ndria.dev/hooks/api-dom/useFetch).
 *
 * @template T The expected response body type.
 */
export type UseFetchResult<T> = [
	/** Parsed response data. `undefined` before the first successful request and after an error. */
	T | undefined,
	/** `call` — executes the fetch request. Accepts optional per-call `RequestInit` overrides merged with the hook-level options. */
	(conf?: RequestInit) => Promise<void>,
	/** `true` while the request is in-flight. */
	boolean,
	/** `error` — the caught error value when the request fails; `undefined` otherwise. */
	unknown
];