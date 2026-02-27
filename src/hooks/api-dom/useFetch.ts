import { useCallback, useRef, useState } from "react"
import { UseFetchOptions, UseFetchResult } from "../../models";

/**
 * **`useFetch`**:
 * @see [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with more control and the possibility to execute request with suspense support.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useFetch)
 * @template T The expected response body type.
 * @param {RequestInfo | URL } url
 * @param {UseFetchOptions} param - {@link UseFetchOptions}
 * @returns {UseFetchResult} result {@link UseFetchResult}
 */
export const useFetch = <T>(url: RequestInfo | URL, { suspensable, onError, onLoading, ...rest }: UseFetchOptions): UseFetchResult<T> => {
	const [status, setStatus] = useState<{ loading: boolean, error: unknown, data?: T, suspended: boolean }>({
		loading: false,
		error: undefined,
		data: undefined,
		suspended: false
	});
	const promise = useRef<Promise<void>>();

	if (status.suspended) {
		throw promise.current;
	}

	const call = useCallback((conf?: RequestInit) => {
		if (suspensable) {
			let response: Response;
			promise.current = fetch(url, { ...rest, ...conf })
				.then(resp => {
					response = resp;
					return (!response.headers.get("Content-Type") || response.headers.get("Content-Type")?.startsWith("text")
						? response.text()
						: response.headers.get("Content-Type")?.includes("json")
							? response.json()
							: response.blob()) as T;
				})
				.then(data => {
					if (response.ok) {
						setStatus({ error: undefined, loading: false, data, suspended: false });
						promise.current = undefined;
						!!onLoading && onLoading(false);
					} else {
						const error = data
							? data
							: response.status + " - " + response.statusText;
						setStatus({
							loading: false,
							data: undefined,
							error,
							suspended: false
						});
						promise.current = undefined;
						!!onLoading && onLoading(false);
						!!onError && onError(error);
					}
				})
				.catch(err => {
					const error = typeof err === "string"
						? err
						: (err as Error).message;
					setStatus({ error, data: undefined, loading: false, suspended: false });
					promise.current = undefined;
					!!onLoading && onLoading(false);
					!!onError && onError(error);
				});
			setStatus({loading: true, data: undefined, error: undefined, suspended: true});
			return promise.current;
		} else {
			let response: Response;
			!!onLoading && onLoading(true);
			setStatus({ loading: true, error: undefined, data: undefined, suspended: false });
			return fetch(url, { ...rest, ...conf })
				.then(resp => {
					response = resp;
					return (!response.headers.get("Content-Type") || response.headers.get("Content-Type")?.startsWith("text")
						? response.text()
						: response.headers.get("Content-Type")?.includes("json")
							? response.json()
							: response.blob()) as T;
				})
				.then(data => {
					if (response.ok) {
						setStatus({ error: undefined, loading: false, data, suspended: false });
						!!onLoading && onLoading(false);
					} else {
						const error = data
							? data
							: response.status + " - " + response.statusText;
						setStatus({
							loading: false,
							data: undefined,
							error,
							suspended: false
						});
						!!onLoading && onLoading(false);
						!!onError && onError(error);
					}
				})
				.catch(err => {
					const error = typeof err === "string"
						? err
						: (err as Error).message;
					setStatus({ error, data: undefined, loading: false, suspended: false });
					!!onLoading && onLoading(false);
					!!onError && onError(error);
				});
		}
	}, [rest, url, onError, onLoading, suspensable]);

	return [status.data, call, status.loading, status.error];
}