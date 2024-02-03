# useAudio
Hook to use an HTML audio element. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useAudio)

## Usage

```tsx
export const UseAudio = () => {
	const {MediaElement, state, controls: {play, pause}} = useAudio({ src: audio, controls: true });

	return <div>
		{MediaElement}
		<p>Status: {state.paused ? "paused" : state.playing ? "playing" : "ready"}</p>
		<button onClick={play} disabled={state.playing}>Play</button>
		<button onClick={pause} disabled={state.paused}>Pause</button>
	</div>
}

```

> The component use _useAudio_ hook to use an audio track.


## API

```tsx
useAudiocreateHTMLMediaHook<HTMLAudioElement>("audio");
```

> ### Params
>
> - __param__: _UseAudioProps_  
Media HTML Attributes of an html audio element.
>

> ### Returns
>
> __result__:  _UseAudioResult_  
> Object with these properties:
> - __state__: object with current audio properties:
> 		- _buffered_: array of objects, with __start__ and __end__ properties, or null. It indicates the ranges of the media source that the browser has buffered (if any) at the moment the buffered property is accessed.
> undefined
> undefined
> undefined
> undefined
> undefined
> undefined
> undefined
> - __controls__: object with current audio properties:
> 		- _play_: function to set audio.
> 		- _pause_: function to pause audio.
> 		- _mute_: function to mute audio.
> 		- _unmute_: function to unmute audio.
> 		- _playbackRate_: function to set audio playbackRate.
> 		- _volume_: function to set audio volume.
> 		- _seek_: function to seek to the given time with low precision.
> - MediaElement: HTMLAudioElement to render.
> - ref: ref to HTMLAudioElement.
>