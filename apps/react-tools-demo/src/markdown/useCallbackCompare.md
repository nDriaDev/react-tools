# useCallbackCompare
Custom useCallback that returns memoized callback that changes only when comparator function, received as third parameter, returns true. [See demo](https://nDriaDev.io/react-tools/#/hooks/performance/useCallbackCompare)

## Usage

```tsx
const UseCallbackCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [message, setMessage] = useState("Nothing to show...");

	const defaultCallback = useCallback(() => {
		setMessage(`useCallback: id:${state.id} - name:${state.name}`);
	}, [state]);

	const callbackCompare = useCallbackCompare(
		() => {
			setMessage(`useCallbackCompare: id:${state.id} - name:${state.name}`);
		},
		[state],
		(oldDeps, newDeps) => oldDeps[0].name !== newDeps[0].name
	);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{message}</p>
		<button style={{margin: '0 .25rem'}} onClick={() => setState(t => ({ ...t, id: t.id + 1 }))}>Increment state counter</button>
		<button style={{margin: '0 .25rem'}} onClick={defaultCallback}>Set defaultCallback message</button>
		<button style={{margin: '0 .25rem'}} onClick={callbackCompare}>Set callbackCompare message</button>
	</>);
};

UseCallbackCompare.displayName = "UseCallbackCompare";

export { UseCallbackCompare };
```

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a useMemo that return that value of _state variable_.
> - a useMemoCompare that return that value of _state variable_ and a function compare that compares _state name property_.
> - a button with a function attached to onClick event that increment _state id property_.
> 
> Since compare function compares only _name property_, useMemoCompare is executed only once and its state value isn't updated. You can see this in dev tool console also.


## API

```tsx
useCallbackCompare<T extends Function, E = unknown>(cb: T, deps: DependencyListTyped<E>, compareFn?: CompareFn<E>):T
```

> ### Params
>
> - __cb__: _T_  
callback.
> - __deps__: _DependencyListTyped_  
typed DependencyList.
> - __compareFn?__: _CompareFn_  
optional function that executes comparing between old and new `deps`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useCallback.
>

> ### Returns
>
> __cb__: memoized callback
> - _T_  
>