# hotKeyHandler
Utility function for _onKeyDown_ and _onKeyUp_ events handler that supports keys combination. [See demo](https://ndriadev.github.io/react-tools/#/utils/hotKeyHandler)

## API

```tsx
hotKeyHandler(hotKeys: `${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`, listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>): (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void
```


> ### Params
>
> - __hotKeys__: _`${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}` | `${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${'alt' | 'ctrl' | 'meta' | 'shift' | 'ctrlCommand'}+${string}`_  
hotKey string: _ctrlCommand_ indicates to listen __Ctrl__ (on Windows) or __Command__ (on Mac) keys.
> - __listener__: _(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void | Promise<void>_  
listener to be executed on specified event
>



> ### Returns
>
> 
> - _(evt: KeyboardEvent|React.KeyboardEvent<HTMLElement>) => void_  
>