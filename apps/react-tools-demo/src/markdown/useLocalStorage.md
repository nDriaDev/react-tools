# 


## Usage

```tsx
const UseLocalStorage = () => {
	const func = useCallback(() => {
		window.localStorage.setItem(Math.random() > 0.5 ? "demo" : "prv", "2");
		window.dispatchEvent(new Event("storage"));
	}, []);

	const clear = useCallback(() => window.localStorage.clear(), []);

	useEffect(() => {
		const listener = (evt: Event) => console.log(evt);
		window.addEventListener("storage", listener);

		return () => window.removeEventListener("storage", listener);
	},[])
	return (<>
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
useLocalStorage = <T>(key: string, initialState?: T | (()=>T)) 
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