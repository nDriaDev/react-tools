# useRequestIdleCallback
Hook to use [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) in React. The __options__ parameter differs from _IdleRequestOptions_ type: it adds the possibility to pass another property __unsupportedBehavior__ to specify what do if requestIdleCallback is not supported.

## Usage

```tsx
export const UseRequestIdleCallback = () => {
	const [iterations, setIterations] = useState(0);
	const [log, setLog] = useState("");
	const [invoke] = useRequestIdleCallback(() => setLog("RequestIdleCallback executed"));
		invoke();
	const start = () => {
		invoke();
		for (let i = 0; i < 1_000_000; i++) {
			setIterations(i);
		}
	}
	return (<div>
		<p>Iterations are: {iterations}</p>
		<p>Log is: {log}</p>
		<button onClick={start}>START</button>
	</div>);
}
```

> The component has:
> - a __iterations__ variable of type string.
> - a __log__ variable of type string.
> - a function __invoke__ returned from _useRequestIdleCallback_ hook, initialized with a cb that update __log__ variable with message _"RequestIdleCallback executed"_.
> - a button start that when clicked executes __start__ function that executes __invoke__ function and updates __iterations__ variable inside a loop of 1 million iterations with iteration index.


## API

```tsx
useRequestIdleCallback (cb: (deadline?: IdleDeadline | DOMHighResTimeStamp | void)=> void, opts?: IdleRequestOptions & { unsupportedBehavior: "animationFrame" | "timeout" | "immediatly" }): [() => void, () => void] 
```

> ### Params
>
> - __cb -callback that should be called in the near future.__: _(deadline?: IdleDeadline | DOMHighResTimeStamp | void)=> void_
> - __opts?__: _IdleRequestOptions & { unsupportedBehavior: "animationFrame"|"timeout"|"immediatly" }_  
Contains optional configuration parameters.
>

> ### Returns
>
> __result__: array where functions to invoke and cancel execution.
> - __Array__:  
>     - _()=>void_  
>     - _()=>void_  
>