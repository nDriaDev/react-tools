# useReducerGetReset
Custom useReducer with get and reset state functions. [See demo](https://react-tools.ndria.dev/#/hooks/state/useReducerGetReset)

## Usage

The implementation is like that _useStateGetReset_ but built on _useReducer_.

Please visit [useStateGetReset](#/hooks/state/useStateGetReset) example to see how it works.

## API

```tsx
useReducerGetReset<R extends Reducer<any, any>>(reducer: R, initialState: ReducerState<R>, initializer?: (init: ReducerState<R>) => ReducerState<R>): [ReducerState<R>, Dispatch<ReducerAction<R>>, ()=>ReducerState<R>, ()=>void]
```


> ### Params
>
> - __reducer__: _R extends Reducer<any, any>_  
The reducer function that specifies how the state gets updated.
> - __initialState__: _ReducerState<R>_  
The value from which the initial state is calculated. How the initial state is calculated from it depends on the next _init_ argument.
> - __initializer?__: _(init: ReducerState<R>) => ReducerState<R>_  
Function that should return the _initial state_. If it’s not specified, the initial state is set to _initialState_, otherwise is set to the result of calling _initializer(initialState)_.
>



> ### Returns
>
> __array__
> - __Array__:  
>     - _ReducerState<R>_  
>     - _Dispatch<ReducerAction<R>>_  
>     - _()=>ReducerState<R>_  
>     - _()=>void_  
>