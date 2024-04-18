# useClipboard
Hook to handle Clipboard. Refers to [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). __N.B.__: The hook has the same compatibility issues as the Clipboard API for Firefox, i.e. it is currently impossible to read from the clipboard. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useClipboard)

## Usage

```tsx
export const UseClipboard = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [val, setVal] = useState("");
	const [value, write, read] = useClipboard({ useValue: true, target: ref, dataType: "text" });
	const copy = useCallback(async () => {
		await write(getSelection()?.toString() || "");
	}, [write])

	const paste = useCallback(async () => {
		const value = await read();
		setVal(value as string);
	}, [read])

	return <div style={{ display: "grid", gridTemplateColumns: "50% 50%", columnGap: 15 }}>
		<div ref={ref} style={{ position: "relative", border: "1px solid lightgray" }}>
			<div style={{ display: "grid", gridTemplateColumns: "100px 100px", justifyContent: "center", columnGap: 15 }}>
				<button onClick={copy}>Copy</button>
				<button onClick={paste}>Paste</button>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt repudiandae fugit distinctio molestiae excepturi ex qui, impedit iste odit. Explicabo quis reprehenderit voluptates reiciendis nostrum minima autem temporibus sint doloribus</p>
			</div>
		</div>
		<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 15, border: "1px solid lightgray" }}>
			<div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto" }}>
				<p><strong>Use ClipboardValue:</strong></p>
				<pre>{JSON.stringify(value, null, 2)}</pre>
			</div>
			<div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto" }}>
				<p><strong>Internal value:</strong></p>
				<pre>{JSON.stringify(val, null, 2)}</pre>
			</div>
		</div>
	</div>
}
```

> - The component has an internal state _val_ and invokes _useClipboard_ hook with these properties: _useValue_=__true__ _target_=__ref__ and _dataType_=__text__. It means that hook will return _value_ of type __string__ and _write_ and _read_ functions that handle __text__ data type. The component declares also two functions:
> 	- _copy_ that invokes __write__ function to write into clipboard text selected.
> 	- _paste_ that invokes __read__ function to get value from clipboard and setting it to internal stave variable _val_.
> - __ref__ is attached to a div that contains two buttons _COPY_ and _PASTE_, that have _copy_ and _paste_ functions respectively to handle their click event and two paragraph texts.
> - Another div is rendered that displays the internal state _val_ and current _clipboard_ values.


## API

```tsx
useClipboard({ useValue, dataType, target }: { useValue: boolean, dataType: "text" | "any", target?: RefObject<HTMLElement> | HTMLElement }): [string, (text: string) => Promise<void>, () => Promise<string>] | [string | Blob | (string | Blob)[], (blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>] | [(text: string) => Promise<void>, () => Promise<string>] | [(blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>]
```


> ### Params
>
> - __param__: _Object_
> - __param.useValue__: _boolean_  
return a value with current clipboard value or not.
> - __param.target?__: _RefObject<HTMLElement>|HTMLElement_  
target on which delimiter handling.
> - __param.dataType?__: _"text"|"any"_  
data type handling. Based on it, Hook will return the functions for writing or reading text only or any type of data.
>



> ### Returns
>
> __array__: elements depends on _useValue_ and _dataType_ values: if _dataType_ equals __text__ there will are only function to writing and reading text data type, otherwise any data type. If _useValue_ is true the first element will be _clipboard current value_.
> - __Union of__:  
>     - __Array__:  
>         - _string_  
>         - _(text: string) => Promise<void>_  
>         - _() => Promise<string>_  
>     - __Array__:  
>         - _string|Blob|(string|Blob)[]_  
>         - _(blob: Blob|Blob[]) => Promise<void>_  
>         - _() => Promise<string|Blob|(string|Blob)[]>_  
>     - __Array__:  
>         - _(text: string) => Promise<void>_  
>         - _() => Promise<string>_  
>     - __Array__:  
>         - _(blob: Blob|Blob[]) => Promise<void>_  
>         - _() => Promise<string|Blob|(string|Blob)[]>_  
>