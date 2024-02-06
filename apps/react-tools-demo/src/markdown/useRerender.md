# useRerender
Hook that force a render. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useRerender)

## Usage

```tsx
const UseRerender = () => {
	const update = useRerender();

	return (<>
		<button type="button" onClick={update}>Update</button>
		<br />
		<br />
		{new Date().toLocaleTimeString()}
	</>);
}

UseRerender.displayName = "UseRerender";

export { UseRerender };
```

> The component has:
> - a button that execute the update
> 
> The component displays the current time. When button is clicked, it rerenders and current time is updated.


## API

```tsx
useRerender(): React.DispatchWithoutAction
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