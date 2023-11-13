# useActiveElement
Hook that returns activeElement and listen its changes.

## Usage

```tsx
export const UseActiveElement = () => {
	const activeElement = useActiveElement();

	return (<>
		<p>Active element is: {activeElement?.tagName}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<span tabIndex={0}>Span</span>
			<p tabIndex={0}>P</p>
			<button>Button</button>
		</div>
	</>)
}
```

> DEMO


## API

```tsx
useActiveElement ():Element|null 
```

> ### Params
>
>
>

> ### Returns
>
> __activeELement__
> - __Union of__:  
>     - _Element_  
>     - _null_  
>