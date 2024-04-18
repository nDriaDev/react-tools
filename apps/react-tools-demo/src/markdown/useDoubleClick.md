# useDoubleClick
Hook to handle double click event. Double clicking in react as well as with vanilla js, it is possible to manage it but it is not possible to have both managers on the same element. Thanks to this hook it is possible to do this, and it works with all events that can be associated with a user click (for example _mousedown_ but also _touchstart_). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useDoubleClick)

## Usage

```tsx
export const UseDoubleClick = () => {
	const [message, setMessage] = useState("");
	const handler = useDoubleClick({
		doubleClick: useCallback(() => {
			setMessage("Double click executed.")
		}, []),
		singleClick: useCallback(() => {
			setMessage("Single click executed.")
		}, [])
	});

	return <div>
		<p>Message: {message}</p>
		<button onClick={handler}>Click/DoubleClick</button>
	</div>
}
```

> The component renders a tag p with __message__ state variable and a button which has an onClick handler. Its handler is __handler__, the returned function of _useDoubleClick_ hook that set __message__ value in different way by click type.


## API

```tsx
useDoubleClick<T extends Element = Element, E extends Event = Event>(handler: ((evt: SyntheticEvent<T, E>) => Promise<void> | void) | { doubleClick: (evt: SyntheticEvent<T, E>) => Promise<void> | void, singleClick?: (evt: SyntheticEvent<T, E>) => Promise<void> | void, tolerance?: number }): ((evt: SyntheticEvent<T, E>) => Promise<void> | void)
```


> ### Params
>
> - __handler__: _((evt: SyntheticEvent<T, E>) => Promise<void>|void)|Object_
> - __handler.doubleClick__: _((evt: SyntheticEvent<T, E>) => Promise<void> | void)_  
callback executed on double click.
> - __handler.singleClick?__: _((evt: SyntheticEvent<T, E>) => Promise<void> | void)_  
callback executed on single click.
> - __handler.tolerance=300?__: _number_  
delay to execute __singleClick__ callback.
>



> ### Returns
>
> __callback__
> - _((evt: SyntheticEvent<T, E>) => Promise<void>|void)_  
>