# getObjectFromDottedString
Function that, given a path, a value and an optional object, returns an object with as many properties as there are in the path, assigning the value passed to the last one specified.

## API

```tsx
getObjectFromDottedString<T, E extends Record<string, unknown>>(path: string, value: T, object?: E): E
```

> ### Params
>
> - __path__: _string_  
string value separated by dot, indicating that path where assign the passed value.
> - __value__: _unknown_  
value to assign to the property specified in path.
> - __object?__: _Record<string,unknown>_  
optional object that will be used as start object.
>

> ### Returns
>
> __result__: object create by path and value indicated.
> - _Record<string, unknown>_  
>