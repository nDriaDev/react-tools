# useUpdate
Hook that force a render.

## Usage

```tsx
const UseUpdate = () => {
	const update = useUpdate();

	return (<>
		<button type="button" onClick={update}>Update</button>
		<br />
		<br />
		{new Date().toLocaleTimeString()}
	</>);
}

UseUpdate.displayName = "UseUpdate";

export { UseUpdate };
```

> The component has:
> - a button that execute the update
> 
> The component displays the current time. When button is clicked, it rerenders and current time is updated.


## API

```tsx
useUpdate (): React.DispatchWithoutAction 
```

> ### Params
>
>
>

> ### Returns
>
> __update__
> - _React.DispatchWithoutAction_  
>