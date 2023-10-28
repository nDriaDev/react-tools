# useSessionStorageState
Custom _useState_ hook implementation using _sessionStorage_, with immutable _getter state_ function and to _remove_ key from sessionStorage.

## Usage

```tsx
const Child = () => {
	const [state] = useSessionStorageState<string>({key:"demo", opts: {mode: "read"}});
	return (<>
		<h3>Child component 1</h3>
		<p>State is {state}</p>
	</>)
}

const Child2 = () => {
	const [setState] = useSessionStorageState<string>({key:"demo", opts: {mode: "write"}});
	return (<>
		<h3>Child component 2</h3>
		<form onSubmit={(e: BaseSyntheticEvent) => {
			setState(e.target[0].value);
			e.preventDefault();
		}}>
			<input type="text" />
		</form>
	</>)
}

const UseSessionStorageState = () => {
	const [, , , remove] = useSessionStorageState({ key: "demo", initialState: "prova" });

	const clear = useCallback(() => remove(), [remove]);

	useEffect(() => {
		return () => {
			clear();
		}
	}, [clear]);

	return (<>
		<Child />
		<br />
		<Child2/>
	</>);
}

UseSessionStorageState.displayName = "UseSessionStorageState";

export { UseSessionStorageState };
```

> The component has:
> - An internal _useSessionStorage_ state with __key__ _demo_ and __initialState__ _prova_ from which gets __remove__ function.
> - A Child component 1 that uses _useSessionStorage_ with _read_ __mode__ and __key__ _demo_ to read from sessionStorage.
> - A Child component 2 that uses _useSessionStorage_ with _write_ __mode__ and __key__  _demo_ to write to sessionStorage with an onSubmit form event with a input text value.
> - An useEffect that invokes __remove__ function and delete item with key _demo_ from sessionStorage when the component unmounts.
> 
> When component is mounted, the Child1 state is _prova_. It can be changed by Child2. If you open the page into another tab, changes aren't reflected in both tabs.


## API

```tsx
useSessionStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" | "write" | "read/write" } }): [T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void] 
```

> ### Params
>
> - __params__: _Object_
> - __params.key__: _string_  
item key in session storage.
> - __params.initialState?__: _T | () => T_  
value or a function , optional.
> - __params.opts={serializer: JSON.stringify, deserializer: jSON.parse, mode: "read/write"}?__: _{serializer: (item: T)=> string, deserializer: (item: string)=> T, mode?: "read" | "write" | "read/write"}_  
object with serializer and deserializer function to handle values in sessionStorage and mode property to use hook only to read, write or both.
>

> ### Returns
>
> 
> - __Union of__:  
>     - __Array__:  
>         - _T_  
>         - _() => T_  
>         - _() => void_  
>     - __Array__:  
>         - _Dispatch<SetStateAction<T>>_  
>         - _() => T_  
>         - _() => void_  
>     - __Array__:  
>         - _T_  
>         - _Dispatch<SetStateAction<T>>_  
>         - _() => T_  
>         - _() => void_  
>