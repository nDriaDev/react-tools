# useTitle
Hook to handling app page title. It works _outside Component_ also and it returns array of two functions to read and write title. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useTitle)

## Usage

```tsx
const previousTitle = useTitle()[0]();

export const UseTitle = () => {
	const [,setTitle] = useTitle("Title 1");

	useEffect(() => {
		const id = setTimeout(() => {
			setTitle("Title 2");
		}, 3000);
		return () => {
			clearTimeout(id);
			setTitle(previousTitle);
		}
	}, [setTitle]);
}
```

> First, in a variable outside the component is kept track of the page title. The _useTitle_ hook is invoked in the component with the _title_ __Title 1__ parameter and the returned _setTitle_ function is used. After 3 seconds the title is changed with the _setTitle_ function to _title_ __Title 2__.
> 
> When the component is unmounted, the title saved in the variable outside the component is set as the title.


## API

```tsx
useTitle(title?: string): [() => string, (title: string) => void]
```


> ### Params
>
> - __title?__: _string_
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _() => string_  
>     - _(title: string) => void_  
>