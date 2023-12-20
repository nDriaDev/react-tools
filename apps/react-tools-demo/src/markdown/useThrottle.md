# useThrottle
Hook to limit function execution frequency.

## Usage

```tsx
export const UseThrottle = () => {
	const [state, setState] = useState(0);
	const [fn, cancel, immediate] = useThrottle(
		useCallback(() => new Promise(res => setTimeout(() => res(setState(t => t + 1)), 3000)), []),
		{
			waitFn: true
		}
	);


	return (<div>
		<p>State is: {state}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<button onClick={fn}>Throttled increment</button>
			<button onClick={immediate}>Immediatly increment</button>
			<button onClick={cancel}>Cancel</button>
		</div>
	</div>);
}
```

> The component has:
> - A _state_ internal with _0_ value.
> - A _useThrottle_ hook that receives an async function that increments _state_ variable after 3 seconds and _waitFn_ true as option. It returns the debounced function _fn_, the function to cancel throttle limitation _cancel_ and the function _immediate_ to immediately execute function. Each function is executed by onClick event of three button elements.


## API

```tsx
useThrottle<T extends unknown[]>(fn: (...args: T) => void | Promise<void> , opts: { delay?: number, waitFn?: boolean }): [(...args: T) => void, () => void, (...args: T) => void]
```

> ### Params
>
> - __fn__: _T extends (...args: unknown[]) => void_  
The function to handle.
> - __opts__: _Object_  
options for throttle behaviors.
> - __opts.delay?__: _number_  
time in milliseconds to limit next function execution.
> - __opts.waitFn?__: _boolean_  
if true, next function execution taking place when current has finished.
>

> ### Returns
>
> __- array with throttled function, cancel function to allow other execution and immediate function to execute function immediately.__
> - __Array__:  
>     - _(...args: unknown[]) => void_  
>     - _()=>void_  
>     - _(...args: unknown[]) => void_  
>