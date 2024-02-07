# useLogger
Hook to log componet details during Lifecycle events. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useLogger)

## Usage

```tsx
const Counter = (props: {init: number}) => {
	const [state, setState] = useState<number>(props.init);
	useLogger("Counter", { state, props });

	return (<>
		<p>Counter is: {state}</p>
		<button type="button" onClick={() => setState(t => t + 1)}>Increment</button>
		<button type="button" onClick={() => setState(t => t - 1)}>Decrement</button>
	</>);
}
export const UseLogger = () => {
	const [state, setState] = useState(0);
	return <>
		<button type="button" onClick={() => setState(t => t + 1)}>Increment</button>
		<br/>
		<Counter init={state}/>
	</>
}
```

> The component uses _useLogger_ hook to trace component state in lifecycle events.


## API

```tsx
useLogger(name: string, props: object)
```

> ### Params
>
> - __name__: _string_  
component name.
> - __props__: _object_  
props object to track.
>


> ### Returns
>
> 
> 
>