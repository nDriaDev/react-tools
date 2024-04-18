# useResizeObserver
Hook to use Resize Observer. Refer to [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useResizeObserver)

## Usage

```tsx
export const UseResizeObserver = () => {
	const [state, setState] = useState(false);
	const [refCb, disconnect, reconnect] = useResizeObserver<HTMLTextAreaElement>(
		(entries: ResizeObserverEntry[]) => {
			const result = entries[0].contentRect.width < 100;
			result !== state && setState(result);
		}
	);

	return <div>
		<p>{"Has width < 100 px: " + state}</p>
		<textarea ref={refCb} rows={3}></textarea>
		<br/>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
	</div>
}
```

> The component renders a textarea element with a ref that receives callback returned from _useResizeObserver__ hook. There are also two button to disconnect and reconnect observer by functions returned from hook.
> 
> Hook is initialized with a callback that verifies if textarea element has a width minor or major of 100 px amd set result into __state variable__. The __state variable__ value is displayed on screen.


## API

```tsx
useResizeObserver<T extends Element>(cb: ResizeObserverCallback, opts?: ResizeObserverOptions):[RefCallback<T>, () => void, () => void]
```


> ### Params
>
> - __cb__: _ResizeObserverCallback_  
The function called whenever an observed resize occurs. The callback is called with two parameters: __entries__ and __observer__.
> - __opts?__: _ResizeObserverOptions_  
An options object allowing you to set options for the observation.
>



> ### Returns
>
> __result__: array with: cb for ref component attribute to observe, function to _disconnect_ observer, function to _reconnect_ observer.
> - __Array__:  
>     - _RefCallback<T>_  
>     - _()=>void_  
>     - _()=>void_  
>