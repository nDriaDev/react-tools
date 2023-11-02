# useProxyState
Hook to handle component state that allows you to use an object for your state and mutating it in a way more idiomatic for JS.

## Usage

```tsx
const Child1 = memo(({ state }: { state: { num: number[], nested: { random: string } } }) => {
	const onClick = useCallback(() => state.num.push(Math.random()), [state.num]);
	return (<>
		<p>Num value is: {state.num}</p>
		<button onClick={onClick} type={'button'}>Increment</button>
	</>);
});

const Child2 = memo(({ state }: { state: { num: number[], nested: {random: string} } }) => {
	const onClick = useCallback(() => state.nested = {random: String(Math.round(Math.random() * 1000))}, [state]);
	return (<>
		<p>Random value is: {state.nested.random}</p>
		<button onClick={onClick} type={'button'}>
			Change random
		</button>
	</>);
});

const UseProxyState = () => {
	const state = useProxyState({ num: [], nested: { random: "" } });

	return (
		<div>
			<p>
				Current Value (in the proxy state): {state.num}  -  random: {state.nested.random}
			</p>
			<Child1 state={state}/>
			<Child2 state={state}/>
		</div>
	);
}

UseProxyState.displayName = "UseProxyState";

export { UseProxyState };
```

> DEMO


## API

```tsx
useProxyState
```

> ### Params
>
> - __initialState__: _T | () => T_  
value or function
> - __proxyInDepth=false?__: _boolean_  
if true, it creates proxy for nested object also.
>

> ### Returns
>
> __state__
> - _T_  
>