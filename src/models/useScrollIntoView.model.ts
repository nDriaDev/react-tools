import { RefObject } from "react";

/**
 * Parameters accepted by [useScrollIntoView](https://react-tools.ndria.dev/hooks/events/useScrollIntoView).
 *
 * @template E - The scrollable container element type. Defaults to `null`, which means the nearest scrollable ancestor is used automatically.
 */
export type UseScrollIntoViewProps<E extends Element | null = null> = {
	/**
	 * Duration of the scroll animation in milliseconds. Defaults to `1000`.
	 */
	duration ?: number;

	/**
	 * The scroll axis to animate along:
	 * - **`"y"`** *(default)* — Vertical scrolling.
	 * - **`"x"`** — Horizontal scrolling.
	 */
	axis ?: "x" | "y";

	/**
	 * An easing function that maps a normalised time value `t ∈ [0, 1]` to a
	 * progress value, controlling the acceleration curve of the scroll animation.
	 * Defaults to `easeInOutSine` when omitted.
	 */
	animation ?: (t: number) => number;

	/**
	 * Additional scroll offset in pixels applied after the target element is
	 * aligned. Positive values scroll past the target; negative values stop
	 * short of it. Defaults to `0`.
	 */
	offset ?: number;

	/**
	 * When `true`, the ongoing scroll animation can be interrupted by user input
	 * (e.g. a manual scroll gesture). Defaults to `false`.
	 */
	cancelable ?: boolean;

	/**
	 * Called when the scroll animation completes successfully (i.e. reaches the
	 * target position without being cancelled).
	 */
	onFinish ?: () => void;

	/**
	 * The scrollable container element to scroll within. Accepts a factory function
	 * `() => E`, a direct element reference, or a React `RefObject<E | null>`.
	 * When the resolved value is `null`, the nearest scrollable ancestor of the
	 * target element is used automatically.
	 */
	scrollableElement: (() => E) | E | RefObject<E | null>;
};

/**
 * Return value of [useScrollIntoView](https://react-tools.ndria.dev/hooks/events/useScrollIntoView).
 *
 * @template T - The element type to scroll into view.
 */
export type UseScrollIntoViewResult<T extends Element> = {
	/**
	 * A mutable ref to attach to the target element that should be scrolled into
	 * view. Must be attached for {@link UseScrollIntoViewResult.scroll} to work.
	 */
	targetRef: React.MutableRefObject<T | null>;

	/**
	 * Starts the scroll animation, bringing the target element into view within the
	 * scrollable container. Accepts an optional alignment hint:
	 * - **`"start"`** — Aligns the top (or left) edge of the target with the
	 *   top (or left) of the container.
	 * - **`"center"`** *(default)* — Centers the target within the container.
	 * - **`"end"`** — Aligns the bottom (or right) edge of the target with the
	 *   bottom (or right) of the container.
	 */
	scroll: (alignment?: "start" | "center" | "end") => void;

	/**
	 * Cancels the currently running scroll animation, if any. Only has an effect
	 * when `cancelable` is `true` in the hook options.
	 */
	cancel: () => void;
};