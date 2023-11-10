# useEventListener
Hook to simplify add and remove EventListener use. It's persist during rerendering and automatically remove eventlistener on unMount component lifecycle.

## Usage

```tsx
const UseEventListener = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const remove = useEventListener({ type: "click", listener: (e: Event) => console.log(e) });
	useEventListener({
		type: "click", listener: (e: Event) => {
			e.stopPropagation();
	}, element: buttonRef, listenerOpts: {capture: true} });

	return (<>
		<button onClick={() => remove()}>Remove</button>
		<button ref={buttonRef} style={{marginLeft: 10}}>click to log</button>
	</>);
}

UseEventListener.displayName = "UseEventListener";

export { UseEventListener };
```

> The component has:
> - A _buttonRef_ ref variable linked to an button node element with text click to log.
> - A _useEventListener_ invocation with these options: _type_="click", _listener_=(e:Event)=>console.log(e). So the eventListener is attached to window and the invocation result is used to initialize a variable remove that remove the eventListener.
> - A _useEventListener_ invocation like that above but attached at button node by _buttonRef_ with _listenerOpts_ capture=_true_ and that stops event propagation.
> - A _button_ with text Remove that, if clicked, invokes the removeEventListener.
> 
> At every click on Demo area the eventListener attached on object window logs in console the event, while the eventListener attached on button logs when button is clicked. When button remove is clicked it removes the eventListener on window object. The button eventListener is removed during component unmount.


## API

```tsx
useEventListener ({ type, listener, element = window, listenerOpts }: { type: string, listener: (evt: Event | CustomEvent) => void, element?: RefObject<HTMLElement> | Window, listenerOpts?: boolean | AddEventListenerOptions}) 
```

> ### Params
>
> - __options__: _Object_
> - __options.type__: _string_  
event type
> - __options.listener__: _(evt: Event | CustomEvent) => void_  
listener to be executed on specified event
> - __options.element=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener
> - __options.listenerOpts?__: _boolean | AddEventListenerOptions_  
options for listener
>

> ### Returns
>
> __remove__: used to manually remove the eventListener
> - _()=>void_  
>