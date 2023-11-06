# useSyncExternalStore
UseSyncExternalStore polyfilled for React versions below 18 ___only client side___.

## API

```tsx
useSyncExternalStore<Snapshot>(subscribe: (onStoreChange: () => void) => () => void, getSnapshot: () => Snapshot): Snapshot 
```

> ### Params
>
> - __subscribe__: _(onStoreChange: () => void) => ()=>void_  
function to register a callback that is called whenever the store changes.
> - __getSnapshot__: _()=>Snapshot_  
function that returns the current value of the store.
>

> ### Returns
>
> __result__: state
> - _Snapshot_  
>