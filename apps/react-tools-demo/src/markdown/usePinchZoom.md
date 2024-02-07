# usePinchZoom
Hook to handle pinch zoom gestures. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/usePinchZoom)

## Usage

```tsx
export const UsePinchZoom = () => {
	const [state, setState] = useState("");
	const ref = useRef<HTMLDivElement>(null);
	const listener = useCallback((_:Event, type: "zoomIn" | "zoomOut") => {
		setState(type === "zoomIn" ? "Zooming in..." : "Zooming out...");
	}, []);
	usePinchZoom({
		listener,
		target: ref
	});

	return (
		<div ref={ref} style={{ margin: '0 auto', width: 300, height: 300, overflow: 'auto', resize: 'both', border: '1px solid lightblue' }}>
			{state}
		</div>
	);
}
```

> The component renders a bordered div element. When pinch zoom gestures are executed in this div, a message is shown inside it with zoom type.


## API

```tsx
usePinchZoom({ target = window, listener }: { target?: RefObject<HTMLElement> | Window, listener: (evt: PointerEvent, type: "zoomIn" | "zoomOut") => void | Promise<void> }): (()=>void)
```

> ### Params
>
> - __options__: _Object_
> - __options.listener__: _(evt: PointerEvent, type: "zoomIn"|"zoomOut") => void | Promise<void>_  
listener to be executed on pinch zoom event.
> - __options.target=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener.
>


> ### Returns
>
> __remove__: remove listener manually.
> - _()=>void_  
>