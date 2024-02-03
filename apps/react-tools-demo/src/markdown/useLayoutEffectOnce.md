# useLayoutEffectOnce
Hook to executes _effect_ and _clean up_ after component mount __only once__. It prevents _React 18 StrictMode_ behavior if present, otherwise it works like a normal _useLayoutEffect_ with empty dependencies array. __*N.B.*__ Not use in a component with normal _useLayoutEffect_, if it executes a _React.DispatchAction_, because this action is executes twice if there is _React.StrictMode_. [See demo](https://nDriaDev.io/react-tools/#/hooks/lifecycle/useLayoutEffectOnce)

## Usage

The implementation is like that _useEffectOnce_.

Please visit [useEffectOnce](#/useEffectOnce) example to see how it works.

## API

```tsx
useLayoutEffectOnce(effect: EffectCallback)
```

> ### Params
>
> - __effect__: _EffectCallback_
>

> ### Returns
>
> 
> 
>