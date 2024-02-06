# useMutationObserver
Hook to use Mutation Observer. Refer to [Mutation Observer API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useMutationObserver)

## Usage

```tsx
export const UseMutationObserver = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [data, setData] = useState<string[]>([]);
	const [cbRef, disconnect, reconnect] = useMutationObserver<HTMLUListElement>(
		mutations => {
			for (const mutation of mutations) {
				const arr: string[] = [];
				mutation.addedNodes.forEach(node => arr.push(`Added node: ${node.textContent}`));
				mutation.removedNodes.forEach(node => arr.push(`Removed node: ${node.textContent}`));
				setMessages(m => m.concat(arr));
			}
		},
		{
			childList: true,
			subtree: true
		}
	)

	return <div>
		<button onClick={() => setData(d => [...d, d.length.toString()])}>ADD child</button>
		<button onClick={() => setData(d => d.filter((_, index) => index !== d.length - 1))}>Remove child</button>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: 50 }}>
			<div>
				<ul ref={cbRef}>
					{
						data.map(el => <li key={el}>Item {el}</li>)
					}
				</ul>
			</div>
			<div>
				{
					messages.map(el => <p>{el}</p>)
				}
			</div>
		</div>
	</div>
}
```

> The component has an ul element and two button to add and remove li childs. The __cbRef__ callback returned from _useMutationObserver_ hook is attached to ul element, so then ul childs change, the callback passed to hook update __messages__ state variable with added and removed nodes.


## API

```tsx
useMutationObserver<T extends Element>(cb: MutationCallback, opts?: MutationObserverInit): [RefCallback<T>, () => void, () => void, () => MutationRecord[] | undefined]
```

> ### Params
>
> - __cb__: _MutationCallback_  
The function which will be called on each DOM change that qualifies given the observed node or subtree and options. The callback takes as input two parameters: __mutationList__ and __observer__.
> - __opts?__: _MutationObserverInit_  
An options object allowing you to set options for the observation.
>

> ### Returns
>
> __result__: array with: cb for ref component attribute to observe, function to _disconnect_ observer, function _takeRecords_ to take observer records not yet processed, function to _reconnect_ observer.
> - __Array__:  
>     - _RefCallback<T>_  
>     - _()=>void_  
>     - _()=>void_  
>     - _() => MutationRecord[]|undefined_  
>