# useIdle
Hook to invoke a callback when the browser is idle. Refer to [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) in React. The __options__ parameter differs from _IdleRequestOptions_ type: it adds the possibility to pass another property __unsupportedBehavior__ to specify what do if requestIdleCallback is not supported.

## Usage

```tsx
export const UseIdle = () => {
	const [iterations, setIterations] = useState(0);
	const [log, setLog] = useState("");
	const [invoke] = useIdle(() => setLog("RequestIdleCallback executed"));

	const start = async() => {
		invoke();
		for (let i = 0; i < 5_000; i++) {
			setTimeout(() => setIterations(i + 1), 5);
		}
	}
	const reset = () => {
		setLog("");
		setIterations(0);
	}
	return (<div>
		<p>Iterations are: {iterations}</p>
		<p>Log is: {log}</p>
		<button onClick={start}>START</button>
		<button onClick={reset}>RESET</button>
	</div>);
}
```

> The component has:
> - a __iterations__ variable of type string.
> - a __log__ variable of type string.
> - a function __invoke__ returned from _useIdle_ hook, initialized with a cb that update __log__ variable with message _"RequestIdleCallback executed"_.
> - a button start that when clicked executes __start__ function that executes __invoke__ function and updates __iterations__ variable inside a loop with iteration index.


## API

```tsx
useIdle (cb: (deadline?: IdleDeadline | DOMHighResTimeStamp | void) => void, opts?: {timeout: number , unsupportedBehavior?: "animationFrame" | "timeout" | "immediatly" }): [() => void, () => void] 
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