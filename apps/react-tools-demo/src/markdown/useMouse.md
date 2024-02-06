# useMouse
Hook to track mouse position also in relationship with an element. It works with pointerEvents. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMouse)

## Usage

```tsx
export const UseMouse = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { x, y, relativeElementDim: { top = null, left = null, width = null, height = null } = {} } = useMouse({ relativeElement: ref });

	return (
		<>
			<div
				ref={ref}
				style={{
					width: '200px',
					height: '200px',
					backgroundColor: 'gray',
					color: 'white',
					lineHeight: '200px',
					textAlign: 'center',
				}}
			>
				element
			</div>
			<div>
				<p>
					Mouse Position relative to Element - x: {x}, y: {y}
				</p>
				<p>
					Element Dimensions - top: {top}  left: {left}  width: {width}  height: {height}
				</p>
			</div>
		</>
	);
}
```

> The component tracks the relative mouse position to _element_


## API

```tsx
useMouse(opts: { type?: "client" | "page" | "screen", relativeElement?: RefObject<HTMLElement | null> | HTMLElement } = { type: "client" }): { x: number | null, y: number | null } | { x: number | null, y: number | null, relativeElementDim?: DOMRect }
```

> ### Params
>
> - __opts__: _Object_
> - __opts.type="client"?__: _"client"|"page"|"screen"_  
position by client page or screen.
> - __opts.relativeElement?__: _RefObject<HTMLElement> | HTMLElement_  
if it is presents, position is relative to element.
>

> ### Returns
>
> __ object__: postion by axis and if relativeElement is present, relativeElement dimensions also.
> - __Union of__:  
>     - __Object__:  
>         - __x__ : _number|null_  
>         - __y__ : _number|null_  
>     - __Object__:  
>         - __x__ : _number|null_  
>         - __y__ : _number|null_  
>         - __relativeElementDim?__ : _DOMRec_  
>