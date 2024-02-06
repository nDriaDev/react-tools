# useMeasure
Hook to  measure and track element's dimensions. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMeasure)

## Usage

```tsx
export const UseMeasure = () => {
	const [cbRef, state] = useMeasure<HTMLDivElement>();

	return <div style={{margin: '0 auto'}}>
		<p>Dimensions: {JSON.stringify(state)}</p>
		<br />
		<div ref={cbRef} style={{margin:'0 auto', width: 100, height: 100, overflow: 'auto', resize: 'both', border: '1px solid lightblue'}}/>
	</div>
}
```

> The component tracks div element dimensions and display them on screen. Try to resize div to see its current dimensions.


## API

```tsx
useMeasure<T extends Element>(): [React.RefCallback<T>, DOMRectReadOnly]
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