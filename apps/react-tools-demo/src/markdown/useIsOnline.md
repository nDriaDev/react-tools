# useIsOnline
Hook to detect network connection status. [See demo](https://react-tools.ndria.dev/#/hooks/events/useIsOnline)

## Usage

```tsx
export const UseIsOnline = () => {
	const connectionState = useIsOnline();

	return (<div style={{ textAlign: "center" }}>
		<p>Online: {JSON.stringify(connectionState)}</p>
	</div>)
}
```

> The component display the network connection informations. Try to change connection type from console to see changes.


## API

```tsx
useIsOnline(): boolean
```





> ### Returns
>
> __isOnline__
> - _boolean_  
>