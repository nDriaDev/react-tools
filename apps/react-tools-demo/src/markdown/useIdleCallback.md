# useIdleCallback
Hook to invoke a callback when the browser is idle. Refer to [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) in React. The __options__ parameter differs from _IdleRequestOptions_ type: it adds the possibility to pass another property __unsupportedBehavior__ to specify what do if requestIdleCallback is not supported. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useIdleCallback)

## Usage

```tsx
export const UseIdleCallback = () => {
	const [iterations, setIterations] = useState(0);
	const [log, setLog] = useState("");
	const [isSupported, invoke] = useIdleCallback(() => setLog("RequestIdleCallback executed"));

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
		<p>Supported: {isSupported ? "Yes" : "No"}</p>
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
> - a function __invoke__ returned from _useIdleCallback_ hook, initialized with a cb that update __log__ variable with message _"RequestIdleCallback executed"_.
> - a button start that when clicked executes __start__ function that executes __invoke__ function and updates __iterations__ variable inside a loop with iteration index.


## API

```tsx
useIdleCallback(cb: (deadline?: IdleDeadline | DOMHighResTimeStamp | void) => void, opts?: {timeout: number , unsupportedBehavior?: "animationFrame" | "timeout" | "immediatly" }): [boolean, () => void, () => void]
```


> ### Params
>
> - __cb -callback that should be called in the near future.__: _(deadline?: IdleDeadline | DOMHighResTimeStamp | void)=> void_
> - __opts?__: _IdleRequestOptions & { unsupportedBehavior: "animationFrame"|"timeout"|"immediatly" }_  
Contains optional configuration parameters.
>



> ### Returns
>
> __result__:  __Array__:  
    - _()=>void_  
    - _()=>void_  
> Array with three elements:
> - first element: __isSupported__; boolean value that indicates if _requestIdleCallback_ is supported or not.
> - second element: __invoke__: function to invoke execution.
> - third element: __cancel__: function to cancel execution.
>