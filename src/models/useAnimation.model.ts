import { RefCallback } from "react";

/**
 * Configuration object accepted by [useAnimation](https://react-tools.ndria.dev/hooks/api-dom/useAnimation).
 *
 * Wraps the Web Animations API (`Element.animate()`) options with additional
 * React lifecycle hooks.
 */
export interface UseAnimationProps {
	/**
	 * Keyframes to animate. Accepts any format supported by `Element.animate()`:
	 * - `Keyframe[]` — an array of keyframe objects (e.g. `[{ opacity: 0 }, { opacity: 1 }]`).
	 * - `PropertyIndexedKeyframes` — an object mapping CSS properties to arrays of values.
	 * - `null` — no keyframes (the animation is effectively disabled).
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
	 */
	keyFrames: Keyframe[] | PropertyIndexedKeyframes | null;
	/**
	 * When `true`, the animation starts immediately when the element mounts
	 * (before a manual call to `playAnimation()`).
	 * @default false
	 */
	immediate?: boolean;
	/**
	 * Timing options forwarded to `Element.animate()`.
	 * Accepts either:
	 * - A `number` representing the total duration in milliseconds.
	 * - A `KeyframeAnimationOptions` object (e.g. `{ duration: 500, easing: "ease-in-out" }`).
	 */
	opts?: number | KeyframeAnimationOptions;
	/**
	 * Called when the animation completes (the `finish` event fires).
	 * @param this - The `Animation` instance that finished.
	 * @param evt - The `AnimationPlaybackEvent` fired by the animation.
	 */
	onFinish?: (this: Animation, evt: AnimationPlaybackEvent) => void;
	/**
	 * Called when the animation is removed from its element's effect stack.
	 * @param this - The `Animation` instance.
	 * @param evt - The event fired on removal.
	 */
	onRemove?: (this: Animation, evt: Event) => void;
	/**
	 * Called when the animation is cancelled.
	 * @param this - The `Animation` instance.
	 * @param evt - The `AnimationPlaybackEvent` fired on cancellation.
	 */
	onCancel?: (this: Animation, evt: AnimationPlaybackEvent) => void;
	/**
	 * Called when the Web Animations API throws an unexpected error.
	 * @param err - The caught error value.
	 */
	onError?: (err: unknown) => void;
}

/**
 * Result object returned by [useAnimation](https://react-tools.ndria.dev/hooks/api-dom/useAnimation).
 *
 * @template T Type of the target DOM element (defaults to `Element`).
 */
export interface UseAnimationResult<T extends Element> {
	/**
	 * `true` when the Web Animations API (`element.animate`) is available in the current browser.
	 * When `false`, all control functions are no-ops.
	 */
	isSupported: boolean;
	/**
	 * Callback ref to attach to the DOM element you want to animate.
	 * The animation is created and bound to the element when this ref is set.
	 */
	ref: RefCallback<T>;
	/** Resumes or starts the animation (calls `Animation.play()`). */
	playAnimation: () => void;
	/** Pauses the animation at its current position (calls `Animation.pause()`). */
	pauseAnimation: () => void;
	/** Immediately jumps the animation to its end state (calls `Animation.finish()`). */
	finishAnimation: () => void;
	/** Cancels the animation, removing all effects and resetting to the initial state (calls `Animation.cancel()`). */
	cancelAnimation: () => void;
	/**
	 * Marks the animation as persistent so it is not automatically removed from the
	 * element's effect stack (calls `Animation.persist()`).
	 */
	persistAnimation: () => void;
	/** Plays the animation in reverse (calls `Animation.reverse()`). */
	reverseAnimation: () => void;
	/**
	 * Applies the current computed animation styles directly to the element and then
	 * cancels the animation (calls `Animation.commitStyles()`).
	 * Useful for preserving the final animation state after removal.
	 */
	commitStyles: () => void;
	/**
	 * Changes the playback rate of the animation without adjusting its current time.
	 * @param playbackRate - The new playback rate (e.g. `2` for double speed, `0.5` for half, `-1` for reverse).
	 */
	updatePlaybackRate: (playbackRate: number) => void;
}