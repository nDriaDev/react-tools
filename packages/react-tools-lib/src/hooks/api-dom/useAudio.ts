import createHTMLMediaHook from "../../utils/createHTMLMediaElement";

/**
 * **`useAudio`**: Hook to use an HTML audio element. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useAudio)
 * @param {UseAudioProps} param - Media HTML Attributes of an html audio element.
 * @returns {UseAudioResult} result
 * Object with these properties:
 * - __state__: object with current audio properties:
 * 		- _buffered_: array of objects, with __start__ and __end__ properties, or null. It indicates the ranges of the media source that the browser has buffered (if any) at the moment the buffered property is accessed.
		- _duration_: a read-only double-precision floating-point value indicating the total duration of the media in seconds. If no media data is available, the returned value is NaN.
		- _paused_: returns a boolean that indicates whether the media element is paused.
		- _muted_: boolean that determines whether audio is muted. true if the audio is muted and false otherwise.
		- _time_: value indicating the current playback time in seconds; if the media has not started to play and has not been seeked, this value is the media's initial playback time. Setting this value seeks the media to the new time. The time is specified relative to the media's timeline.
		- _volume_: double indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).
		- _playbackRate_: double that indicates the rate at which the media is being played back.
		- _playing_: boolean indicating if audio is playing or not.
 * - __controls__: object with current audio properties:
 * 		- _play_: function to set audio.
 * 		- _pause_: function to pause audio.
 * 		- _mute_: function to mute audio.
 * 		- _unmute_: function to unmute audio.
 * 		- _playbackRate_: function to set audio playbackRate.
 * 		- _volume_: function to set audio volume.
 * 		- _seek_: function to seek to the given time with low precision.
 * - MediaElement: HTMLAudioElement to render.
 * - ref: ref to HTMLAudioElement.
 */
const useAudio = createHTMLMediaHook<HTMLAudioElement>("audio");
export {useAudio}