# useResponsive
Hook for getting responsive window size. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useResponsive). It receives an optional param __config__ to manually setting breakpoint keys. __config__ can have a keys subset and value can be a number or an object with _value_ and _condition_ properties. If _value_ is a number, the condition will be ">". By default Breakpoints are:
- xs: { value: 576, condition: "<" }
- sm: { value: 576, condition: ">=" }
- md: { value: 768, condition: ">=" }
- lg: { value: 992, condition: ">=" }
- xl: { value: 1200, condition: ">=" }

## Usage

```tsx
export const UseResponsive = () => {
	const responsive = useResponsive();

	return <p>{JSON.stringify(responsive, null, 2)}</p>
}
```

> The component initialize _useResponsive_ hook without param and displays screen size value.
> 
> Try to change window size to see how value changes.


## API

```tsx
useResponsive<T extends UseResponsiveKeys>(config?: UseResponsiveBreakpoints<T>): { [s in (keyof typeof defaultConfig)]: boolean } | { [s in UseResponsiveKeys<T>]: boolean }
```


> ### Params
>
> - __config?__: _UseResponsiveBreakpoints_  
custom breakpoint object.
>



> ### Returns
>
> __breakpoint key__: returns the __size key__ of the __config__, parameter if passed otherwise  __default config__, corresponding to the size of the window.
> - _keyof UseResponsiveBreakpoints_  
>