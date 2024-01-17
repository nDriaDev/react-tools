# useContextMenu
Hook to add contextmenu event listener. The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.

## Usage

```tsx
export const UseContextMenu = () => {
	const pRef = useRef<HTMLParagraphElement>(null);
	useContextMenu({
		element: pRef,
		listener: useCallback((evt: PointerEvent) => {
			evt.preventDefault();
		}, [])
	});

	return <div>
		<p ref={pRef}>The context menu on this paragraph is disabled.</p>
		<p>On this paragraph context menu is enabled.</p>
	</div>
}
```

> The component uses _useContextMenu_ hook and renders two paragraph. It uses the hook to disabled native contextmenu event on first paragraph.


## API

```tsx
useContextMenu({ element, listener, effectType, listenerOpts }: { element: RefObject<HTMLElement> | Window, listener: (evt: PointerEvent) => void | Promise<void>, effectType?: "normal" | "layout", listenerOpts?: boolean | AddEventListenerOptions | undefined })
```

> ### Params
>
> - __param__: _Object_  
props
> - __param.listener?__: _(evt: PointerEvent)=>void|Promise<void>_  
listener function executed when event fires.
> - __options.element=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener.
> - __param.effectType="normal"?__: _"normal"|"layout"_  
props
> - __param.listenerOpts?__: _boolean | AddEventListenerOptions_  
props
>

> ### Returns
>
> 
> 
>