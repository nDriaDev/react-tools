# useTextSelection
Hook to track text selection. Refers to [Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection). [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useTextSelection)

## Usage

```tsx
export const UseTextSelection = () => {
	const ref = useRef<HTMLDivElement>(null);
	const selection = useTextSelection({ target: ref, onEnd: () => {getSelection()?.removeAllRanges()} });
	const rectangles = useMemo(() => {
		if (!selection) {
			return null;
		} else {
			const rectangles = [];
			rectangles.push(
				<div
					key="outside-rectangle"
					style={{
						position: "absolute",
						border: ".5px solid red",
						top: selection.outsideRectangle.top + "px",
						left: selection.outsideRectangle.left + "px",
						width: selection.outsideRectangle.width + "px",
						height: selection.outsideRectangle.height + "px",
					}}
				></div>
			);
			selection.innerRectangles.forEach((el, index) => {
				rectangles.push(<div
					key={"inner-rectangle-"+index}
					style={{
						position: "absolute",
						border: ".5px solid darkcyan",
						top: el.top + "px",
						left: el.left + "px",
						width: el.width + "px",
						height: el.height + "px",
					}}
				></div>);
			})
			return rectangles;
		}
	}, [selection]);

	return <div style={{ display: "grid", gridTemplateColumns: "50% 50%", columnGap: 15 }}>
		<div ref={ref} style={{ position: "relative", border: "1px solid lightgray" }}>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			{rectangles}
		</div>
		<div style={{textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto", border: "1px solid lightgray"}}>
			<p><strong>Selection:</strong></p>
			<pre>{JSON.stringify(selection, null, 2)}</pre>
		</div>
	</div>
}
```

> The component renders a grid with two columns. First column contains _two tag p elements_ with text and secondo column the result of _useTextSelection hook_.
> 
> _useTextSelection_ is initialized with a _target_ property that has a ref attached to first column div and _onEnd_ property that has a function that clean selection. When text is selected appears colored rectangles with the coordinates returned from hook.


## API

```tsx
useTextSelection({ target, onStart, onChange, onEnd }: { target?: RefObject<HTMLElement> | HTMLElement, onStart?: (evt: Event) => void, onChange?: (evt: Event) => void, onEnd?: (evt: Event) => void } = {}): TextSelection | null
```


> ### Params
>
> - __param__: _Object_  
object with selection properties
> - __param.target?__: _RefObject<HTMLElement> | HTMLElement_  
element in which allow selection. Default is _document.body_.
> - __param.onStart?__: _(evt: Event) => void_  
function to execute when selection starts.
> - __param.onChange?__: _(evt: Event) => void_  
function to execute while selection changes.
> - __param.onEnd?__: _(evt: Event) => void_  
function to execute while selection ends.
>



> ### Returns
>
> __TextSelection__: object with: _text_: selected text; _direction_: selection direction; _outsideRectangle_: a __DOMRect__ of selection rectangle; _innerRectangles_: list of __DOMRect__ representing the selection slices.
> - __Object__:  
>     - __text__ : _string_  
>     - __direction__ : _"forward"|"backward"_  
>     - __outsideRectangle__ : _DOMRect_  
>     - __innerRectangles__ : _DOMRect[]_  
>