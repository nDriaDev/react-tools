# useEyeDropper
Hook to use [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useEyeDropper)

## Usage

```tsx
export const UseEyeDropper = () => {
	const [color, setColor] = useState("");
	const { isSupported, open } = useEyeDropper();

	const onClick = async () => {
		const result = await open();
		setColor(result!);
	};

	return <div style={{ textAlign: "center" }}>
		<p>Is supported: {isSupported.toString()}</p>
		<button onClick={onClick}>Get Color</button>
		<br />
		<br />
		<label>Color </label><input type="color" value={color}/>
	</div>
}
```

> The component uses _useEyeDropper_ hook to know if EyeDropper API is supported and returns a button to get a color with EyeDropper API.


## API

```tsx
useEyeDropper({ onStart, onFinish }: { onStart?: () => void, onFinish?: (result: `#${string}`) => void } = {})
```

> ### Params
>
> - __opts__: _Object_  
options.
> - __opts.onStart?__: _()=>void_  
function that will be executed on __open__ invocation.
> - __opts.onFinish?__: _(result: `#${string}`) => void_  
function that will be on __open__ retuns.
>


> ### Returns
>
> __result__: __isSupported__ to known if EyeDropper API is supported and __share__ function to use EyeDropper API.
> - __Object__:  
>     - __isSupported__ : _boolean_  
>     - __open__ : _(signal?: AbortSignal) => Promise<`#${string}`>|Promise<void>_  
>