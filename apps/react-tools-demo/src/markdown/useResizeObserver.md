# useResizeObserver
Hook to use ResizeObserver. Refer to [ResizeObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)

## Usage

```tsx
export const UseResizeObserver = () => {
	const refCb = useResizeObserver<HTMLTextAreaElement>((entries: ResizeObserverEntry[]) => { console.log("ciao") });

	return <div>
		<textarea ref={refCb} rows={3}></textarea>
	</div>
}
```

> The component renders a textarea element with a ref that receives callback returned from _useResizeObserver__ hook.
> 
> Hook is initialized with....


## API

```tsx
useResizeObserver <T extends Element>(cb: ResizeObserverCallback, opts?: ResizeObserverOptions):RefCallback<T> 
```

> ### Params
>
> - __cb__: _ResizeObserverCallback_
> - __opts?__: _ResizeObserverOptions_
>

> ### Returns
>
> __cb for ref component attribute to observe.__
> - _RefCallback<T>_  
>