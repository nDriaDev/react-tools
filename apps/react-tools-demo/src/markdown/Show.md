# 


## Usage

```tsx

export default function ShowComponent() {
	const [c, setC] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => setC(c => c + 1), 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div>
			<h1>Hello StackBlitz!</h1>
			<p>Start editing to see some magic happen :)</p>
			<Show when={c % 2 === 0} fallback={"loading..."}>
				<p>Done</p>
			</Show>
		</div>
	);
}
```




## API

```tsx
Show = ({ when, fallback, children }: PropsWithChildren<{ when: boolean, fallback?: ReactNode }>)
```

> ### Params
>
>
>

> ### Returns
>
> 
> 
>