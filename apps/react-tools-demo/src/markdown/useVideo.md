# useVideo
Hook to use an HTML video element.

## Usage

```tsx
export const UseVideo = () => {
	const {MediaElement, state, controls: {play, pause}} = useVideo({ src: video, controls: true });

	return <div>
		{MediaElement}
		<p>Status: {state.paused ? "paused" : state.playing ? "playing" : "ready"}</p>
		<button onClick={play} disabled={state.playing}>Play</button>
		<button onClick={pause} disabled={state.paused}>Pause</button>
	</div>
}

```

> The component use _useVideo_ hook to use a video track.


## API

```tsx
useVideocreateHTMLMediaHook<HTMLVideoElement>("video");
```

> ### Params
>
> - __param__: _UseVideoProps_  
Media HTML Attributes of an html video element.
>

> ### Returns
>
> __result__:  _UseVideoResult_  
> Object with these properties:
> - __state__: object with current video properties:
> 		- _buffered_: array of objects, with __start__ and __end__ properties, or null. It indicates the ranges of the media source that the browser has buffered (if any) at the moment the buffered property is accessed.
> undefined
> undefined
> undefined
> undefined
> undefined
> undefined
> undefined
> - __controls__: object with current video properties:
> 		- _play_: function to set video.
> 		- _pause_: function to pause video.
> 		- _mute_: function to mute video.
> 		- _unmute_: function to unmute video.
> 		- _playbackRate_: function to set video playbackRate.
> 		- _volume_: function to set video volume.
> 		- _seek_: function to seek to the given time with low precision.
> - MediaElement: HTMLVideoElement to render.
> - ref: ref to HTMLVideoElement.
>