# getBase64
Function to obtain a Base64 from value specified if supported, otherwise throw an Error. [See demo](https://nDriaDev.io/react-tools/#/utils/getBase64)

## API

```tsx
getBase64<T>(target: string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[], options?: ToDataURLOptions | UseBase64ObjectOptions<T>): Promise<string>
```

> ### Params
>
> - __target__: _target: string | Blob | ArrayBuffer | HTMLCanvasElement | HTMLImageElement | T | T[]_
> - __options?__: _ToDataURLOptions | UseBase64ObjectOptions<T>_
>

> ### Returns
>
> 
> - _string_  
>