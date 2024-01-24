# useFetch
Hook to use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with more control and the possibility to execute request with suspense support.

## Usage

```tsx
export const Delayed = () => {
	const [data, callSuspensable] = useFetch("https://jsonplaceholder.typicode.com/comments?id=5", { cache: "no-cache", suspensable: true });
	const [data1, call, loading, error] = useFetch("https://jsonplaceholder.typicode.com/comments?id=5", { cache: "no-cache" });

	if (loading ) {
		return <p>Loading...</p>
	}
	if (error) {
		return <p>Error: {JSON.stringify(error)}</p>
	}
	return <>
		<button onClick={() => callSuspensable()}>Call suspensable</button>
		<button onClick={() => call()}>Call</button>
		<pre>{JSON.stringify(data??data1, null, 2)}</pre>
	</>
}

export const UseFetch = () => {
	return <Suspense fallback="loading suspense...">
		<Delayed />
	</Suspense>
}
```

> The component uses _useFetch_ hook to call jsonplaceholder API with suspense support and without it.


## API

```tsx
useFetch<T>(url: RequestInfo | URL, { suspensable, onError, onLoading, ...rest }: RequestInit & { suspensable?: boolean, onLoading?: (loading: boolean) => void, onError?: (err: unknown) => void } = {}): [T|undefined, (conf?: RequestInit) => Promise<void>, boolean, unknown]
```

> ### Params
>
> - __url__: _RequestInfo|URL_  
The resource that you wish to fetch. This can either be a string, a Request object or an URL object.
> - __options?__: _Object_  
An object containing any custom settings you want to apply to the fetch invokation.
> - __...options.rest?__: _RequestInit_  
properties to customize fetch settings.
> - __options.onLoading?__: _(loading: boolean)=>void_  
function that will be executed when loading state changes.
> - __options.onError?__: _(error:unknown)=>void_  
function that will be executed when error occurred.
> - __options.suspensable?__: _boolean_  
boolean that indicates if fetch request need to be suspends or not.
>

> ### Returns
>
> :  __Array__:  
    - _T|undefined_  
    - _(conf?: RequestInit) => Promise<void>_  
    - _boolean_  
    - _unknown_  
> Array with:
> - __data__: data returned from fetch.
> - __call__: function to fetch request.
> - __loading__: value that handle loading state.
> - __error__: value that handle error state.
>