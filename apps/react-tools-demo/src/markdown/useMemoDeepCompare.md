# useMemoDeepCompare
Custom useMemo that returns memoized value that changes only if deps are different in depth. [See demo](https://ndriadev.github.io/react-tools/#/hooks/performance/useMemoDeepCompare)

## Usage

```tsx
const UseMemoDeepCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [renders, setRenders] = useState({memo:0, deepMemo: 0});

	const defaultMemo = useMemo(() => {
		console.log("Render defaultMemo");
		setRenders(r => ({...r, memo: r.memo+1}));
		return `useMemo: id:${state.id} - name:${state.name}`
	}, [state]);

	const memoCompare = useMemoDeepCompare(() => {
		console.log("Render memoDeepCompare");
		setRenders(r => ({...r, deepMemo: r.deepMemo+1}));
		return `useMemoDeepCompare: id:${state.id} - name:${state.name}`
	}, [state]);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{defaultMemo}{` ---> render: ${renders.memo}`}</p>
		<p>{memoCompare}{` ---> render: ${renders.deepMemo}`}</p>
		<button onClick={() => setState(t=> ({ ...t}))}>Increment</button>
	</>);
};

UseMemoDeepCompare.displayName = "UseMemoDeepCompare";

export { UseMemoDeepCompare };
```

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _renders useState variable_ with _memo_ and _deepMemo_ properties.
> - a useMemo that returns that value of _state object_ and updates _renders memo property_.
> - a useMemoDeepCompare that returns that value of _state object_ and updates _renders deepMemo property_.
> - a button with a function attached to onClick event that assigns to _state variable_ the same value.
> 
> Since _useMemoDeepCompare_ checks for differences in depth, it is executed only once and it don't update renders deepMemo property. You can see this in dev tool console also.


## API

```tsx
useMemoDeepCompare<T=unknown>(cb: () => T, deps: DependencyList):T
```

> ### Params
>
> - __factory__: _() => T_  
computes value.
> - __deps__: _DependencyList_  
DependencyList.
>


> ### Returns
>
> __result__: memoized value
> - _T_  
>