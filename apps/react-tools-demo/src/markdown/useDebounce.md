# useDebounce
Hook to delay a function execution with possibility to cancel execution and to invoke them immediately. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDebounce)

## Usage

```tsx
export const UseDebounce = () => {
	const [state, setState] = useState("");
	const [toggle, setToggle] = useState(true);
	const [fn, cancel, immediate] = useDebounce(
		useCallback((e: BaseSyntheticEvent) => setState(e.target.value), []),
		{
			delay: 1000
		}
	);

	const onChange = useCallback((e: BaseSyntheticEvent) => {
		toggle
			? fn(e)
			: immediate(e)
	}, [fn, immediate, toggle]);

	return (<div>
		<p>State is: {state}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<input type="text" onChange={onChange} />
			<button onClick={cancel}>Cancel</button>
			<button onClick={() => setToggle(t => !t)}>{toggle ? "Active immediate" : "Active debounced"}</button>
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
useDebounce<T extends unknown[]>(fn: (...args: T)=>void, opts: { delay: number, focusedWindow?: boolean }): [(...args: T) => void, () => void, (...args: T) => void]
```


> ### Params
>
> - __fn__: _T extends (...args: unknown[]) => void_  
The function to debounce.
> - __opts__: _Object_  
options for debounce behaviors.
> - __opts.delay__: _number_  
time in milliseconds to delay function execution.
> - __opts.focusedWindow?__: _boolean_  
if true, the function is executed after delay but only if the window is focused. __N.B._: works only in browser context.
>



> ### Returns
>
> __- array with debounced function, cancel function to abor debounced function and and immediate function to execute function immediately.__
> - __Array__:  
>     - _(...args: unknown[]) => void_  
>     - _()=>void_  
>     - _(...args: unknown[]) => void_  
>