# useBeforeUnload
Hook to handle beforeunload event.

## Usage

```tsx
export const UseBeforeUnload = () => {
	useBeforeUnload({
		listener: useCallback((evt: BeforeUnloadEvent) => {
			evt.preventDefault();
			evt.returnValue = true;
		}, [])
	});

	return (<>
		<a href="/">Go To home</a>
	</>);
}
```

> The component uses _useBeforeUnload_ hook to ask confirm to user if he is sure to leave page when he changes page.


## API

```tsx
useBeforeUnload({element, listener, opts}:{ element?: RefObject<HTMLElement> | Window | undefined, listener: (evt: BeforeUnloadEvent) => void, opts?: boolean | AddEventListenerOptions}): ()=>void
```

> ### Params
>
> - __options__: _Object_
> - __options.listener__: _(evt: BeforeUnloadEvent) => void_  
listener to be executed on beforeunload event fired.
> - __options.element=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener.
> - __options.listenerOpts?__: _boolean | AddEventListenerOptions_  
options for listener
>

> ### Returns
>
> __remove__: function to manually remove listener.
> - _()=>void_  
>