# useSwipe
Hook to handle swipe gesture. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useSwipe)

## Usage

```tsx
export const UseSwipe = () => {
	const divRef = useRef<HTMLDivElement>(null);
	useSwipe({
		target: divRef,
		onSwipe(_, direction, delta) {
			console.log(direction)
			delta.x >=0 && (divRef.current!.style.left = delta.x + "px");
		},
		onSwipeEnd(_, __, delta) {
			divRef.current!.style.left = `${delta.x>330 ? "400" : "0"}px`
		},
	});
	const reset = () => {
		divRef.current!.style.left = "0";
	}
	return <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 400, height: 100, border: "1px solid lightgray", overflow: "hidden", margin: "0 auto" }}>
		<button onClick={reset}>RESET</button>
		<div ref={divRef} style={{ position: "absolute", backgroundColor: "rgb(73 84 104)", zIndex: 100, inset: 0 }}><p>SWIPE</p></div>
	</div>
}
```

> The component uses _useSwipe_ hook to handle swipe event on a div element.


## API

```tsx
useSwipe({ target, onSwipeStart, onSwipe, onSwipeEnd, options }: UseSwipeProps): UseSwipeResult
```

> ### Params
>
> - __param__: _UseSwipeProps_  
object
> - __param.target__: _RefObject<Element>|Element_  
element on which attach swipe event.
> - __param.onSwipeStart?__: _(e: MouseEvent|TouchEvent) => void_  
callback that will be executed when swipe starts.
> - __param.onSwipe?__: _(e: MouseEvent|TouchEvent, direction: SwipeDirection, delta: {x: number, y: number}) => void_  
callback that will be executed when swipe moves.
> - __param.onSwipeEnd?__: _(e: MouseEvent|TouchEvent, direction: SwipeDirection, delta: { x: number, y: number }) => void_  
callback that will be executed when swipe ends.
> - __param.options?__: _Object_  
object to set option for listener.
> - __param.options.passive=true?__: _boolean_  
if true, handler callback never calls _preventDefault_ method.
> - __param.options.threshold=0?__: _threshold_  
a threshold value for swipe event.
>


> ### Returns
>
> __- callback that stops listener.__
> - _UseSwipeResult_  
>