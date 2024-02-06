# useDerivedState
Hook useful when the internal state of a component depends on one or more props. It receives an _initial state_ and a _dependency array_ that works the same way as that of a _useEffect_, _useMemo_, and _useCallback_. Every time the dependencies change, the __derived state__ is resetted to _initial state_. A third optional parameter can be passed, to execute a _compute_ function after the dependencies are updated, without having a _useEffect_ within the component. [See demo](https://ndriadev.github.io/react-tools/#/hooks/state/useDerivedState)

## Usage

```tsx
export const UseDerivedState = () => {
	const [state, setState] = useState("");
	const [state1, setState1] = useState("");
	const [state2, setState2] = useState("");

	return <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50, maxHeight: 350, overflow: "auto" }}>
		<div>
			<p>Without useDerivedState</p>
			<input type="text" placeholder="User.." value={state1} onChange={(e) => setState1(e.target.value)} />
			<WithoutUseDerivedState user={state1} />
		</div>
		<div>
			<p>With useDerivedState</p>
			<input type="text" placeholder="User.." value={state} onChange={(e) => setState(e.target.value)} />
			<WithUseDerivedState user={state} />
		</div>
		<div>
			<p>With useDerivedState and compute</p>
			<input type="text" placeholder="User.." value={state2} onChange={(e) => setState2(e.target.value)} />
			<WithUseDerivedStateAndCompute user={state2} />
		</div>
	</div>
}

const WithoutUseDerivedState = memo(({user}:{user:string}) => {
	renders[1]++;
	const [state, setState] = useState<{ loading: boolean, friends: string[] }>({ loading: true, friends: [] });

	useEffect(() => {
		setState({ loading: true, friends: [] });
		serverAPI(user).then(data => setState({ loading: false, friends: data }));
	}, [user])

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[1]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})

const WithUseDerivedStateAndCompute = memo(({ user }: { user: string }) => {
	renders[2]++;
	const [state, setState] = useDerivedState<{ loading: boolean, friends: string[] }>(
		{ loading: true, friends: [] },
		[user],
		() => {
			state.loading && serverAPI(user).then(data => {
				setState({ loading: false, friends: data })
			});
		}
	);

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[2]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})

const WithUseDerivedState = memo(({ user }: { user: string }) => {
	renders[3]++;
	const [state, setState] = useDerivedState<{loading: boolean, friends: string[]}>(
		{ loading: true, friends: [] },
		[user]
	);

	useEffect(() => {
		serverAPI(user).then(data => {
			setState({ loading: false, friends: data })
		});
	}, [setState, user]);

	return <>
		<h2>User: {user}</h2>
		<h3>Renders: {renders[3]}</h3>
		{
			state.loading
				? "Loading..."
				: <ul>
					{
						state.friends.map(f => <li key={f}>{f}</li>)
					}
				</ul>
		}
	</>
})
```

> The component has _three internal string states_ and renders three input fields and three components that receive one state each. These three components have an object as internal state with two properties _loading_, initially set to __true__, and _friends_ which is an initially empty array.
> Based on the _user_ prop they receive, they set the _loading_ property of the internal state to __true__ and invoke a _serverAPI_ function that simulates a backend call and returns a list of names filtered by the passed _prop_. This list values the _friends_ property of the internal state and this list together with the passed _user_ prop are rendered:
> - The _Without useDerivedState_ component uses the _useState_ and _useEffect_ hooks to implement this logic.
> - The _With useDerivedState_ component uses the _useDerivedState_ hook and the _useEffect_.
> - The _With useDerivedStateAndCompute_ component uses the _useDerivedState_ hook and the optional third parameter to implement all logic.
> 
> Each component also renders a counter of the times it is rendered.
> 
> The component without _useDerivedState_ hook is rendered one more time every time its _prop_ changes while the other two have the same number of renders.
> 
> Furthermore, if you debug the code you can see how in the first component there is no synchronization in the updating of the values since in a first render the rendered _prop_ user is updated and in a second render the writing `loading` is rendered instead of the list of names.


## API

```tsx
useDerivedState<T>(initialState: T | (() => T), deps: DependencyList, compute?: EffectCallback): [T, Dispatch<SetStateAction<T>>]
```

> ### Params
>
> - __initialState__: _T|()=>T_
> - __deps__: _DependencyList_  
dependencies list from which depends derived state.
> - __compute?__: _EffectCallback_  
function that will be executed when dependencies list change after resetting derived state to __initialState__.
>

> ### Returns
>
> __result__: array with a stateful value and a function to update it.
> - __Array__:  
>     - _T_  
>     - _Dispatch<SetStateAction<T>>_  
>