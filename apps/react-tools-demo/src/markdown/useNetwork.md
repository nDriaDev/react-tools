# useNetwork
Hook to detect network connection infos, refer to [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation). It takes optinally a parameter __selectedInfo__ to specify a subset of connection status property. [See demo](https://nDriaDev.io/react-tools/#/hooks/events/useNetwork)

## Usage

```tsx
export const UseNetwork = () => {
	const connectionState = useNetwork();

	return (<div style={{ textAlign: "center" }}>
		{
			Object.keys(connectionState).map(el => (
				<p key={el}>{el}: {JSON.stringify(connectionState[el as keyof typeof connectionState])}</p>
			))
		}
	</div>)
}
```

> The component display the network connection informations. Try to change connection type from console to see changes.


## API

```tsx
useNetwork<T extends keyof ConnectionState>(selectedInfo?: ArrayMinLength1<T>): ConnectionState | {[k in T] : ConnectionState[k]}
```

> ### Params
>
> - __selectedInfo?__: _ArrayMinLength1<T>_  
array of connection property.
>

> ### Returns
>
> __object__: Network connection property or a subset if __selectedInfo__ is specified.
> - _ConnectionState|{[k in T] : ConnectionState[k]}_  
>