import { RefCallback } from "react";

/**
 * Callback type used by [useLongPress](https://react-tools.ndria.dev/hooks/events/useLongPress).
 *
 * @template E - The event type received by the callback.
 */
export type useLongPressCallback<E extends Event = Event> = (evt: E) => void;

/**
 * Options accepted by [useLongPress](https://react-tools.ndria.dev/hooks/events/useLongPress).
 *
 * @template E - The event type received by the callbacks.
 */
export type useLongPressOptions<E extends Event = Event> = {
	/**
	 * Duration in milliseconds the pointer must be held before the long-press
	 * callback fires. Defaults to `1000` ms when omitted.
	 */
	duration?: number;

	/**
	 * Called when the pointer is released before `duration` has elapsed (a "normal" short press).
	 * Use this to handle both tap and long-press on the same element.
	 */
	normalPress?: (evt: E) => void;

	/**
	 * Called when the pointer is pressed down on the target element, before the
	 * long-press duration has elapsed.
	 */
	onStart?: (evt: E) => void;

	/**
	 * Called when the press ends, regardless of whether the long-press threshold
	 * was reached (i.e. on `pointerup` or `pointerleave`).
	 */
	onFinish?: (evt: E) => void;
};

/**
 * Return value of [useLongPress](https://react-tools.ndria.dev/hooks/events/useLongPress).
 *
 * A React ref callback to attach to the target element. Wiring this ref is required
 * for the hook to register its pointer event listeners and detect long-press gestures.
 *
 * @template T - The element type the ref callback is attached to.
 */
export type UseLongPressResult<T extends Element = Element> = RefCallback<T>;