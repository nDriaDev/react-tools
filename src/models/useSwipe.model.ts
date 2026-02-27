import { RefObject } from "react";

/**
 * Detected swipe direction returned by [useSwipe](https://react-tools.ndria.dev/hooks/events/useSwipe) callbacks.
 * - `"up"` / `"down"` — vertical swipes.
 * - `"left"` / `"right"` — horizontal swipes.
 * - `"none"` — movement below the `threshold`, not classified as a swipe.
 */
export type SwipeDirection = "up" | "right" | "down" | "left" | "none";

/**
 * Props for the [useSwipe](https://react-tools.ndria.dev/hooks/events/useSwipe) hook.
 */
export interface UseSwipeProps {
	/** The element to attach swipe detection to. Accepts a `RefObject` or a direct element reference. */
	target: RefObject<Element> | Element;
	/** Called when a swipe gesture begins (first `pointerdown` / `touchstart`). */
	onSwipeStart?: (e: MouseEvent | TouchEvent) => void;
	/**
	 * Called during an active swipe gesture on each move event.
	 * @param e - The underlying `MouseEvent` or `TouchEvent`.
	 * @param direction - The current swipe direction (may be `"none"` if below threshold).
	 * @param delta - Accumulated `x` and `y` displacement since the gesture started.
	 */
	onSwipe?: (e: MouseEvent | TouchEvent, direction: SwipeDirection, delta: { x: number; y: number }) => void;
	/**
	 * Called when the swipe gesture ends (pointer released / `touchend`).
	 * @param e - The underlying `MouseEvent` or `TouchEvent`.
	 * @param direction - Final swipe direction.
	 * @param delta - Total `x` and `y` displacement of the gesture.
	 */
	onSwipeEnd?: (e: MouseEvent | TouchEvent, direction: SwipeDirection, delta: { x: number; y: number }) => void;
	/** Listener and gesture threshold configuration. */
	options?: {
		/**
		 * When `true`, the event listener is registered as passive, preventing the hook
		 * from calling `preventDefault`. Improves scroll performance on mobile.
		 * @default false
		 */
		passive?: boolean;
		/**
		 * Minimum displacement in pixels in either axis required for a movement to be
		 * classified as a swipe direction. Movements below this value return `"none"`.
		 * @default 0
		 */
		threshold?: number;
	};
}

/**
 * The function returned by [useSwipe](https://react-tools.ndria.dev/hooks/events/useSwipe) that stops all swipe event listeners.
 * Call it to manually clean up before unmount if needed.
 */
export interface UseSwipeResult {
	(): void;
}
