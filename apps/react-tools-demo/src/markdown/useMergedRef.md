# useMergedRef
Hook to merge multiple refs into one.

## Usage

```tsx
export const UseMergedRef = () => {
	const [state, setState] = useState(false);
	const [refCb] = useResizeObserver<HTMLDivElement>(
		(entries: ResizeObserverEntry[]) => {
			const result = entries[0].contentRect.width < 100;
			result !== state && setState(result);
		}
	);
	const ref = useRef<HTMLDivElement>(null);
	const mergedRef = useMergedRef<HTMLDivElement>(ref, refCb);

	const changeBorderColor = () => {
		mergedRef.current;
		ref.current && (ref.current.style.border = ref.current.style.border.indexOf("lightgray") !== -1
			? '1px solid darkcyan'
			: '1px solid lightgray'
		);
	}

	return <div>
		<p>{"Has width < 100 px: " + state}</p>
		<div ref={mergedRef} style={{border: '1px solid lightgray', width: 150, height: 200, resize: "both", overflow: 'auto'}}></div>
		<br />
		<button onClick={changeBorderColor}>Change border color</button>
	</div>
}
```

> The component has a ref to change border color of a div element when a button is clicked and use _useResizeObserver_ hook to observe the size of div element to check when its width is less of 100px. Since _useResizeObserver_ works with a ref attached to an element, there are two ref that will be attached to the div element. So it has been used _useMergedRef_ hook to merge refs.


## API

```tsx
useMergedRef <T>(...refs: React.Ref<T>[]) 
```

> ### Params
>
> - __refs__: _React.Ref<T>[]_
>

> ### Returns
>
> __mergedRef__
> - _React.RefObject<T>_  
>