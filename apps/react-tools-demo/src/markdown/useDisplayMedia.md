# useDisplayMedia
Hook to capture the contents of a display. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDisplayMedia)

## Usage

```tsx
export const UseDisplayMedia = () => {
	const [stream, start, stop] = useDisplayMedia();
	const ref = useRef<HTMLVideoElement>(null);

	const init = async () => {
		await start();
	}

	if (ref.current) {
		stream
			? (ref.current.srcObject = stream)
			: (ref.current.srcObject = null);
	}

	return <div style={{ display: "grid", gridTemplateRows: "auto auto auto", justifyContent: "center", gap: 20, maxHeight: 350, overflow: "auto" }}>
		<button onClick={init}>Start</button>
		<button onClick={stop}>Stop</button>
		<video autoPlay width={300} height={200} ref={ref}/>
	</div>
}

```

> The component renders a button that if clicked activate the capturing of the screen selected by user and render it on a video element.


## API

```tsx
useDisplayMedia(): [MediaStream | undefined, (options?: TDisplayMediaStreamOptions) => Promise<void>, () => void]
```





> ### Returns
>
> __result__:  __Union of__:  
    - __Array__:  
        - _MediaStream|undefined_  
        - _(options: TDisplayMediaStreamOption_  
    - _undefined) => Promise<void>, ()=>void]_  
> Array containing:
> - first element: the captured stream.
> - second element: function that starts capture.
> - third element: function that stops capture.
>