# useMap
Hooks to use _Map data structure_ to handle component state.

## Usage

```tsx

const UseMap = () => {
	const map = useMap<string, number>();

	const inputRef = useRef<HTMLInputElement>(null);

	const del = useCallback(() => {
		map.delete(inputRef.current!.value);
	}, [map]);

	const set = useCallback(() => {
		const [key, value] = inputRef.current!.value.split("-");
		map.set(key, Number(value));
	}, [map]);

	const clear = useCallback(() => {
		map.clear();
	}, [map]);

	const incrementAll = useCallback(() => {
		map.forEach((value, key, map) => { map.set(key, value + 1) });
	}, [map]);

	return (<>
		{map.map((value, key) => key + " - " + value).join(", ")}
		<br/>
		<input ref={inputRef} type="text" />
		<br />
		<div style={{ marginTop: 15, gridTemplateColumns: 'auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={del}>Delete</button>
			<button onClick={set}>Set</button>
			<button onClick={clear}>Clear</button>
			<button onClick={incrementAll}>Increment all</button>
		</div>
	</>);
}

UseMap.displayName = "UseMap";

export {UseMap}
```




## API

```tsx
useMap <K, V>(initialState?: Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>)) 
```

> ### Params
>
> - __initialState?__: _Iterable<readonly [K, V]> | (() => Iterable<readonly [K, V]>)_  
An Array or other iterable object whose elements are key-value pairs, or function that returns it.
>

> ### Returns
>
> 
> - _Map<K_  
> - _V>_  
>