# uniqueElementsArray
Function that given one or more array of object, returns a single array with unique elements by a specified property, an array of properties or _none_. [See demo](https://ndriadev.github.io/react-tools/#/utils/removeDuplicatedFromArray)

## API

```tsx
uniqueElementsArray<T extends string | number | boolean | ((...args: unknown[]) => unknown) | bigint | object>(property: keyof T | (keyof T)[] | "none", ...args: (T[])[]): T[]
```

> ### Params
>
> - __property__: _keyof T | (keyof T)[] | "none"_  
propertyo or array of properties of the arrays, or _none_. If elements of the arrays aren't objects, _none_ is required.
> - __args__: _(T[])[]_  
arrays from which remove duplicated.
>


> ### Returns
>
> __result__: array
> - _T[]_  
>