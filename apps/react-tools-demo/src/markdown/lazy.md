# lazy
Wrapper around _React.lazy_ that works also with component without default export and with possibility to execute a function before and after component loading.

## API

```tsx
lazy<T extends ComponentType<unknown>>(load: () => Promise<{ [k:string]: T }>, opts: { componentName?: string, beforeLoad?: () => void, afterLoad?: () => void } = {}): LazyExoticComponent<T>
```

> ### Params
>
> - __load__: _() => Promise<{ [k:string]: T }>_  
function that returns a Promise or another thenable.
> - __opts?__: _Object_  
optional settings.
> - __opts.componentName?__: _string_  
name of the of the module to load lazy. If it is missing, and the _load_ execution result not have a default property, the first key in res is returned as result.
> - __opts.beforeLoad?__: _()=> void_  
function that will be executed before load component.
> - __opts.afterLoad?__: _()=> void_  
function that will be executed after load component.
>

> ### Returns
>
> __result__: a React component you can render in your tree.
> - _LazyExoticComponent<T>_  
>