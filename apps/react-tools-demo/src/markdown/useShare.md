# useShare
Hook to use [Web Share Api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useShare)

## Usage

```tsx
export const UseShare = () => {
	const sharedDate = useRef<ShareData>({
		title: "React-tools",
		text: "React tools",
		url: window.location.origin + "/index.html"
	})
	const { isSupported, share } = useShare();

	const onClick = () => share(sharedDate.current);

	return <div style={{textAlign: "center"}}>
		<p>Is supported: {isSupported.toString()}</p>
		<button onClick={onClick}>Share</button>
	</div>
}
```

> The component uses _useShare_ hook to know if Web share API is supported and returns a button to share link to this library.


## API

```tsx
useShare(): {isSupported: boolean, share: (data?: ShareData)=>Promise<void>}
```

> ### Params
>
>
>

> ### Returns
>
> __object__: __isSupported__ to known if share API is supported and __share__ function to use Web share API.
> - __Object__:  
>     - __isSupported__ : _boolean_  
>     - __share__ : _(data?: ShareData) => Promise<void>_  
>