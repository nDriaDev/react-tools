# useReducedMotion
Hook to detect if user prefers to reduce motion. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useReducedMotion)

## Usage

```tsx
export const UseReducedMotion = () => {
	const value = useReducedMotion();

	return <>
		<p
			style={{ color: value ? "red" : "rgb(152, 195, 121)"}}
		>
			{value ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
		</p>
	</>
}
```

> The component display user preferences about reducing motion.


## API

```tsx
useReducedMotion(): boolean
```





> ### Returns
>
> __result__: it is true if user prefers reduced motion, otherwise it is false.
> - _boolean_  
>