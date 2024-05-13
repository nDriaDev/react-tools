# removePropertiesFromArrayObjects
Function that, given an array of objects and a property or an array of properties, return a new array without specified properties. [See demo](https://react-tools.ndria.dev/#/utils/removePropertiesFromArrayObjects)

## API

```tsx
removePropertiesFromArrayObjects<T, E extends string | number | symbol = keyof T>(array: T[], property: E | E[]): Omit<T, E>[]
```


> ### Params
>
> - __array__: _T[]_  
array of object.
> - __property__: _keyof T| (keyof T)[]_  
a property object or an array of properties inside objects of the given array.
>



> ### Returns
>
> __array__: a new array without targeted properites.
> - _Omit<T,E>[]_  
>