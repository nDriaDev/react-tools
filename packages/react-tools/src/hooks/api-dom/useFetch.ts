import { useCallback, useRef, useState } from "react"

/**
 * **`useFetch`**: Hook to use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with more control and the possibility to execute request with suspense support. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useFetch)
 * @param {RequestInfo|URL} url - The resource that you wish to fetch. This can either be a string, a Request object or an URL object.
 * @param {Object} [options] - An object containing any custom settings you want to apply to the fetch invokation.
 * @param {RequestInit} [...options.rest] - properties to customize fetch settings.
 * @param {(loading: boolean)=>void} [options.onLoading] - function that will be executed when loading state changes.
 * @param {(error:unknown)=>void} [options.onError] - function that will be executed when error occurred.
 * @param {boolean} [options.suspensable] - boolean that indicates if fetch request need to be suspends or not.
 * @returns {[T|undefined, (conf?: RequestInit) => Promise<void>, boolean, unknown]}
 * Array with:
 * - __data__: data returned from fetch.
 * - __call__: function to fetch request.
 * - __loading__: value that handle loading state.
 * - __error__: value that handle error state.
 */
export const useFetch = <T>(url: RequestInfo | URL, { suspensable, onError, onLoading, ...rest }: RequestInit & { suspensable?: boolean, onLoading?: (loading: boolean) => void, onError?: (err: unknown) => void } = {}): [T|undefined, (conf?: RequestInit) => Promise<void>, boolean, unknown] => {
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