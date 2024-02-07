# useRaf
Hook to execute a callback function with _requestAnimationFrame_ to optimize performance. Refer to (requestAnimationFrame)[https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame]. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useRaf)

## Usage

```tsx
export const UseRaf = () => {
	const [state, setState] = useState({ width: 0, height: 0 });
	const [start] = useRaf((_: number, __:()=>void, dim: DOMRectReadOnly) => {
		setState({ width: dim.width, height: dim.height });
	});
	const [refCb] = useResizeObserver<HTMLTextAreaElement>(
		(entries: ResizeObserverEntry[]) => {
			start(entries[0].contentRect);
		}
	);

	return <div>
		<p>{"Textarea dimension: " + JSON.stringify(state)}</p>
		<textarea ref={refCb} rows={3}></textarea>
	</div>
}
```

> The component renders a textarea element and when it is resized, updates __state__ variable inside function __start__ returned from _useRaf_ hook.


## API

```tsx
useRaf<T extends unknown[]>(cb: (timer: number, repeat: ()=>void, ...args: T) => void): [(...args: T)=>void, ()=>void]
```

> ### Params
>
> - __cb__: _(timer:number, repeat:()=>void, ...args: T)=>void_  
 callback to execute prior to the next repaint. In addition to the classic timeStamp parameter, which indicates the end time of rendering of the previous frame, the second parameter is a function which, if invoked, re-executes the requestAnimationFrame with the callback itself, and finally various parameters can be added, passed with the invocation function returned by the hook.
>


> ### Returns
>
> __results__: array with __start__ function to invoke _requestAnimationFrame_ and __cancel__ function to invoke _cancelAnimationFrame_.
> - __Array__:  
>     - _(...args: T)=>void_  
>     - _()=>void_  
>