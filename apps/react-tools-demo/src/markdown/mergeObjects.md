# mergeObjects
Function that, given two objects version, merges them into a single one. Via an optional parameter _forceUndefinedValue_ you can define how undefined values are treated. [See demo](https://ndriadev.github.io/react-tools/#/utils/mergedObject)

## API

```tsx
mergeObjects<T extends object>(oldObj: T, newObj: RecursivePartial<T>, forceUndefinedValue?: boolean): T
```

> ### Params
>
> - __oldObj__: _object_  
previous object version.
> - __newObj__: _RecursivePartial<object>_  
new object version.
> - __forceUndefinedValue=false?__: _boolean_  
boolean to indicate how treat undefined value.
>


> ### Returns
>
> __result__: mergedObject
> - _Record<string, any>_  
>