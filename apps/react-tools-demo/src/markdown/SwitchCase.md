# SwitchCase
It works like switch-case construct. It useful for when there are more than 2 mutual exclusive conditions. [See demo](https://ndriadev.github.io/react-tools/#/components/SwitchCase)

## Usage

```tsx
export default function SM() {
	const valuesCounter = useRef([1, 2, 3]);
	const [indexCounter, setIndexCounter] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setIndexCounter(i => i%4+1 === 4 ? 0 : i%4+1), 2000);
		return () => clearInterval(id);
	}, []);

	return (<div style={{textAlign: "left", display: "flex", flexDirection: "column", alignItems: "center"}}>
		<p style={{width: 230}}>Counter values: {JSON.stringify(valuesCounter.current, null, 2)}</p>
		<p style={{width: 230}}>Counter index: {indexCounter}</p>
		<SwitchCase.Switch fallback={<p style={{color: "darkorange", width: 230}}>Counter value unsetted.</p>}>
			<SwitchCase.Case when={indexCounter === 0}>
				<p style={{color: "darkturquoise", width: 230, fontWeight: 800}}>Counter value is 1.</p>
			</SwitchCase.Case>
			<SwitchCase.Case when={indexCounter === 1}>
				<p style={{color: "darkkhaki", width: 230, fontWeight: 800}}>Counter value is 2.</p>
			</SwitchCase.Case>
			<SwitchCase.Case when={indexCounter === 2}>
				<p style={{color: "darkcyan", width: 230, fontWeight: 800}}>Counter value is 3.</p>
			</SwitchCase.Case>
		</SwitchCase.Switch>
	</div>);
}
```

> The component has an array of numbers and a variable state number used like index of array. Every 2 seconds index changes value. It uses __SwitchCase__ component to render different p element with a text indicating the value of array with the current index.


## API

```tsx
SwitchCase = { Switch, Case };
```


> ### Params
>
> - __object__: _Object_  
Object with _Switch_ and _Case_ components.
>



> ### Returns
>
> 
> - __Object__:  
>     - __Switch__ : _(props:{children:ReactElement<CaseProps>|ReactElement<CaseProps>[], fallback?:ReactNode})=>JSX.Element|null_  
>     - __Case__ : _(props:{children:ReactNode, when:booleaan|undefined|null})=>JSX.Element|nul_  
>