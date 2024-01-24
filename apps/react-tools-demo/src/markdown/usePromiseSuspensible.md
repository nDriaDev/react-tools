# usePromiseSuspensible
Hook to resolve promise with Suspense support. The component that uses it, it need to be wrapped with Suspense component.

## Usage

```tsx
const Delayed = () => {
	const data = usePromiseSuspensible(() => {
		return new Promise<number[]>((res, rej) => {
			console.log("called")
			setTimeout(() => {
				Math.random() > 0.5
					? res([1, 2, 3, 4, 5])
					: rej();
			},4000)
		}).catch(() => alert("Error throwed by promise"))
	}, []);

	return <pre>{JSON.stringify(data)}</pre>;
}

export const UsePromiseSuspensible = () => {
	return <Suspense fallback="loading...">
		<Delayed/>
	</Suspense>
}
```

> The _Delayed_ component uses _usePromiseSuspensible_ hook to call a promise that resolves with an array of number or reject: if promise has been resolved, array number is rendered, otherwise an alert is invocked. Delayed component is returned from _UsePromiseSuspensible_ component.


## API

```tsx
usePromiseSuspensible<T extends (...args: unknown[]) => Promise<unknown>>(promise: T, deps: DependencyList): Awaited<ReturnType<T>>
```

> ### Params
>
> - __promise__: _T_  
Function that returns a promise to suspense.
> - __deps__: _DependencyList_  
DependencyList for promise to suspense.
>

> ### Returns
>
> __result__: resolve promise value.
> - _Awaited<ReturnType<T>>_  
>