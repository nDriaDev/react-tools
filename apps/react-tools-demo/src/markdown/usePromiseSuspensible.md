# usePromiseSuspensible
Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component. This hook can be used in conditional blocks. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/usePromiseSuspensible)

## Usage

```tsx
const Delayed = () => {
	const [data, invalidate] = usePromiseSuspensible(
		async () => {
			return await new Promise<number[]>((res, rej) => {
				console.log("called");
				setTimeout(() => {
					Math.random() > 0.5
						? res([1, 2, 3, 4, 5])
						: rej("Error throwed by promise");
				}, 4000);
			});
		},
		[],
		{
			cache: 25, //25 seconds
			cleanOnError: true,
			identifier: "ss",
			invalidateManually: true
		}
	);

	return <>
		<button onClick={invalidate}>Invalidate</button>
		<pre>{JSON.stringify(data)}</pre>
	</>;
}

export const UsePromiseSuspensible = () => {
	const fallback = useCallback<(error: Error, info: React.ErrorInfo, retry: () => void) => React.ReactNode>((_, __, retry) => {
		return <button onClick={retry}>Retry</button>
	}, []);

	return <ErrorBoundary fallback={fallback}>
		<Suspense fallback="loading...">
			<Delayed />
		</Suspense>
	</ErrorBoundary>
}
```

> The _Delayed_ component uses _usePromiseSuspensible_ hook to call a promise that resolves with an array of number or reject: if promise has been resolved, array number is rendered, otherwise an alert is invocked. Delayed component is returned from _UsePromiseSuspensible_ component.


## API

```tsx
usePromiseSuspensible<T>(promise: () => Promise<T>, deps: DependencyList, options: { cache?: "unmount" | number, cleanOnError?: boolean, identifier?: string, invalidateManually?: boolean } = {}): Awaited<ReturnType<typeof promise>> | [Awaited<ReturnType<typeof promise>>, () => void]
```


> ### Params
>
> - __promise__: _()=>Promise<T>_  
Function that returns a promise to suspense.
> - __deps__: _DependencyList_  
DependencyList for promise to suspense.
> - __options?__: _{ clearCacheOnUnmount?: "unmount"|number, cleanOnError?: boolean }_  
optional options.
> - __options.cache=undefined?__: _"unmount"|number_  
value can be "unmount", to clean promise cached at component unmounting, or it can be the duration in __seconds__ of cached promise.
> - __options.cleanOnError=undefined?__: _boolean_  
if true, when there is an error, remove promise from cache with a delay of 20 millisecond (due to multiple renders of react strict mode).
> - __options.invalidateManually=undefined?__: _boolean_  
if true, returns data and a function to invalidate data and revaluates promise.
> - __options.identifier=undefined?__: _string_  
a string to identify _promise_. If it isn't present, a serialization of _promise_ will be used.
>



> ### Returns
>
> __result__: resolve promise value.
> - __Union of__:  
>     - _Awaited<ReturnType<T>>_  
>     - __Array__:  
>         - _Awaited<ReturnType<T>>_  
>         - _()=>void_  
>