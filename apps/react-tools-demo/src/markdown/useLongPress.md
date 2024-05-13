# useLongPress
Hook to execute a callback on a long press event. [See demo](https://react-tools.ndria.dev/#/hooks/events/useLongPress)

## Usage

```tsx
export const UseLongPress = () => {
	const [pressCounter, setPressCounter] = useState(0);
	const [clickCounter, setClickCounter] = useState(0);
	const [color, setColor] = useState(-1)


	const cbRef = useLongPress<HTMLButtonElement>(() => {
		setPressCounter((s) => s + 1);
		setColor(1);
	}, {
		normalPress: () => setClickCounter((s) => s + 1),
		onStart() {
			setColor(0);
		},
		onFinish() {
			setColor(-1);
		},
	});

	return (
		<div>
			<button ref={cbRef} type="button" style={{ ...(color === -1 ? {} : { backgroundColor: color === -1 ? "inherit" : color === 0 ? "#8e830f" : "#0b5f07"})}}>
				Press me
			</button>
			<p>pressCounter: {pressCounter}</p>
			<p>clickCounter: {clickCounter}</p>
		</div>
	);
}
```

> The component has:
> - a __pressCounter__ state variable.
> - a __clickCounter__ state variable.
> - a RefCallback __cbRef__ attached to a button __Press me__. It is returned from _useLongPress_ hook that has a cb a function to update __pressCounter__ state and _normalPress_ option to update __clickCounter__ state.
> - it renders a div with __Press me__ button and two p elements that display __pressCounter__ and __clickCounter__.
> 
> When the button is clicked for less than a second, _normalPress_ callback is executed, otherwise _long press_ callback is executed.


## API

```tsx
useLongPress<T extends Element = Element, E extends Event = Event>(cb: useLongPressCallback<E>, { duration = 1000, normalPress, onStart, onFinish }: useLongPressOptions<E>): RefCallback<T>
```


> ### Params
>
> - __cb__: _(evt:E)=>void_  
callback to execute after a certain duration.
> - __opts__: _Object_
> - __opts.duration=1000?__: _number_  
long press event duration in milliseconds.
> - __opts.onStart?__: _(evt:E)=>void_  
callback that will be executed on initial press event.
> - __opts.onFinish?__: _(evt:E)=>void_  
callback that will be executed when long press callback has done.
> - __opts.normalPress?__: _(evt:E)=>void_  
callback executed on normal press event.
>



> ### Returns
>
> __ref callback__: to be attached on target element.
> - _RefCallback<T>_  
>