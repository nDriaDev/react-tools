# isAsync
It detects if a function is asynchronous.

## API

```tsx
isAsync <T extends unknown[], E = unknown>(fn: (...args: T)=> E | Promise<E>): boolean 
```

> ### Params
>
> - ____: _(...args: unknown[])=> Eìunknown | Promise<unknown>_
>

> ### Returns
>
> __result__
> - _boolean_  
>