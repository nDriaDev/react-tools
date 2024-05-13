# getKeyObjectFromValue
Function that given an object and a value, returns the corrispondent key of this value or undefined. [See demo](https://react-tools.ndria.dev/#/utils/getKeyObjectFromValue)

## API

```tsx
getKeyObjectFromValue<T extends Record<string, unknown>, E extends string|number|symbol = keyof T>(object: T, value?: unknown): E | undefined
```


> ### Params
>
> - __object__: _Record<string,unknown>_  
object from which get key by a value.
> - __value__: _unknown_  
value of the object
>



> ### Returns
>
> __key__: object key for the given value.
> - _keyof Record<string,unknown>|undefined_  
>