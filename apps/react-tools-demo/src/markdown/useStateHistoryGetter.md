# useStateHistoryGetter
Custom useState with getter state function and that tracks and allows to use previous values.

## Usage

The implementation is like that _useStateHistory_, adding getter function of _useStateGetReset_.

Please visit [useStateHistory](#/useStateHistory) and [useStateGetReset](#/useStateGetReset) examples to see how it works.

## API

```tsx
useStateHistoryGetter<T>(initialState: T | (() => T), capacity: number | "no-limit" = "no-limit"): [T, Dispatch<SetStateAction<T>>, () => T, ReturnType<typeof useStateHistory<T>>[2]]
```

> ### Params
>
> - __initialState__: _T | () => T_  
value or a function.
> - __capacity="no-limit"?__: _number | "no-limit"_  
history capacity (default 'no-limit').
>

> ### Returns
>
> __array__
> - __Array__:  
>     - _T_  
>     - _Dispatch<SetStateAction<T>>_  
>     - _() => T_  
>     - __Object__:  
>         - __history__ : _readonly T[]_  
>         - __presentPointer__ : _number_  
>         - __trackUpdate__ : _(enable:boolean) => void_  
>         - __canUndo__ : _boolean_  
>         - __canRedo__ : _boolean_  
>         - __undo__ : _() => void_  
>         - __redo__ : _() => void_  
>         - __go__ : _(index: number) => void_  
>         - __clear__ : _(value?: T) => void_  
>