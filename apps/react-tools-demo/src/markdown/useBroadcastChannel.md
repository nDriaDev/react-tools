# useBroadcastChannel
Hook to use [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API).

## Usage

```tsx
export const UseBroadcastChannel = () => {
	const [state, setState] = useBroadcastChannel<string>("react-tools");

	return <div>
		<h2>Open page on multiple tab to see how hook work</h2>
		<p>State: {state}</p>
		<form onSubmit={(e: FormEvent<HTMLFormElement>) => { debugger }}>
			<input name="text" type="text" />
			<button type="submit">SEND</button>
		</form>
	</div>
}
```

> The component uses _useBroadcastChannel_ hook to send a text in a broadcast channel


## API

```tsx
useBroadcastChannel<T>(name: string, onMessage?: (evt:MessageEvent<T>)=>void, onError?: (evt: MessageEvent)=>void):[T|undefined, (data:T)=>void]
```

> ### Params
>
> - __name__: _string_  
broadcast channel name.
> - __onMessage?__: _(evt:MessageEvent)=>void_  
function that will be execute when a message occurred.
> - __onError?__: _(evt:MessageEvent)=>void_  
function that will be execute when a error message occurred.
>

> ### Returns
>
> __result__:  __Array__:  
    - _T|undefined_  
    - _(data:T)=>void_  
> Array of:
> - first element: __data__ received in broadcast channel.
> - second element: __send__ function to send data on broadcast channel.
>