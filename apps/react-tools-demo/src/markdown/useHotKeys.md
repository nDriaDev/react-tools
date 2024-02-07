# useHotKeys
Hook to listen for the keyboard press, support key combinations, built on [hotKeyHandler](#/hotKeyHandler) utility function. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useHotKeys)

## Usage

```tsx
export const UseHotKeys = () => {
	const [state, setState] = useState("");
	useHotKeys({
		hotKey: "ctrl+shift+b",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrl+shift+b")
		}
	});
	useHotKeys({
		hotKey: "ctrlCommand++",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrlCommand++")
		}
	});
	useHotKeys({
		hotKey: "ctrlCommand+a",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrlCommand+a")
		}
	});
	useHotKeys({
		hotKey: "Escape",
		listener: (evt) => {
			evt.preventDefault();
			setState("")
		}
	});

	return <>
		<p>Message: {state ? <><strong style={{color: "darkcyan"}}>{state}</strong> pressed.</>: ""}</p>
	</>
}
```

> The component uses _useHotKeys_ hook to print a message on _ctrl+shift+a_, _ctrlCommand+p_ and _ctrlCommand+a_ keys combinations and clear message when _Escape_ is pressed.


## API

```tsx
useHotKeys({ hotKey, type = "keydown", target = window, listener, listenerOpts }: { hotKey: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, type?: "keydown" | "keyup", target?: RefObject<HTMLElement> | Window, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>, listenerOpts?: boolean | AddEventListenerOptions }): (() => void)
```

> ### Params
>
> - __options__: _Object_
> - __options.hotKey__: _`${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`_  
hotKey string: _ctrlCommand_ indicates to listen __Ctrl__ (on Windows) or __Command__ (on Mac) keys.
> - __options.type="keydown"?__: _"keydown"|"keyup"_  
event type.
> - __options.listener__: _(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void | Promise<void>_  
listener to be executed on specified event.
> - __options.target=window?__: _RefObject<HTMLElement> | Window_  
element on which attaching eventListener.
> - __options.listenerOpts?__: _boolean | AddEventListenerOptions_  
options for listener.
>


> ### Returns
>
> __remove__: used to manually remove the eventListener, otherwise is removed when component is unmounted.
> - _()=>void_  
>