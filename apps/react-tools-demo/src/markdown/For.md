# For
Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://ndriadev.github.io/react-tools/#/components/For)

## Usage

```tsx
export default function ForComponent() {
	const arr = useRef([
		{ id: "1", firstName: "Jhon", lastName: "Doe" },
		{ id: "2", firstName: "Jona", lastName: "Doe" },
		{ id: "3", firstName: "Jhonney", lastName: "Doe" }
	]);
	const [, update] = useReducer(t => !t, false);

	const body = useCallback<(item: { id: string, firstName: string, lastName: string }, index: number|string) => JSX.Element>((item, index) => {
		console.log("body render");
		return <p>{index}: {item.firstName} - {item.lastName}</p>
	}, []);

	useEffect(() => {
		const id = setInterval(() => update(), 1000);
		return () => clearInterval(id)
	}, [])

	return <>
		<For
			elementKey="id"
			of={arr.current}
		>
			{body}
		</For>
	</>
}
```

> The component uses _For_ component to render a p element returned from _body_ memoized function for all objects assigned to _arr_  ref variable. It also specified __id__ property as _elementKey_ prop. A setInverval is executed on mount that on every second force component to rerender. If you open dev tools, you can see that _body_ function logs only three times at first, one for each element of _arr_ variable


## API

```tsx
For = memo(<T extends unknown>({ of, children, filter, map, sort, elementKey, fallback }: ForProps<T>)
```

> ### Params
>
> - __props__: _ForProps<T>_  
component properties object.
> - __props.of__: _T[]_  
array of elements.
> - __props.elementKey?__: _T extends Record<string,unknown> ? keyof T : never_  
a key of array elements if elements are object.
> - __props.children__: _(item: T, index: T extends Record<string,unknown> ? number | T[keyof T] : number) => ReactNode_  
it's a function that takes the current item as first argument and optionally a second argument that is number if element of array aren't object, otherwise it can be a number or the value of the element key specified in the _elementKey_ prop if it is preset.
> - __props.fallback?__: _ReactNode_  
optional element to render when _of_ prop is an empty array.
> - __props.filter?__: _<S extends T>(val: T, index: number, arr: T[]) => val is S_  
callback executed to filter _of_ elements.
> - __props.map?__: _<U extends T>(val: T, index: number, arr: T[]) => U_  
callback executed to map _of_ elements.
> - __props.sort?__: _(a: T, b: T) => number_  
callback executed to sort _of_ elements.
>


> ### Returns
>
> __result__: elements list, rendered from _of_ prop or _fallback_.
> - _JSX.Element_  
>