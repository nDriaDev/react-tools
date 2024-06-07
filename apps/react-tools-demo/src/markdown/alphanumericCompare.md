# alphanumericCompare
Function which, given two strings, the type of comparison to be verified, and optional options, performs the comparison between the two strings and returns a boolean indicating whether the indicated comparison is respected or not. [See demo](https://react-tools.ndria.dev/#/utils/alphanumericCompare)

## API

```tsx
alphanumericCompare({ string1, string2, compareType, locales, opts }: {string1: string, string2: string, compareType?: "<" | ">" | "=" | ">=" | "<=", locales?: Intl.LocalesArgument, opts?: Intl.CollatorOptions}): boolean|number
```


> ### Params
>
> - __param__: _Object_  
object
> - __param.string1__: _string_  
first string to compare.
> - __param.string2__: _string_  
second string to compare.
> - __param.compareType?__: _"<" | ">" | "=" | ">=" | "<="_  
type of compare to verify.
> - __param.locales?__: _Intl.LocalesArgument_  
A string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. The runtime's default locale is used when undefined is passed or when none of the specified locale identifiers is supported.
> - __param.opts?__: _Intl.CollatorOptions_  
An object adjusting the output format. Corresponds to the options parameter of the Intl.Collator() constructor.
>



> ### Returns
>
> __result__: boolean or number that indicates whether the indicated comparison is respected or not.
> - _boolean|number_  
>