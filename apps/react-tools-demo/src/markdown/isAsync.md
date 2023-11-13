# isAsync
It detects if a function is asynchronous.

## API

```tsx
isAsync <T extends unknown[], E = unknown>(fn: E | Promise<E> | ((...args: T)=> E | Promise<E>)): boolean 
```

> ### Params
>
> - ____: _(...args: unknown[])=> unknown | Promise<unknown>_
>

> ### Returns
>
> __result__
> - _boolean_  
>