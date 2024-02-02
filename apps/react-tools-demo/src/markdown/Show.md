# Show
Generic component used to conditional render part of the view: it renders _children_ when the _when_ prop is truthy, otherwise the _fallback_ prop, if it is present, or null.

## Usage

```tsx
export default function ShowComponent() {
	const [show, setShow] = useReducer(t => !t, false);

	return <>
		<button onClick={setShow}>{show ? "hide" : "show"}</button>
		<Show when={show} fallback={<p>hidden</p>}>
			<p>Shown</p>
		</Show>
	</>
}
```

> The component has a state boolean variable _show_ updated by a button element and uses _Show_ generic component to conditional render a p element. If _show_ is true, a _p element_ with __Shown__ text value is shown otherwise is shown a _p element_ with __Hidden__ text value.


## API

```tsx
Show({ when, fallback, children }: PropsWithChildren<{ when: boolean, fallback?: ReactNode }>)
```

> ### Params
>
> - __object__: _PropsWithChildren<{when: boolean, fallback?: ReactNode}>_
> - __object.when__: _boolean_  
boolean indicating if to show _children_ or _fallback_/_null_.
> - __object.fallback?__: _ReactNode_  
optional element to render when _when_ prop is false.
> - __object.children?__: _PropsWithChildren<any>["children"]_  
optional element to render when _when_ prop is true.
>

> ### Returns
>
> __element__: the element rendered or null.
> - _JSX.Element|null_  
>