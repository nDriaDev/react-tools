# useSwipe
Hook to handle swipe gesture.

## Usage

```tsx
export const UseSwipe = () => {
	return <div style={{ position: "relative", width: 400, height: 100, border: "1px solid lightgray" }}>
		<div style={{position: "absolute", backgroundColor: "lightgray", width: 400, height: 100}}></div>
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
> - __param.onSwipeStart?__: _(e: PointerEvent) => void_  
callback that will be executed when swipe starts.
> - __param.onSwipe?__: _(e: PointerEvent, direction: SwipeDirection, delta: {x: number, y: number}) => void_  
callback that will be executed when swipe moves.
> - __param.onSwipeEnd?__: _(e: PointerEvent, direction: SwipeDirection, delta: {x: number, y: number}) => void_  
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