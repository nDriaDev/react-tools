# lazy
Wrapper around _React.lazy_ with possibility to execute a function before and after component loading.

## API

```tsx
lazy<T extends ComponentType<unknown>>(load: () => Promise<{ default: T }>, beforeLoad?: () => void, afterLoad?: () => void): LazyExoticComponent<T>
```

> ### Params
>
> - __load__: _() => Promise<{ default: T }>_  
function that returns a Promise or another thenable.
> - __beforeLoad__: _()=> void_  
function that will be executed before load component.
> - __afterLoad__: _()=> void_  
function that will be executed after load component.
>

> ### Returns
>
> __result__: a React component you can render in your tree.
> - _LazyExoticComponent<T>_  
>