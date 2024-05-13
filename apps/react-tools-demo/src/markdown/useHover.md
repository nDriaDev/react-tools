# useHover
Hook that determines whether the item is hovered or not and handles state hovers. [See demo](https://react-tools.ndria.dev/#/hooks/events/useHover)

## Usage

```tsx
export const UseHover = () => {
	const pRef = useRef<HTMLParagraphElement>(null);
	const hover = useHover(pRef);

	return (
		<div>
			<p>Is hover: {hover ? "hover" : "not hover"}</p>
			<p ref={pRef}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id delectus deserunt atque! Est id voluptatem sint accusamus non doloribus totam nobis nostrum provident facilis eos eum, placeat consequatur minus quidem.</p>
		</div>
	);
}
```

> The component renders a paragraph element with some text to which is attacched a ref used for __useHover__ hook that returns if element is hovered or not. This value is rendered into another paragraph element.
> 
> When mouse is hovered paragraph element, status changes to true.


## API

```tsx
useHover(target: RefObject<HTMLElement> | HTMLElement, opts?: { onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: boolean }): boolean | void
```


> ### Params
>
> - __target__: _RefObject<HTMLElement> | HTMLElement_  
DOM element or ref
> - __opts?__: _{ onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: boolean }_  
__onEnter__ function to be executed on starting hover, __onLeave__ function to be executed on hover finished, __onChange__ function to be executed when hover state changes, __return value__ boolean to return hover state value or not.
>



> ### Returns
>
> __result__: if __returnValue__ option is true or not specified, hook return state hover value, otherwise returns nothing.
> - _boolean|void_  
>