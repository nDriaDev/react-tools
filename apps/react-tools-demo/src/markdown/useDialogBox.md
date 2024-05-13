# useDialogBox
Hook to use Dialog Box _prompt_, _alert_ or _confirm_. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useDialogBox)

## Usage

```tsx
export const UseDialogBox = () => {
	const [response, setResponse] = useState("");
	const openPrompt = useDialogBox("prompt");
	const openAlert = useDialogBox("alert");
	const openConfirm = useDialogBox("confirm");

	return <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
		<p>Response: {response}</p>
		<div style={{ display: 'flex', gap: 10, justifyContent: "center" }}>
			<button
				onClick={() => {
					const resp = openPrompt("Are you open a prompt?");
					setResponse(resp!);
				}}
			>
				Open Prompt
			</button>
			<button
				onClick={() => {
					openAlert("You open a alert");
				}}
			>
				Open Alert
			</button>
			<button
				onClick={() => {
					const resp = openConfirm("You open a confirm. it's ok?");
					setResponse(resp ? "ok" : "ko");
				}}
			>
				Open Confirm
			</button>
		</div>
	</div>
}
```

> The component renders three button that execute three _useDialogBox_ hook with a __type__ for each one.


## API

```tsx
useDialogBox(type: "prompt" | "confirm" | "alert"): ((message?: string, _default?: string) => string | null) | ((message?: any) => void) | ((message?: string) => boolean)
```


> ### Params
>
> - __type__: _"prompt"|"alert"|"confirm"_  
set dialog box type.
>



> ### Returns
>
> __open__: function to activate dialog box.
> - __Union of__:  
>     - _((message?: string, default?: string) => string|null)_  
>     - _((message?: any) => void)_  
>     - _((message?: string) => boolean)_  
>