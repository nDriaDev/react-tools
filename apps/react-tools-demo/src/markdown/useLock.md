# useLock
Hook to use [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API).

## API

```tsx
useLock<T>(name?: string, cb?: LockGrantedCallback, opts?: LockOptions): [(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>, () => Promise<LockManagerSnapshot>]
```

> ### Params
>
> - __name?__: _string_  
an identifier for the lock.
> - __options?__: _LockGrantedCallback | LockOptions_  
an object describing characteristics of the lock.
> - __callback?__: _LockGrantedCallback_  
method called when the lock is granted.
>

> ### Returns
>
> __result__:  __Array__:  
    - _<T>(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>_  
    - _() => Promise<LockManagerSnapshot>_  
> Array with two element:
> - first element: __acquire__ function that requests a Lock object with parameters specified in hook invocation or passed to this function. The requested Lock is passed to the callback specified in hook or passed to this function. It returns a Promise that resolves (or rejects) with the result of the callback after the lock is released, or rejects if the request is aborted.
> - second element: __query__ function that returns a Promise that resolves with an object containing information about held and pending locks.
>