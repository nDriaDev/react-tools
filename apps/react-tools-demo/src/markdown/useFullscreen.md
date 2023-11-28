# useFullscreen
Hook to use [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

## Usage

```tsx
export const UseFullscreen = () => {
	const [isFullscreen, cbRef, enterFullscreen, exitFullscreen] = useFullscreen();
	return (
		<div ref={cbRef}>
			<div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
			<div>
				<button type="button" onClick={()=>enterFullscreen()}>
					enter Fullscreen
				</button>
				<button type="button" onClick={exitFullscreen} style={{ margin: '0 8px' }}>
					exit Fullscreen
				</button>
			</div>
		</div>
	);
}
```

> The component render a div with a label to indicate if it is in fullscreen mode or not and two button to enter and exit from fullscreen mode.


## API

```tsx
useFullscreen <T extends Element>(onEnter?: () => void|Promise<void>, onChange?: (evt: Event) => void, onExit?: () => void|Promise<void>): [boolean, RefCallback<T>, (opts?: FullscreenOptions) => Promise<void>, () => Promise<void>] 
```

> ### Params
>
> - __onEnter?__: _()=>void|Promise<void>_  
callback that will be executed before enter in fullscreen mode.
> - __onChange?__: _(evt: Event)=>void_  
callback that will be executed when target element fullscreen change.
> - __onExit?__: _()=>void|Promise<void>_  
callback that will be executed before exit from fullscreen mode.
>

> ### Returns
>
> __result__: array with: _isFullscreen_: boolean to indicate if there is fullscreen or not; _refCallback_: ref callback to be attached at target element; _enter_: function to enter in fullscreen mode; _exit_: function to exit from fullscreen mode.
> - __Array__:  
>     - _boolean_  
>     - _RefCallback<T>_  
>     - _(opts?: FullscreenOptions) => Promise<void>_  
>     - _() => Promise<void>_  
>