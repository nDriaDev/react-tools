# useInterval
Hook to handle setInterval timer function with the possibility to clear and promisify execution. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useInterval)

## Usage

```tsx
export const UseInterval = () => {
	const [count, setCount] = useState(0);
	const [interval, setInterval] = useState(1000);
	const [apply, clear, applyPromisy] = useInterval(
		() => setCount(c => c + 1),
		interval
	)

	return (
		<div style={{ display: "grid", gridTemplateRows: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<p>Count: {count}</p>
			<p>interval: {interval}</p>
			<div style={{ display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
				<button onClick={apply}>Increment count</button>
				<button onClick={clear}>Clear Interval</button>
				<button onClick={async()=>applyPromisy().then(()=>setInterval(1000))}>Increment promisy</button>
				<button onClick={() => setInterval(d => d + 1000)}>Increment interval</button>
				<button onClick={() => setInterval(() => 1000)}>Clear interval</button>
			</div>
		</div>
	);
}
```

> The component has:
> - A _count_ state initialized to _0_.
> - A _interval_ state initialized to _1000_.
> - A _useInterval_ that receives a _callback_ to update _count_ by 1 and _interval_ as time to interval execution.
> - Two p tag to diplay current _count_ and _interval_ variable.
> - A button to execute _apply_ function returned from _useInterval_.
> - A button to increment by 1000 _interval_ state.
> - A button to restore _interval_ state to 1000.
> - A button to execute _clear_ function returned from _useInterval_.
> - A button to execute _applyPromisy_ function returned from _useInterval_ tha after _count_ state update, restore _interval_ state to 1000.


## API

```tsx
useInterval<TArgs extends unknown[]>(callback: (...args: TArgs) => void, delay: number): [(...args: TArgs) => void, () => void, (...args: TArgs) => Promise<void>]
```

> ### Params
>
> - __callback__: _(...args: unknown[])=>void_  
Function to call when the timer elapses.
> - __delay__: _number_  
The number of milliseconds to wait before calling the `callback`.
>

> ### Returns
>
> __- array: first element is the function to call setInterval; second element is the function to clearInterval; thrid element promisify setInterval.__
> - __Array__:  
>     - _(...args: TArgs) => void_  
>     - _() => void_  
>     - _(...args: TArgs) => Promise<void>_  
>