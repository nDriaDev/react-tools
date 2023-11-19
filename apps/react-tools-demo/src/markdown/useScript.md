# useScript
Hook to dinamically load an external script like Google Analitycs.

## Usage

```tsx
export const UseScript = () => {
	const [status, append, remove] = useScript(
		{
			src: `https://code.jquery.com/jquery-3.5.1.min.js`
		},
		{
			handleAppending: true,
		}
	)
	const message: string = status === "ready" ? jQuery.fn.jquery : "N.D.";

	useEffect(() => {
		const id = setTimeout(() => {
			append();
		}, 3000);
		return () => {
			clearTimeout(id);
			remove();
		};
	}, [append, remove]);
	return (<>
		<p>Script status: {status}</p>
		<p>jQuery version: {message}</p>
	</>);
}
```

> The component load _jQuery_ script by _useScript_ hook and when it is __ready__ displays the jQuery version. When the component unmount, the script is removed.
> The script is loaded by _appendScript_ function inside a timeout to allow visibility status changes.


## API

```tsx
useScriptuseScript: UseScript = function (attributes, options) 
```

> ### Params
>
> - __attributes__: _{ src?: string, async?: boolean, crossorigin?: "anonymous" | "use-credentials" | "", defer?: boolean, fetchpriority?: "high" | "low" | "auto", integrity?: string, nomodule?: boolean, nonce?: string, referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url", type?: string }_  
script attributes.
> - __options__: _{ handleAppending?: boolean, removeOnUnmount?: boolean, iframe?: HTMLIFrameElement }_  
to handle appending and removing script, to automatically remove script when component unmount and to append script to an iframe.
>

> ### Returns
>
> __array__: first element returns script status and second and thirds elements allow to manually handle script.
> - __Array__:  
>     - _status: UseScriptStatus_  
>     - _(attributes: UseScriptProps["attributes"], iframe?: HTMLIFrameElement) => void_  
>     - _() => void_  
>