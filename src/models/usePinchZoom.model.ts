import { RefObject } from "react";

/**
 * Parameters accepted by [usePinchZoom](https://react-tools.ndria.dev/hooks/events/usePinchZoom).
 */
export type UsePinchZoomProps = {
	/**
	 * The target on which pointer events are monitored to detect pinch gestures.
	 * Accepts either a React `RefObject<HTMLElement>` or a direct `Window` reference.
	 * Defaults to `window` when omitted.
	 */
	target?: RefObject<HTMLElement> | Window;

	/**
	 * Callback invoked on each pointer move event that constitutes part of a pinch
	 * gesture. Receives the triggering {@link PointerEvent} and a direction string:
	 * - **`"zoomIn"`** — The two pointers are moving apart (expanding gesture).
	 * - **`"zoomOut"`** — The two pointers are moving together (contracting gesture).
	 * May return a `Promise` for async handlers.
	 */
	listener: (
		evt: PointerEvent,
		type: "zoomIn" | "zoomOut"
	) => void | Promise<void>;
};

/**
 * Return value of [usePinchZoom](https://react-tools.ndria.dev/hooks/events/usePinchZoom).
 *
 * A stable cleanup function that manually removes all pointer event listeners from
 * the target. Calling it is optional — the hook cleans up automatically on unmount
 * — but useful to detach listeners earlier on demand.
 */
export type UsePinchZoomResult = () => void;