# useReducerHistory
Custom useReducer that tracks and allows to use previous values.

## Usage

The implementation is like that _useStateHistory_ but built on _useReducer_.

Please visit [useStateHistory](#/useStateHistory) example to see how it works.

## API

```tsx
useReducerHistory<R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>, capacity: number | "no-limit" = "no-limit"): [ReducerState<R>, Dispatch<ReducerAction<R>>, { history: readonly ReducerState<R>[], presentPointer: number, trackUpdate: (enable: boolean) => void, canUndo: boolean, canRedo: boolean, undo: () => void, redo: () => void, go: (index: number) => void, clear: (value?: ReducerAction<R>) => void }]
```

> ### Params
>
> - __reducer__: _R extends Reducer<any, any>_  
The reducer function that specifies how the state gets updated.
> - __initialState__: _ReducerState<R>_  
The value from which the initial state is calculated. How the initial state is calculated from it depends on the next _init_ argument.
> - __initializer?__: _(init: ReducerState<R>) => ReducerState<R>_  
Function that should return the _initial state_. If it’s not specified, the initial state is set to _initialState_, otherwise is set to the result of calling _initializer(initialState)_.
> - __capacity="no-limit"?__: _number | "no-limit"_  
history capacity (default 'no-limit').
>

> ### Returns
>
> __array__
> - __Array__:  
>     - _ReducerState<R>_  
>     - _Dispatch<ReducerAction<R>>_  
>     - __Object__:  
>         - __history__ : _readonly ReducerState<R>[]_  
>         - __presentPointer__ : _number_  
>         - __trackUpdate__ : _(enable:boolean) => void_  
>         - __canUndo__ : _boolean_  
>         - __canRedo__ : _boolean_  
>         - __undo__ : _() => void_  
>         - __redo__ : _() => void_  
>         - __go__ : _(index: number) => void_  
>         - __clear__ : _(value?: ReducerAction<R>) => void_  
>