# useLayoutEffectDeepCompare
Custom useEffect that reexecutes EffectCallback only when deps are different in depth.

## Usage

The implementation is like that _useEffectDeepCompare_.

Please visit [useEffectDeepCompare](#/useEffectDeepCompare) example to see how it works.

## API

```tsx
useLayoutEffectDeepCompare (cb: EffectCallback, deps: DependencyList):void 
```

> ### Params
>
> - __cb__: _EffectCallback_  
Imperative function that can return a cleanup function.
> - __deps__: _DependencyList_  
dependency list.
>

> ### Returns
>
> 
> - _void_  
>