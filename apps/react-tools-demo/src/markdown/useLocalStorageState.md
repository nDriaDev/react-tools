# useLocalStorageState
Custom _useState_ hook implementation using _LocalStorage_, with immutable _getter state_ function and to _remove_ key from localStorage.

## Usage

```tsx
const Child = () => {
	const [state] = useLocalStorageState<string>({key:"demo", opts: {mode: "read"}});
	return (<>
		<h3>Child component 1</h3>
		<p>State is {state}</p>
	</>)
}

const Child2 = () => {
	const [setState] = useLocalStorageState<string>({key:"demo", opts: {mode: "write"}});
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

const UseLocalStorageState = () => {
	const [, , , remove] = useLocalStorageState({ key: "demo", initialState: "prova" });
	const render = useRef(0);
	const clear = useCallback(() => remove(), [remove]);

	useEffect(() => {
		render.current++;
		return () => {
			render.current === 2 && clear();
		}
	}, [clear]);

	return (<>
		<Child />
		<br />
		<Child2/>
	</>);
}

UseLocalStorageState.displayName = "UseLocalStorageState";

export { UseLocalStorageState };
```

> The component has:
> - An internal _useLocalStorage_ state with __key__ _demo_ and __initialState__ _prova_ from which gets __remove__ function.
> - A Child component 1 that uses _useLocalStorage_ with _read_ __mode__ and __key__ _demo_ to read from localStorage.
> - A Child component 2 that uses _useLocalStorage_ with _write_ __mode__ and __key__  _demo_ to write to LocalStorage with an onSubmit form event with a input text value.
> - An useEffect that invokes __remove__ function and delete item with key _demo_ from localStorage when the component unmounts.
> 
> When component is mounted, the Child1 state is _prova_. It can be changed by Child2. If you change state and open the page into another tab, after mounting, the Child1 display the new value of state and every changes made is reflected in both tabs.


## API

```tsx
useLocalStorageState<T>({ key, initialState, opts }: { key: string, initialState?: T | (() => T), opts?: { serializer?: (item: T) => string, deserializer?: (item: string) => T, mode?: "read" | "write" | "read/write" } }): [T, () => T, () => void] | [Dispatch<SetStateAction<T>>, () => T, () => void] | [T, Dispatch<SetStateAction<T>>, () => T, () => void] 
```

> ### Params
>
> - __params__: _Object_
> - __params.key__: _string_  
item key in local storage.
> - __params.initialState?__: _T | () => T_  
value or a function , optional.
> - __params.opts={serializer: JSON.stringify, deserializer: jSON.parse, mode: "read/write"}?__: _{serializer: (item: T)=> string, deserializer: (item: string)=> T, mode?: "read" | "write" | "read/write"}_  
object with serializer and deserializer function to handle values in localStorage and mode property to use hook only to read, write or both.
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