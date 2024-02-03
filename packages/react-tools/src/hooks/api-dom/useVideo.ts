import createHTMLMediaHook from "../../utils/createHTMLMediaElement";

/**
 * **`useVideo`**: Hook to use an HTML video element. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useVideo)
 * @param {UseVideoProps} param - Media HTML Attributes of an html video element.
 * @returns {UseVideoResult} result
 * Object with these properties:
 * - __state__: object with current video properties:
 * 		- _buffered_: array of objects, with __start__ and __end__ properties, or null. It indicates the ranges of the media source that the browser has buffered (if any) at the moment the buffered property is accessed.
		- _duration_: a read-only double-precision floating-point value indicating the total duration of the media in seconds. If no media data is available, the returned value is NaN.
		- _paused_: returns a boolean that indicates whether the media element is paused.
		- _muted_: boolean that determines whether video is muted. true if the video is muted and false otherwise.
		- _time_: value indicating the current playback time in seconds; if the media has not started to play and has not been seeked, this value is the media's initial playback time. Setting this value seeks the media to the new time. The time is specified relative to the media's timeline.
		- _volume_: double indicating the video volume, from 0.0 (silent) to 1.0 (loudest).
		- _playbackRate_: double that indicates the rate at which the media is being played back.
		- _playing_: boolean indicating if video is playing or not.
 * - __controls__: object with current video properties:
 * 		- _play_: function to set video.
 * 		- _pause_: function to pause video.
 * 		- _mute_: function to mute video.
 * 		- _unmute_: function to unmute video.
 * 		- _playbackRate_: function to set video playbackRate.
 * 		- _volume_: function to set video volume.
 * 		- _seek_: function to seek to the given time with low precision.
 * - MediaElement: HTMLVideoElement to render.
 * - ref: ref to HTMLVideoElement.
 */
const useVideo = createHTMLMediaHook<HTMLVideoElement>("video");
export {useVideo}