# useMediaQuery
Hook to handle CSS mediaQuery. It returns an object with __matches__ and __media__ properties and receives an optional _onChange_ function to handle _MediaQueryListEvent change_ event.

## Usage

```tsx
export const UseMediaQuery = () => {
	const mediaQuery = useMediaQuery('(prefers-color-scheme: dark)');

	return <div style={{textAlign: "left"}}>
		<p>
			Color-scheme: {mediaQuery.matches ? "dark" : "light"}
		</p>
		<p>
			Media matched: {mediaQuery.media}
		</p>
	</div>
}
```

> The component uses _useMediaQuery_ hook to detect color-scheme and displays result.


## API

```tsx
useMediaQuery (mediaQuery: string, onChange?: (evt: MediaQueryListEvent) => void ): {matches: boolean, media: string} 
```

> ### Params
>
> - __mediaQuery__: _string_  
media query to test.
> - __onChange?__: _(evt: MediaQueryListEvent) => void_  
MediaQueryListEvent change handler.
>

> ### Returns
>
> __result__: object with __matches__, boolean value that returns true if the document currently matches the media query, __media__, string that represents media query.
> - __Object__:  
>     - __matches__ : _boolean_  
>     - __media__ : _string_  
>