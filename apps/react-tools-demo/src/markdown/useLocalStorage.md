# useLocalStorageState
Custom _useState_ hook implementation using _LocalStorage_, with immutable _getter state_ function and to _remove_ key from localStorage..

## Usage

```tsx
const Child = () => {
	const [state] = useLocalStorage<string>({key:"demo"});
	return (<>
		<h3>Child component 1</h3>
		<p>State is {state}</p>
	</>)
}

const Child2 = () => {
	const [, setState] = useLocalStorage<string>({key:"demo"});
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

const UseLocalStorage = () => {
	const [, , , remove] = useLocalStorage({ key: "demo" });

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

UseLocalStorage.displayName = "UseLocalStorage";

export { UseLocalStorage };
```

> The component has:
> - A Child component 1 that uses _useLocalStorage_ to read item with key _demo_.
> - A Child component 2 that uses _useLocalStorage_ to write item with key _demo_ by an onSubmit form event with a input text value.
> - An useEffect that removes item with key _demo_ when the component unmounts.


## API

```tsx
useLocalStorageStateuseLocalStorage = <T>({ key, initialState, opts = { serializer: JSON.stringify, deserializer: JSON.parse } }: { key: string, initialState?: T | (() => T), opts?: { serializer: (item: T) => string, deserializer: (item: string) => T } }): [T, Dispatch<SetStateAction<T>>, ()=>T, ()=>void] 
```

> ### Params
>
> - __params__: _Object_
> - __params.key__: _string_  
item key in local storage.
> - __params.initialState?__: _T | () => T_  
value or a function , optional.
> - __params.opts={serializer: JSON.stringify, deserializer: jSON.parse}?__: _{serializer: (item: T)=> string, deserializer: (item: string)=> T}_  
object with serializer and deserializer function to handle values in localStorage.
>

> ### Returns
>
> 
> - __Array__:  
>     - _T_  
>     - _Dispatch<SetStateAction<T>>_  
>     - _() => T_  
>     - _() => void_  
>