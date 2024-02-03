# useEventDispatcher
Hook to dispatch an Event or a CustomEvent. [See demo](https://nDriaDev.io/react-tools/#/hooks/events/useEventDispatcher)

## Usage

```tsx
export const UseEventDispatcher = () => {
	const [state, setState] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useEventDispatcher(inputRef);

	const onSubmit = useCallback((e: BaseSyntheticEvent) => {
		dispatch(new CustomEvent("demo", { detail: e.target[0].value }));
		e.preventDefault();
	}, [dispatch]);

	useEventListener({
		type: "demo",
		element: inputRef,
		listener: (evt: CustomEvent) => {
			setState((evt as CustomEvent<string>).detail);
		},
	});

	return (<>
		<em>State is: </em> {state}
		<br />
		<form noValidate onSubmit={onSubmit}>
			<input type="text" ref={inputRef}/>
		</form>
	</>)

}
```

> The component has:
> - A state variable.
> - An _inputRef_ ref variable attacched to an input element contained in a form.
> - An dispatch function returned from _useEventDispatcher_ with _inputRef_ as element.
> - An onSubmit function to handle form onSubmit that invokes _dispatch_ function with a CustomEvent("demo") which detail is valued with input value taken from onSubmit event.
> - A useEventListener of type _demo_, on element _inputRef_ and with a listener that takes CustomEvent and invokes setState with event detail.


## API

```tsx
useEventDispatcher(element: RefObject<HTMLElement> | Window = window): (evt: Event | CustomEvent) => void
```

> ### Params
>
> - __element=window?__: _RefObject<HTMLElement> | Window_  
target on which dispatch event
>

> ### Returns
>
> __dispatch__: function that dispatch the event on target
> - __Union of__:  
>     - _(evt: Event_  
>     - _CustomEvent) => void_  
>