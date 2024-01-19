# useDisplayMedia
Hook to capture the contents of a display.

## Usage

```tsx
export const UseDisplayMedia = () => {
	const start = useDisplayMedia();
	const ref = useRef<HTMLVideoElement>(null);

	const init = async () => {
		const stream = await start();
		ref.current && (ref.current.srcObject = stream);
	}

	return <div style={{ display: "grid", gridTemplateRows: "auto auto", justifyContent: "center", gap: 50, maxHeight: 350, overflow: "auto" }}>
		<button onClick={init}>Start</button>
		<video autoPlay controls ref={ref}/>
	</div>
}

```

> The component renders a button that if clicked activate the capturing of the screen selected by user and render it on a video element.


## API

```tsx
useDisplayMedia()
```

> ### Params
>
>
>

> ### Returns
>
> __start__: function to start capture.
> - __Union of__:  
>     - _(options: DisplayMediaStreamOptions_  
>     - _undefined) => Promise<MediaStream>_  
>