# useIntersectionObserver
Hook to use Intersection Observer. Refer to [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). [See demo](https://react-tools.ndria.dev/#/hooks/events/useIntersectionObserver)

## Usage

```tsx
export const UseIntersectionObserver = () => {
	const [state, setState] = useState(false);
	const [refCb, disconnect, reconnect] = useIntersectionObserver<HTMLTextAreaElement>(
		(entries) => {
			const result = entries[0].isIntersecting;
			result !== state && setState(result);
		}
	);

	return <div>
		<p>{"Is intersected: " + state}</p>
		<div style={{ position: "relative", width: "fit-contenr", height: 200, border: '1px solid lightblue', overflow: 'auto' }}>
			<textarea ref={refCb} style={{ position: "absolute", top: 400 }} rows={3}></textarea>
		</div>
		<br/>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
	</div>
}
```

> The component renders a textarea element with a ref that receives callback returned from __useIntersectionObserver__ hook. There are also two button to disconnect and reconnect observer by functions returned from hook. The textarea element is inside a div, at 400px from top, so it isn't visible. It need to scroll div to see textarea.
> 
> Hook is initialized with a callback that verifies if textarea element intersecting window amd set result into __state variable__. The __state variable__ value is displayed on screen.


## API

```tsx
useIntersectionObserver<T extends Element>(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit):[RefCallback<T>, () => void, () => void]
```


> ### Params
>
> - __cb__: _IntersectionObserverCallback_  
The function which is called when the percentage of the target element is visible crosses a threshold. The callback is called with two parameters: __entries__ and __observer__.
> - __opts?__: _IntersectionObserverInit_  
An options object allowing you to set options for the observation.
>



> ### Returns
>
> __result__: array with: callback for ref element attribute to observe, function to _disconnect_ observer, function to _reconnect_ observer.
> - __Array__:  
>     - _RefCallback<T>_  
>     - _()=>void_  
>     - _()=>void_  
>