# alphanumericCompare
Function which, given two strings, the type of comparison to be verified, and optional options, performs the comparison between the two strings and returns a boolean indicating whether the indicated comparison is respected or not. [See demo](https://ndriadev.github.io/react-tools/#/utils/alphanumericCompare)

## API

```tsx
alphanumericCompare(string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", opts?: Intl.CollatorOptions)
```


> ### Params
>
> - __string1__: _string_  
first string to compare.
> - __string2__: _string_  
second string to compare.
> - __compareType__: _"<" | ">" | "=" | ">=" | "<="_  
type of compare to verify.
> - __opts__: _Intl.CollatorOptions_  
options object to execute compare.
>



> ### Returns
>
> __result__: boolean that indicates whether the indicated comparison is respected or not.
> - _boolean_  
>