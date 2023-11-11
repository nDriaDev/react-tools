# useThrottle
Hook to limit function execution frequency.

## Usage

```tsx
export const UseThrottle = () => {
	const [state, setState] = useState(0);
	const [fn, cancel, immediate] = useThrottle(
		useCallback(() => setState(t => t+1), []),
		{
			delay: 3000
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
> - A _state_ internal state.
> - A _toggle_ internal state used to choice which function execute on the OnChange event of the input element.
> - A _useDebounce_ hook that receives a function that updates _state_ variable with input element value and a delay of 1000ms. It returns the debounced function _fn_, the function to cancel debounced function execution _cancel_ and the function to immediately execute function _immediate_.
> - A _useCallback_ setted as Onchange function of the input element that executes _fn_ or _immediate_ to handle onChange, by _toggle_ value.


## API

```tsx
useThrottle <T extends unknown[]>(fn: (...args: T) => void | Promise<void> , opts: { delay?: number, waitFn?: boolean }): [(...args: T) => void, () => void, (...args: T) => void] 
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
>     - _(...args: unknown[]) => void, ()=>void, (...args: unknown[]) => void_  
>