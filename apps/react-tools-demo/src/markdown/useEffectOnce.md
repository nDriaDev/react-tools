# useEffectOnce
Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useEffectOnce)

## Usage

```tsx
const Child1 = () => {
	const [messages, setMessages] = useState<string[]>([]);

	useEffect(() => {
		setMessages(m => ([...m, "run effect"]));
		return () => {
			setMessages(m => ([...m, "run clean up function effect"]));
		}
	}, []);
	return (<div>
		<p><strong>UseEffect</strong></p>
		{messages.map((mess, index) => <p key={index}>{mess}</p>)}
	</div>);
}

const Child2 = () => {
	const [messages, setMessages] = useState<string[]>([]);

	useEffectOnce(() => {
		setMessages(m => ([...m, "run effect"]));
		return () => {
			setMessages(m => ([...m, "run clean up function effect"]));
		}
	});

	return (<div>
		<p><strong>UseEffectOnce</strong></p>
		{messages.map((mess, index) => <p key={index}>{mess}</p>)}
	</div>);
}

const UseEffectOnce = () => {
	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<Child1 />
			<Child2 />
		</div>
	);
};

UseEffectOnce.displayName = "UseEffectOnce";

export { UseEffectOnce };
```

> The component has:
> - a _Child1_ component with a _messages useState variable_ and _useEffect_ that sets a message for effect and clean up executions.
> - a _Child2_ component with a _messages useState variable_ and _useEffectOnce_ that sets a message for effect and clean up executions.
> 
> Since _React 18 StrictMode_ executes effects twice (mount - unmount - mount), the _useEffect_ will print _run effect_ message twice, _useEffectOnce_ no.


## API

```tsx
useEffectOnce(effect: EffectCallback)
```

> ### Params
>
> - __effect__: _EffectCallback_
>


> ### Returns
>
> 
> 
>