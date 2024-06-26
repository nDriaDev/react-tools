# useLayoutEffectCompare
Custom useLayoutEffect that reexecutes EffectCallback only when comparator function, received as third parameter, returns true. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useLayoutEffectCompare)

## Usage

The implementation is like that _useEffectCompare_.

Please visit [useEffectCompare](#/hooks/lifecycle/useEffectCompare) example to see how it works.

## API

```tsx
useLayoutEffectCompare<T = unknown>(cb: EffectCallback, deps: DependencyListTyped<T>, compareFn?: CompareFn<T>)
```


> ### Params
>
> - __cb__: _EffectCallback_  
Imperative function that can return a cleanup function.
> - __deps__: _DependencyListTyped_  
typed dependency list.
> - __compareFn?__: _CompareFn_  
optional function that executes comparing between old and new `deps`: it returns true if they are different, otherwise false. If there isn't, hook works like normal useLayoutEffect.
>



> ### Returns
>
> 
> - _void_  
>