# isAsync
It detects if a function is asynchronous. [See demo](https://react-tools.ndria.dev/#/utils/isAsync)

## API

```tsx
isAsync<T extends unknown[], E = unknown>(fn: E | Promise<E> | ((...args: T)=> E | Promise<E>)): boolean
```


> ### Params
>
> - __fn__: _(...args: unknown[])=> unknown | Promise<unknown>_
>



> ### Returns
>
> __result__
> - _boolean_  
>