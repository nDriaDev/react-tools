# useScrollIntoView
Hook to scroll an element into view. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useScrollIntoView)

## Usage

```tsx

export const UseScrollIntoView = () => {
	const { scroll, targetRef } = useScrollIntoView<HTMLParagraphElement, HTMLDivElement>({
		scrollableElement: ()=>document.querySelector('.container') as HTMLDivElement
	});

	return (
		<div>
			<button
				onClick={()=>scroll('start')}
			>
				Scroll to target
			</button>
			<div
				style={{
					width: '100%',
					height: '50vh',
				}}
			/>
			<p ref={targetRef}>Hello there</p>
		</div>
	);
}
```




## API

```tsx
useScrollIntoView<T extends Element, E extends Element | null = null>({ duration = 1000, axis = "y", animation = easeInOutSine, offset = 0, cancelable = false, onFinish, scrollableElement }: { duration?: number, axis?: "x" | "y", animation?: (t: number) => number, offset?: number, cancelable?: boolean, onFinish?: () => void, scrollableElement: (()=>E)|E|React.RefObject<E|null> }): { targetRef: React.MutableRefObject<T | null>, scroll: (alignment?: "start" | "center" | "end") => void, cancel: () => void }
```

> ### Params
>
> - __param__: _Object_
> - __param.duration=1000?__: _number_  
animation duration in milliseconds.
> - __param.axis="x"?__: _"x"|"y"_  
scrolling axis.
> - __param.animation=easeInOutSine?__: _(t:number)=>number_  
easing animation function. Refer to [https://easings.net/](https://easings.net/).
> - __param.offset=0?__: _number_  
additional distance.
> - __param.cancelable=false?__: _boolean_  
to establish if animation can be interrupted by user scroll.
> - __param.onFinish?__: _()=>void_  
callback to be executed when animation ends.
> - __param.scrollableElement?__: _(()=>E)|E|React.RefObject<E|null>_  
scrollable parent element, ref or function that returns element.
>


> ### Returns
>
> __result__: a __targetRef__ to target element, a __scroll__ function to start scrolling, a __cancel__ function to cancel scrolling.
> - __Object__:  
>     - __targetRef__ : _React.MutableRefObject<T|null>_  
>     - __scroll__ : _(alignment?: "start"|"center"|"end")=>void_  
>     - __cancel__ : _()=>void_  
>