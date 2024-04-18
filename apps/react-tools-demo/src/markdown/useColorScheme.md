# useColorScheme
Hook to handle ColorScheme. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useColorScheme)

## Usage

```tsx
export const UseColorScheme = () => {
	const [value, update] = useColorScheme({
		defaultValue: "mediaQuery",
		returnValue: true,
		getter: useCallback(() => sessionStorage.getItem("color-scheme") as "dark" | "light" | null, []),
		setter: useCallback((val: "dark" | "light") => sessionStorage.setItem("color-scheme", val), [])
	});

	return (
		<div className="container-themed" data-color={value}>
			<p>Current color-scheme is: {value}</p>
			<button onClick={() => update(value === "dark" ? "light" : "dark")}>Change color</button>
		</div>
	);
}
```

> The component uses _useColorScheme_ with these properties:
> - _defaultValue_: __"mediaQuery"__, so it read color-scheme with media query.
> - _returnValue_: __true__, so it returns current value.
> - _getter_: a function that returns value from sessionStorage item with key "color-scheme".
> - _setter_: a function that save current value to sessionStorage item with key "color-scheme".
> The component renders a div with a class container that changes border and text colors by color-scheme selected and a button to manually change value.


## API

```tsx
useColorScheme({ defaultValue, getter, setter, returnValue }: { defaultValue: "dark" | "light" | "mediaQuery", getter?: () => "dark" | "light" | null | undefined, setter?: (schema: "light"|"dark") => void, returnValue: boolean }): ["light" | "dark", (schema: "light" | "dark") => void] | ((schema: "light" | "dark") => void)
```


> ### Params
>
> - __param__: _Object_
> - __param.defaultValue__: _"dark"|"light"|"mediaQuery"_  
initial value if _getter_ function isn't present or isn't return a valid value. It can be _dark_ _light_ or _mediaQuery_ which means that must to be used media query prefers-color-scheme to detect initial value.
> - __param.getter?__: _()=>"dark"|"light"|null|undefined_  
an optional function used to initialize current value. For example, it can be useful for reading the value from an attribute of an html file or from localStorage.
> - __param.setter?__: _("dark"|"light")=>void_  
an optional function, which should work in conjunction with the _getter_ function, to run when the color scheme changes to save the value for future runs.
> - __param.returnValue__: _boolean_  
if true returns only a function to manually change the color scheme value.
>



> ### Returns
>
> __result__: if _returnValue_ is true, _result_ is the function to update color scheme value, otherwise is an array where first element is current value and second element is the function to update value.
> - __Union of__:  
>     - __Array__:  
>         - _"dark"|"light"_  
>         - _(schema:"dark"|"light") => void_  
>     - _(schema:"dark"|"light") => void_  
>