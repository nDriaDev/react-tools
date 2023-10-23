# 


## Usage

```tsx
const UseLocalStorage = () => {
	const [state, setState, , remove] = useLocalStorage({ key: "key" });
	const func = useCallback(() => {
		setState(Math.random() > 0.5);
	}, [setState]);

	const clear = useCallback(() => remove(), [remove]);


	return (<>
		{state}
		<button onClick={func}>Prova</button>
		<button onClick={clear}>clear</button>
	</>);
}

UseLocalStorage.displayName = "UseLocalStorage";

export { UseLocalStorage };
```

> DEMO


## API

```tsx
useLocalStorage = <T>({ key, initialState, opts = { serializer: JSON.stringify, deserializer: JSON.parse } }: { key: string, initialState?: T | (() => T), opts?: { serializer: (item: T) => string, deserializer: (item: string) => T } }): [T, Dispatch<SetStateAction<T>>, ()=>T, ()=>void] 
```

> ### Params
>
>
>

> ### Returns
>
> 
> 
>