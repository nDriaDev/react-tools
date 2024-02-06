# useClickOutside
Hook to listen and execute an action when there is a click outside an element. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useClickOutside)

## Usage

```tsx
export const UseClickOutside = () => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, () => setIsOpen(false));

	return <div style={{ margin: "0 auto", width: "fit-content" }}>
		<button onClick={() => setIsOpen(true)} disabled={isOpen}>Dropdown</button>
		<div ref={ref}>
			{
				isOpen && <Dropdown/>
			}
		</div>
	</div>
}
```

> The component renders a button to open a dropdown. When dropdown is open, the button is disabled. To close dropdown is used _useClickOutside_ that keeps a reference to dropdown container and closes dropdown when there is a click outside dropdown container.


## API

```tsx
useClickOutside(target: RefObject<HTMLElement> | HTMLElement, handler: (evt: Event) => void):void
```

> ### Params
>
> - __target__: _RefObject<HTMLElement> | HTMLElement_  
DOM element or ref
> - __handler__: _(evt:Event)=>void_  
callback to be executed.
>

> ### Returns
>
> 
> 
>