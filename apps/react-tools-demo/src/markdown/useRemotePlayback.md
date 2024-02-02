# useRemotePlayback
Hook to use [RemotePlayback API](https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback)

## Usage

```tsx
export const UseRemotePlayback = () => {
	const { isSupported, ref, prompt, state } = useRemotePlayback<HTMLVideoElement>();

	return <div style={{display: "flex", flexDirection: "column", width: 'fit-content', alignItems: "center", margin: '0 auto'}}>
		<p>Is supported: {isSupported ? 'Yes' : 'No'}</p>
		<p>Current state: {state}</p>
		<video ref={ref} width="400" controls>
			<source src={video} type="video/mp4" />
			Your browser does not support HTML video.
		</video>
		<button style={{marginTop: 20}} onClick={prompt} disabled={state === "unavailable"}>Prompt</button>
	</div>
}

```

> The component use _useRemotePlayback_ hook to play a video in a remote device.


## API

```tsx
useRemotePlayback<T extends HTMLMediaElement>({ onConnecting, onConnect, onDisconnect, onError }: UseRemotePlaybackProps={}): UseRemotePlaybackResult<T>
```

> ### Params
>
> - __param__: _UseRemotePlaybackProps_  
object
> - __param.onConnecting?__: _(evt:Event) => void_  
function that will be executed when remote device has been connected.
> - __param.onConnect?__: _(evt:Event) => void_  
function that will be executed when remote device connecting.
> - __param.onDisconnect?__: _(evt:Event) => void_  
function that will be executed when remote device has been disconnected.
> - __param.onError?__: _(err: unknown) => void_  
function that will be executed on error watching or cancel watching devices availability.
>

> ### Returns
>
> __result__:  _UseRemotePlaybackResult_  
> Object with these properties:
> - __ref__: ref to attach media element.
> - __isSupported__: boolean that indicates if RemotePlayback API is available or not.
> - __state__: remote device state: _connected_, _connecting_ or _disconnect_.
> - __prompt__: function that prompts the user to select an available remote playback device and give permission for the current media to be played using that device.
>