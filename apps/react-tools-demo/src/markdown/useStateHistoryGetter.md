# useStateHistoryGetter
Custom useState with getter state function and that tracks and allows to use previous values.

## Usage

The implementation is like that _useStateHistory_, adding getter function of _useStateGetReset_.

Please visit [useStateHistory](/useStateHistory) and [useStateGetReset](/useStateGetReset) examples to see how it works.

## API

```tsx
useStateHistoryGetter <T>(initialState: T | (() => T), capacity: number | "no-limit" = "no-limit"): [T, Dispatch<SetStateAction<T>>, () => T, ReturnType<typeof useStateHistory<T>>[2]] 
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
>         - ___history__ : _readonly T[]_  
>         - ___presentPointer__ : _number_  
>         - ___trackUpdate__ : _(enable:boolean) => void_  
>         - ___canUndo__ : _boolean_  
>         - ___canRedo__ : _boolean_  
>         - ___undo__ : _() => void_  
>         - ___redo__ : _() => void_  
>         - ___go__ : _(index: number) => void_  
>         - ___clear__ : _(value?: T) => void_  
>