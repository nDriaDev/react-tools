# useMemoCompare
Custom useMemo that returns memoized value that changes only when comparator function, received as third parameter, returns true. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMemoCompare)

## Usage

```tsx
const UseMemoCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });

	const defaultMemo = useMemo(() => {
		console.log("Render defaultMemo");
		return <p>useMemo: id:{state.id} - name:{state.name}</p>
	}, [state]);

	const memoCompare = useMemoCompare(
		() => {
			console.log("Render memoCompare");
			return <p>useMemoCompare: id:{state.id} - name:{state.name}</p>
		},
		[state],
		(oldDeps, newDeps) => oldDeps[0].name !== newDeps[0].name
	);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		{defaultMemo}
		{memoCompare}
		<button onClick={() => setState(t => ({ ...t, id: t.id + 1 }))}>Increment</button>
	</>);
};

UseMemoCompare.displayName = "UseMemoCompare";

export { UseMemoCompare };
```

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _message useState variable_ that's a string rendered in a tag p.
> - a _useCallback_ function that update _message variable_ with _state variable_ values.
> - a _useCallbackCompare_ function that update _message variable_ with _state variable_ values and a compare function that checks if name property of state change.
> - a button with a function attached to onClick event that increment _state id property_.
> - a button with a _useCallback_ function attached to onClick event.
> - a button with a _useCallbackCompare_ function attached to onClick event.
> 
> Since compare function compares only _name property_, useCallbackCompare don't update its state value and set always same message.


## API

```tsx
useMemoCompare<T = unknown, E = unknown>(cb: () => T, deps: DependencyListTyped<E>, compareFn?: CompareFn<E>):T
```

> ### Params
>
> - __factory__: _() => T_  
computes value.
> - __deps__: _DependencyListTyped_  
typed DependencyList.
> - __compareFn?__: _CompareFn_  
optional function that executes comparing between old and new `deps`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useMemo.
>


> ### Returns
>
> __result__: memoized value
> - _T_  
>