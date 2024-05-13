# changeStringCase
Function that given a string, a case type, and an optional delimiter, returns the string in the specified case or empty string. [See demo](https://react-tools.ndria.dev/#/utils/changeStringCase)

## API

```tsx
changeStringCase({string, caseType, delimiter}:{ string?: string, caseType: "pascalCase" | "snakeCase" | "kebabCase" | "camelCase", delimiter?: "upperCase" | "lowerCase" | string}): string
```


> ### Params
>
> - __param__: _Object_  
object
> - __param.string?__: _string|undefined_  
string to the which change case.
> - __param.caseType__: _"pascalCase" | "snakeCase" | "kebabCase" | "camelCase"_  
selected case to change string.
> - __param.delemiter?__: _"upperCase" | "lowerCase" | string_  
optional delemiter for case that support it.
>



> ### Returns
>
> __result__: string with changed case or empty string.
> - _string_  
>