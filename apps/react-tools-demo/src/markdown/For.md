# For
Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://react-tools.ndria.dev/#/components/For)

## Usage

```tsx
const Paragraph = memo(({ index, firstName, lastName }: { index: string, firstName: string, lastName: string }) => {
	console.log("P render");
	return <p>{index}: {firstName} - {lastName}</p>
})

export default function ForComponent() {
	const [arr, setArr] = useState([
		{ id: "1", firstName: "firstName1", lastName: "lastName1" },
		{ id: "2", firstName: "firstName2", lastName: "lastName2" },
		{ id: "3", firstName: "firstName3", lastName: "lastName3" }
	]);

	useEffect(() => {
		const id2 = setInterval(() => {
			setArr(a => {
				const added = Math.random() > 0.5;
				console.log(added ? "added" : "removed");
				const id = Math.max(...[0, ...a.map(el => Number(el.id))])+1
				return added
					? [{ id: "" + id, firstName: "firstName" + id, lastName: "lastName" + id }, ...a]
					: a.filter((_, index) => index !== 0)
			})
		}, 3500);
		return () => {
			clearInterval(id2)
		}
	}, [])

	return <>
		<For
			of={arr}
			elementKey="id"
		>
			{(item, _, key) => <Paragraph index={key as string} firstName={item.firstName} lastName={item.lastName} />}
		</For>
	</>
}
```

> The component has a _arr_ array state variable of objects that every 3 seconds added or removed an element. It uses _For_ component to iterate _arr_ and to render the memoized _Paragraph_ component, specifing __id__ element property as _elementKey_ prop. _Paragraph_ component logs in console a message before return the tag p. If you open dev tools, you can see that message is displayed only three times at first, and once when an element is added to _arr_ variable.


## API

```tsx
For<T, S extends T>({ of, elementKey, fallback, filter, sort, map, children }: { of: Array<T>, elementKey?: (T|S) extends object ? keyof (T|S) | ((item: T|S) => Key) : Key | ((item: T|S) => Key), children: (item: T|S, index: number, key: Key) => ReactNode, fallback?: ReactNode, filter?: Parameters<Array<T>["filter"]>[0], sort?: true | Parameters<Array<T>["sort"]>[0], map?: (...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S }): null|JSX.Element|Array<JSX.Element>
```


> ### Params
>
> - __props__: _Object_  
component properties object.
> - __props.of__: _Array<T>_  
array of elements.
> - __props.elementKey?__: _(T|S) extends object ? keyof (T|S) | ((item: T|S) => Key) : Key | ((item: T|S) => Key)_  
if the elements are objects, this prop can be a key of the elements in __of__ prop, or a function with one parameter which type is the type of the elements in __of__ prop and returns a __React.Key__ type, otherwise this prop can be the function described before or a __React.Key__. If it isn't specified, element index in __of__ props will be used as key.
> - __props.children__: _(item: T|S, index: number, key: Key) => ReactNode_  
it's a function that takes the current item as first argument and optionally a second argument that is the index of current item and a third element that is the key specified in the _elementKey_ prop. Item is the current element of __of__ prop or, if __map__ prop is present, is the current element produces from __map__ prop.
> - __props.fallback?__: _ReactNode_  
optional element to render when _of_ prop is an empty array.
> - __props.filter?__: _Parameters<Array<T>["filter"]>[0]_  
callback executed to filter _of_ elements.
> - __props.map?__: _undefined|((...args: Parameters<Parameters<Array<T>["map"]>[0]>) => S)_  
callback executed to map _of_ elements.
> - __props.sort?__: _true|Parameters<Array<T>["sort"]>[0]_  
callback executed to sort _of_ elements or __`true`__ to use native sort.
>



> ### Returns
>
> __result__: elements list, rendered from _of_ prop or _fallback_ if exist, otherwise null.
> - _null|JSX.Element|Array<JSX.Element>_  
>