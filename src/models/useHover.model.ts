import { RefObject } from "react";

/**
 * Parameters accepted by [useHover](https://react-tools.ndria.dev/hooks/events/useHover).
 */
export type UseHoverProps = {
	/**
	 * The element to monitor for hover state. Accepts either a React
	 * `RefObject<HTMLElement>` or a direct `HTMLElement` reference.
	 */
	target: RefObject<HTMLElement> | HTMLElement;

	/**
	 * Optional configuration for event callbacks and return value behaviour.
	 */
	opts?: UseHoverOptions;
};

/**
 * Options accepted by [useHover](https://react-tools.ndria.dev/hooks/events/useHover).
 */
export type UseHoverOptions = {
	/**
	 * Called when the pointer enters the target element (`pointerenter` event).
	 */
	onEnter?: (evt: Event) => void;

	/**
	 * Called whenever the hover state changes. Receives `true` when the pointer
	 * enters and `false` when it leaves.
	 */
	onChange?: (isHover: boolean) => void;

	/**
	 * Called when the pointer leaves the target element (`pointerleave` event).
	 */
	onLeave?: (evt: Event) => void;

	/**
	 * Controls whether the hook returns the current hover state as a boolean:
	 * - **`true`** — The hook returns a reactive `boolean` that is `true` while
	 *   the pointer is over the target and `false` otherwise.
	 * - **`false`** *(default)* — The hook returns `void`. Use this when you only
	 *   need the callbacks and want to avoid unnecessary re-renders.
	 */
	returnValue?: boolean;
};