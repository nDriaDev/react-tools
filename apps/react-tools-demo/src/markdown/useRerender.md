# useRerender
Hook to force a render. [See demo](https://ndriadev.github.io/react-tools/#/hooks/lifecycle/useRerender)

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
useRerender<T>(withValue?: true|false|never): DispatchWithoutAction | [T, DispatchWithoutAction]
```


> ### Params
>
> - __withValue?__: _boolean_  
optional boolean value: if it is true, an array with _value_ and _rerender_ function is returned.
>



> ### Returns
>
> __array with _value_ and _updateValue_ function or _rerender_ function.__
> - _DispatchWithoutAction|[T,DispatchWithoutAction]_  
>