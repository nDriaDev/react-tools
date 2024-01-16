# useAudio
Hook to use an Audio source.

## Usage

```tsx
export const UseAudio = () => {
	const { state, play, pause } = useAudio({ url: audio });

	return <div>
		<p>Status: {state.status}</p>
		<button onClick={play} disabled={state.status === "playing"}>Play</button>
		<button onClick={pause} disabled={state.status !== "playing"}>Pause</button>
	</div>
}
```

> The component use _useAudio_ hook to use an audio track.


## API

```tsx
useAudio({ url, volume, loop, defaultMuted, autoPlay, playbackRate, onError }: UseAudioProps): UseAudioResult
```

> ### Params
>
> - __param__: _UseAudioProps_  
object
> - __param.url?__: _string_  
An optional string containing the URL of an audio file to be associated with the new audio element.
> - __param.volume?__: _number_  
A double indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).
> - __param.loop?__: _boolean_  
A boolean that reflects the loop HTML attribute, which indicates whether the media element should start over when it reaches the end.
> - __param.defaultMuted?__: _boolean_  
A boolean that reflects the muted HTML attribute, which indicates whether the media element's audio output should be muted by default.
> - __param.autoPlay?__: _boolean_  
A boolean value that reflects the autoplay HTML attribute, indicating whether playback should automatically begin as soon as enough media is available to do so without interruption.
> - __param.playbackRate?__: _number_  
A double that indicates the rate at which the media is being played back.
> - __param.onError] ?__: _OnErrorEventHandler_
>

> ### Returns
>
> __result__:  _UseAudioResult_  
> Object with these properties:
> - __state__: object with current audio properties:
> 		- _status_: value between __"unavailable"__ __"ready"__ __"playing"__ __"pause"__ indicating current audio status.
> 		- _volume_: current audio volume.
> 		- _playbackRate_: current audio playbackRate.
> - __setAudio__: function to set audio.
> - __setPlaybackRate__: function to set audio playbackRate.
> - __setVolume__: function to set audio volume.
> - __play__: function to play audio.
> - __pause__: function to pause audio.
> - __load__: function to reload audio.
>