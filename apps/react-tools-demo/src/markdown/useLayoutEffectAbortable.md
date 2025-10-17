# useLayoutEffectAbortable
Custom useLayoutEffect with a unified cancellation mechanism to ensure complete cleanup and to prevent the warning that appears on old React version _"Can't perform a React state update on an unmounted component"_. [See demo](https://react-tools.ndria.dev/#/hooks/lifecycle/useEffectAbortable)

## Usage

The implementation is like that _useEffectAbortable_.

Please visit [useEffectAbortable](#/hooks/lifecycle/useEffectAbortable) example to see how it works.

## API

```tsx
useLayoutEffectAbortable<T = unknown>(cb: (signal: AbortSignal) => void | Promise<void> | (() => void) | (Promise<() => void>), deps: DependencyListTyped<T>)
```


> ### Params
>
> - __cb__: _(signal: AbortSignal)=> void | Promise<void> | (() => void) | (Promise<() => void>)_  
Imperative function with abort signal parameter that can return a cleanup function.
> - __deps__: _DependencyListTyped_  
typed dependency list.
>



> ### Returns
>
> 
> - _void_  
>