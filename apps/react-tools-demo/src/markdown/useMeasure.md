# useMeasure
Hook to  measure and track element's dimensions.

## Usage

```tsx
export const UseMeasure = () => {
	const [cbRef, state] = useMeasure<HTMLDivElement>();

	return <div>
		<p>Dimensions: {state.toString()}</p>
		<br />
		<div ref={cbRef} style={{width: 100, height: 100, resize: 'both', border: '1px solid lightblue'}}>

		</div>
	</div>
}
```

> The component tracks div element dimensions and display them on screen. Try to resize div to see its current dimensions.


## API

```tsx
useMeasure <T extends Element>(): [React.RefCallback<T>, DOMRectReadOnly] 
```

> ### Params
>
>
>

> ### Returns
>
> __result__: a refCallback for target element and a object with target element size.
> - __Array__:  
>     - _React.RefCallback<T>_  
>     - _DOMRectReadOnly_  
>