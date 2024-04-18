# useEvents
Communication system based on Events pattern implemented on a EventTarget subclass. AddListener and dispatch functions to communicate. The result of invoking the _addListener_ function in turn returns a function that can be used to _removeListener_ on event. Otherwise, the listener is automatically removed when the component that has instantiated it is unmounted. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useEvents)

## Usage

```tsx
const ChildComponent = memo(() => {
	const [, dispatch] = useEvents();
	const onChange = useCallback((e: BaseSyntheticEvent) => {
		dispatch(new CustomEvent("demo", { detail: {value: e.target.value} }));
	}, [dispatch]);
	return (
		<input type="text" onChange={onChange} />
	);
})
const UseEvents = () => {
	const [state, setState] = useState({ value: "" });
	const [ addListener ] = useEvents();

	useEffect(() => {
		const unsub = addListener("demo", (evt) => {
			setState((evt as CustomEvent).detail);
		})
		return () => {
			unsub();
		}
	}, [addListener]);

	return <div>
		<p>Value is: {state.value}</p>
		<ChildComponent/>
	</div>
}

UseEvents.displayName = "UseEvents";

export { UseEvents };
```

> The component has:
> - A _useState_ that receives an object, with _value property.
> - A _useEvents_ that returns _addListener_ function.
> - A child component that has _useEvents_ that returns _dispatch_ function and renders an input text with an onChange handler that invoke the _dispatch_ function with a custom event with type _demo_ and with a custom event with input value as _detail_.
> 
> The main component calls _addlistener_ that updates component state inside an useEffect, in this way the listener _addListener_ is done only once and when the component is unmounted, it executes the _unlisten_.


## API

```tsx
useEvents(): [(type: string, callback:<T>(evt: Event|CustomEvent<T>) => void, options?: boolean | AddEventListenerOptions) => ()=>void, <T>(evt: Event|CustomEvent<T>) => void]
```





> ### Returns
>
> __result__: contains the _addListener_ and _dispatch_ functions.
> - __Union of__:  
>     - __Array__:  
>         - _(type: string, callback<T>:(evt: Even_  
>     - _CustomEvent<T>) => void, options?: boolean_  
>     - _AddEventListenerOptions) => ()=>void, <T>(evt: Event_  
>     - _CustomEvent<T>) => void]_  
>