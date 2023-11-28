# useVisible
Hook to know if an element is visible and optionally the visible area ration of the element.

## Usage

```tsx
export const UseVisible = () => {
	const [cbRef, isVisible, ratio] = useVisible({withRatio: true});
	return (
		<div>
			<div style={{ width: 300, height: 300, overflow: 'scroll', border: '1px solid' }}>
				scroll here
				<div style={{ height: 800 }}>
					<div
						ref={cbRef}
						style={{
							border: '1px solid',
							height: 100,
							width: 100,
							textAlign: 'center',
							marginTop: 80,
						}}
					>
						observer dom
					</div>
				</div>
			</div>
			<div style={{ marginTop: 16, color: ratio ? '#87d068' : '#f50' }}>
				<p>isVisible: {isVisible ? 'visible' : 'hidden'}</p>
				<p>ratio: {ratio}</p>
			</div>
		</div>
	);
}
```

> The component renders a scrollable div with inside a bordered div element to which is attached __cbRef_ refCallback returned from _useVisible_ hook. Component displays the bordered div __visibility__ and __ratio__ that change when parent div is scrolled.


## API

```tsx
useVisible<T extends Element>(opts?: IntersectionObserverInit & { withRatio?: boolean }): [RefCallback<T>, boolean] | [RefCallback<T>, boolean, number] 
```

> ### Params
>
> - __opts__: _{root?: Element|Document|null, rootMargin?: string, threshold?: number|number[], withRatio?: boolean}_  
object to set options to observation.
>

> ### Returns
>
> __result__: callback for ref element attribute to observe, a boolean to known if element is visible or not and eventually the element ratio.
> - __Union of__:  
>     - __Array__:  
>         - _RefCallback<T>_  
>         - _boolean_  
>     - __Array__:  
>         - _RefCallback<T>_  
>         - _boolean_  
>         - _number_  
>