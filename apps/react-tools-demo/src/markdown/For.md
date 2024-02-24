# For
Component to optimize the rendering of a list of elements without need to specify a key value for all elements, and other options. [See demo](https://ndriadev.github.io/react-tools/#/components/For)

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
For = memo(<T extends unknown>({ of, children, filter, map, sort, elementKey, fallback }: ForProps<T>)
```

> ### Params
>
> - __props__: _ForProps<T>_  
component properties object.
> - __props.of__: _T[]_  
array of elements.
> - __props.elementKey?__: _T extends object ? keyof T | ((item: T) => Key) : Key | ((item: T) => Key)_  
if the elements are objects, this prop can be a key of the elements in __of__ prop, or a function with one parameter which type is the type of the elements in __of__ prop and returns a __React.Key__ type, otherwise this prop can be the function described before or a __React.Key__. If it isn't specified, element index in __of__ props will be used as key.
> - __props.children__: _(item: T, index: number, key: Key) => ReactNode_  
it's a function that takes the current item as first argument and optionally a second argument that is the index of element in _of_ prop and a third element that is the key specified in the _elementKey_ prop.
> - __props.fallback?__: _ReactNode_  
optional element to render when _of_ prop is an empty array.
> - __props.filter?__: _<S extends T>(val: T, index: number, arr: T[]) => val is S_  
callback executed to filter _of_ elements.
> - __props.map?__: _<U extends T>(val: T, index: number, arr: T[]) => U_  
callback executed to map _of_ elements.
> - __props.sort?__: _true | ((a: T, b: T) => number)_  
callback executed to sort _of_ elements or __`true`__ to use native sort.
>


> ### Returns
>
> __result__: elements list, rendered from _of_ prop or _fallback_.
> - _JSX.Element_  
>