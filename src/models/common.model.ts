import { DependencyListTyped } from "./utilityTypes.model";

/**
 * A comparison function used by hooks such as {@link useCallbackCompare} and
 * {@link useMemoCompare} to determine whether a dependency list has changed
 * between renders.
 *
 * @template T - The tuple type of the dependency list entries. Defaults to `unknown` when not specified.
 *
 * @param oldDeps - The dependency list from the previous render.
 * @param newDeps - The dependency list from the current render.
 * @returns `true` when the dependencies are considered **equal** and the
 *   memoized value or callback should be preserved; `false` when they differ
 *   and recomputation should occur.
 */
export interface CompareFn<T = unknown> {
	(oldDeps: DependencyListTyped<T>, newDeps: DependencyListTyped<T>): boolean
}

/**
 * A reactive snapshot of the current state of an `HTMLMediaElement` (`<audio>`
 * or `<video>`), returned alongside {@link HTMLMediaControls} by
 * {@link useAudio} and {@link useVideo}.
 */
export interface HTMLMediaState {
	/**
	 * An array of buffered time ranges, each described by a `start` and `end`
	 * value in seconds. Reflects `HTMLMediaElement.buffered`. `null` when the
	 * media element has not yet loaded any data.
	 */
	buffered: { start: number; end: number }[] | null;

	/**
	 * Total duration of the media in seconds. `NaN` before the media metadata
	 * has loaded, `Infinity` for live streams.
	 */
	duration: number;

	/**
	 * `true` when playback is paused or has not yet started. Mirrors
	 * `HTMLMediaElement.paused`.
	 */
	paused: boolean;

	/**
	 * `true` when the media is muted. Mirrors `HTMLMediaElement.muted`.
	 */
	muted: boolean;

	/**
	 * The current playback position in seconds. Mirrors
	 * `HTMLMediaElement.currentTime`.
	 */
	time: number;

	/**
	 * The current audio volume as a number between `0` (silent) and `1` (full
	 * volume). Mirrors `HTMLMediaElement.volume`.
	 */
	volume: number;

	/**
	 * The current playback speed multiplier. `1` is normal speed, `0.5` is half
	 * speed, `2` is double speed. Mirrors `HTMLMediaElement.playbackRate`.
	 */
	playbackRate: number;

	/**
	 * `true` when the media is actively playing (i.e. not paused, not ended,
	 * and not stalled). Derived from the combination of `paused` and the
	 * `playing` / `waiting` events.
	 */
	playing: boolean;
}

/**
 * Imperative controls for an `HTMLMediaElement` (`<audio>` or `<video>`),
 * returned alongside {@link HTMLMediaState} by {@link useAudio} and
 * {@link useVideo}.
 */
export interface HTMLMediaControls {
	/**
	 * Starts or resumes playback. Returns a `Promise` on browsers that support
	 * the asynchronous play API, or `void` on older implementations.
	 */
	play: () => Promise<void> | void;

	/**
	 * Pauses playback. No-op when the media is already paused.
	 */
	pause: () => void;

	/**
	 * Mutes the media element, setting `HTMLMediaElement.muted` to `true`.
	 * Does not affect the `volume` property.
	 */
	mute: () => void;

	/**
	 * Unmutes the media element, setting `HTMLMediaElement.muted` to `false`.
	 * Restores audio output at the current `volume` level.
	 */
	unmute: () => void;

	/**
	 * Sets the playback speed to the given multiplier. Accepts values between
	 * `0` and `16` — `1` is normal speed, values below `1` slow down playback,
	 * values above `1` speed it up. Mirrors `HTMLMediaElement.playbackRate`.
	 */
	playbackRate: (playbackRate: number) => void;

	/**
	 * Sets the audio volume to the given level. Accepts values between `0`
	 * (silent) and `1` (full volume). Mirrors `HTMLMediaElement.volume`.
	 */
	volume: (volume: number) => void;

	/**
	 * Seeks to the given position in the media, expressed in seconds. Mirrors
	 * `HTMLMediaElement.currentTime`.
	 */
	seek: (time: number) => void;
}