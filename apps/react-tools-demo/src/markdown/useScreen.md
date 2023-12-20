# useScreen
Hook to work with [Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API) and [Window Management API](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API).

## Usage

```tsx
export const UseScreen = () => {
	const [details] = useScreen(true);

	return <div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto", border: "1px solid lightgray" }}>
		<p><strong>Current screen:</strong></p>
		<pre>{JSON.stringify(details.currentScreen, null, 2)}</pre>
		<p><strong>Screens:</strong></p>
		{
			details.screens?.map((el, index) => (
				<pre key={index}>{el.label}</pre>
			))
		}
	</div>
}
```

> The component shows screens information.


## API

```tsx
useScreen(allScreen?:boolean): [ScreenDetails, (orientation: OrientationLockType) => Promise<void>, ()=>void]
```

> ### Params
>
> - __allScreen=false?__: _boolean_  
to interact with all screens or only with current screen.
>

> ### Returns
>
> :  __Array__:  
    - _ScreenDetails_  
    - _(orientation: OrientationLockType)=>void_  
    - _()=> void_  
> It contains:
> - __details__: an object with two properties:
>     - _currentScreen_: object of type _ScreenDetail_ with informations of current screen.
>     - _screens_: a _ScreenDetail_ array of all available screens, if browser supports this functionality, otherwise _undefined_.
>     - A _ScreenDetail_ object has these properties:
>         - __availHeight__
>         - __availWidth__
>         - __height__
>         - __width__
>         - __colorDepth__
>         - __pixelDepth__
>         - __orientation__:
>             - __angle__
>             - __type__
>         - __availLeft__: only available if browser supports them, otherwise is _undefined_
>         - __availTop__: only available if browser supports them, otherwise is _undefined_
>         - __left__: only available if browser supports them, otherwise is _undefined_
>         - __top__: only available if browser supports them, otherwise is _undefined_
>         - __devicePixelRatio__: only available if browser supports them, otherwise is _undefined_
>         - __isInternal__: only available if browser supports them, otherwise is _undefined_
>         - __isPrimary__: only available if browser supports them, otherwise is _undefined_
>         - __label__: only available if browser supports them, otherwise is _undefined_
> - __lock__: function that locks the orientation of the containing document to the specified orientation. Typically orientation locking is only enabled on mobile devices, and when the browser context is full screen.
> - __unlock__: function that unlocks the orientation of the containing document from its default orientation.
>