# useCallbackDeepCompare
Custom useCallback that returns memoized callback that changes only if deps are different in depth. [See demo](https://react-tools.ndria.dev/#/hooks/performance/useCallbackDeepCompare)

## Usage

```tsx
const UseCallbackDeepCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [message, setMessage] = useState("Nothing to show...");

	const defaultCallback = useCallback(() => {
		setMessage(`useCallback: id:${state.id} - name:${state.name}`);
	}, [state]);

	const callbackCompare = useCallbackDeepCompare(
		() => {
			setMessage(`useCallbackDeepCompare: id:${state.id} - name:${state.name}`);
		},
		[state]
	);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{message}</p>
		<button style={{margin: '0 .25rem'}} onClick={() => setState(t => ({ ...t, id: t.id + 1 }))}>Increment state counter</button>
		<button style={{margin: '0 .25rem'}} onClick={defaultCallback}>Set defaultCallback message</button>
		<button style={{margin: '0 .25rem'}} onClick={callbackCompare}>Set callbackCompare message</button>
	</>);
};

UseCallbackDeepCompare.displayName = "UseCallbackDeepCompare";

export { UseCallbackDeepCompare };
```

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _message useState variable_ that's a string rendered in a tag p.
> - a _useCallback_ function that update _message variable_ with _state variable_ values.
> - a _useCallbackDeepCompare_ function that update _message variable_ with _state variable_ values.
> - a button with a function attached to onClick event that increment _state id property_.
> - a button with a _useCallback_ function attached to onClick event.
> - a button with a _useCallbackDeepCompare_ function attached to onClick event.
> 
> _useCallbackDeepCompare_ updates its state value and sets correct message since it compares changes in depth.


## API

```tsx
useCallbackDeepCompare<T extends Function>(cb: T, deps: DependencyList):T
```


> ### Params
>
> - __cb__: _T_  
callback.
> - __deps__: _React.DependencyList_  
DependencyList.
>



> ### Returns
>
> __cb__: memoized callback
> - _T_  
>