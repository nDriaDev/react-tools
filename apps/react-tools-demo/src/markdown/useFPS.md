# useFPS
Hook to detect FPS (Frames per second).

## Usage

```tsx
export const UseFPS = () => {
	const fps = useFPS();
	return <p>FPS: {fps.currentFps} - avg: {fps.avg} - Max FPS: {fps.maxFps}</p>
}
```

> The component uses _useFPS_ hook to compute FPS and shows details on screen.


## API

```tsx
useFPS({ everySeconds, windowSize }:UseFPSProps={windowSize:10, everySeconds:.5}): UseFPSResult
```

> ### Params
>
> - __opts?__: _UseFPSProps_  
configuration options to detect FPS.
> - __opts.everySeconds=0.5?__: _number_  
it indicates how often to compute FPS. Default is 0.5 second.
> - __opts.windowSize=10?__: _number_  
it indicates how FPS result keep in memory and computing average. Default is 10.
>

> ### Returns
>
> __result__:  _UseFPSResult_  
> Stateful object with these properties:
> -  __fps__: array of computed FPS by _windowSize_.
> -  __currentFps__: current FPS value.
> -  __avg__: average of FPS values kept in memory.
> -  __maxFps__: maximum FPS value computed.
>