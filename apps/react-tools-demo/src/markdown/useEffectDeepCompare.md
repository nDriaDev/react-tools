# useEffectDeepCompare
Custom useEffect that reexecutes EffectCallback only when deps are different in depth.

## Usage

```tsx
const UseEffectDeepCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [renders, setRenders] = useState({memo:0, deepMemo: 0});

	useEffect(() => {
		console.log("Render default useEffect");
		setRenders(r => ({...r, memo: r.memo+1}));
	}, [state])

	useEffectDeepCompare(() => {
		console.log("Render memoDeepCompare");
		setRenders(r => ({...r, deepMemo: r.deepMemo+1}));
	}, [state]);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>useEffect render: {renders.memo}</p>
		<p>useEffectDeepCompare render: {renders.deepMemo}</p>
		<button onClick={() => setState(t=> ({ ...t}))}>Increment</button>
	</>);
};

UseEffectDeepCompare.displayName = "UseEffectDeepCompare";

export { UseEffectDeepCompare };
```

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _renders useState variable_ with _memo_ and _deepMemo_ properties.
> - a useEffect that updates _renders memo property_ when _state variable_ change.
> - a useMemoDeepCompare that updates _renders deepMemo property_ when _state variable_ change.
> - a button with a function attached to onClick event that assigns to _state variable_ the same value.
> 
> Since useEffectDeepCompare checks for differences in depth, it is executed only once and it don't update renders deepMemo property. You can see this in dev tool console also.


## API

```tsx
useEffectDeepCompare(cb: EffectCallback, deps: DependencyList):void
```

> ### Params
>
> - __cb__: _EffectCallback_  
Imperative function that can return a cleanup function.
> - __deps__: _DependencyList_  
dependency list.
>

> ### Returns
>
> 
> - _void_  
>