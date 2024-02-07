# removeDuplicatedFromArrayObjects
Function that given a property or an array of properties, and one or more array of object, returns a single array with unique objects by specified properties. If property is __none__, will be return an unique array. [See demo](https://ndriadev.github.io/react-tools/#/utils/removeDuplicatedFromArrayObjects)

## API

```tsx
removeDuplicatedFromArrayObjects<T extends Record<string, unknown>>(property: keyof T | (keyof T)[] | "none", ...args: (T[])[]): T[]
```

> ### Params
>
> - __property__: _keyof T | (keyof T)[] | "none"_  
property or array of properties belonged to objects inside _arrays_ that will be used like discriminating.
> - __args__: _(T[])[]_  
arrays from which remove duplicated
>


> ### Returns
>
> __result__: array
> - _T[]_  
>