# useEffectCompare
Custom useEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useEffectCompare)

## Usage

```tsx
const UseEffectCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [messages, setMessages] = useState({ effect: "", effectCompare: "" });

	useEffect(() => {
		console.log("useEffect execution..");
		setMessages(m => ({ ...m, effect: `useEffect --> Current state is: id: ${state.id} - name: ${state.name}` }));
		return () => {
			console.log("useEffect clean up execution..");
			setMessages(m => ({ ...m, effect: "" }));
		}
	}, [state]);

	useEffectCompare(
		() => {
			console.log("useEffectCompare execution..");
			setMessages(m => ({ ...m, effectCompare: `useEffectCompare --> Current state is: id: ${state.id} - name: ${state.name}` }));
			return () => {
				console.log("useEffectCompare clean up execution..");
				setMessages(m => ({ ...m, effectCompare: "" }));
			}
		},
		[state],
		(oldDeps, newDeps) => oldDeps[0].name !== newDeps[0].name
	);


	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{messages.effect}</p>
		<p>{messages.effectCompare}</p>
		<button onClick={() => setState(t=> ({ ...t, id: t.id+1 }))}>Increment</button>
	</>);
};

UseEffectCompare.displayName = "UseEffectCompare";

export { UseEffectCompare };
```

> The component has:
> - a _state useState variable_ with _id_ and _name_ properties.
> - a _messages useState variable_ with _effect_ and _effectCompare_ properties that are rendered.
> - a _useEffect_ that update _messages effect property_ when _state_ change.
> - a _useEffectCompare_ that update _messages effect property_. CompareFn returns true when _state name property_ change.
> - a button with a function attached to onClick event that increment _state id property_.
> 
> Since compareFn compares only _name property_, useEffectCompare is reexecuted only once and its state value isn't updated. You can see this in dev tool console also.


## API

```tsx
useEffectCompare<T = unknown>(cb: EffectCallback, deps: DependencyListTyped<T>, compareFn?: CompareFn<T>)
```


> ### Params
>
> - __cb__: _EffectCallback_  
Imperative function that can return a cleanup function.
> - __deps__: _DependencyListTyped_  
typed dependency list.
> - __compareFn?__: _CompareFn_  
optional function that executes comparing between old and new `deps`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useEffect.
>



> ### Returns
>
> 
> - _void_  
>