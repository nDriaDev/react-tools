# usePopover
Hook to use [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).

## Usage

```tsx
export const UsePopover = () => {
	const { Popover, isSupported, isOpen, showPopover} = usePopover({
		mode: "auto",
	})

	const style = useMemo<CSSProperties>(() => ({
		width: 300,
		height: 200,
		position: "absolute"
	}), []);

	return <div>
		<p>Is supported: {isSupported ? "Yes" : "No"}</p>
		<button onClick={showPopover} disabled={isOpen}>Open Popover</button>
		<Popover style={style}>
			<h2>
				Popover heading
			</h2>
			<p>Popover content</p>
		</Popover>
	</div>
}
```

> The component uses _usePopover_ hook to show a popover when a button is clicked.


## API

```tsx
usePopover({ mode, onBeforeToggle, onToggle }: UsePopoverProps): UsePopoverResult
```

> ### Params
>
> - __param__: _UsePopoverProps_  
object
> - __param.mode__: _"auto"|"manual"_  
popover state: __auto__ indicates that popover can be "light dismissed" by selecting outside the popover area, by contrast __manual__ popover must always be explicity hidden.
> - __param.onBeforeToggle?__: _(evt: ToggleEvent) => void_  
function that will be executed before popover showed/hidden.
> - __param.onToggle?__: _(evt: ToggleEvent) => void_  
function that will be executed when popover has been showed/hidden.
>

> ### Returns
>
> __result__:  _UsePopoverResult_  
> Object with these properties:
> - __isSupported__: boolean that indicates if Popover API is supported or not.
> - __isSupported__: boolean that indicates if popover is opened or not.
> - __showPopover__: function to show popover.
> - __hidePopover__: function to hide popover.
> - __togglePopover__: function to toggle popover.
> - __Popover__: Component that wraps the element to render in popover. It can be stylized with _className_ and _style_ props.
>