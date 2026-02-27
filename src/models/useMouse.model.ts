import { RefObject } from "react";

/**
 * Options for the [useMouse](https://react-tools.ndria.dev/hooks/events/useMouse).
 */
export interface UseMouseOpts {
	/**
	 * Coordinate space to report pointer positions in.
	 * - `"client"` — relative to the viewport (default).
	 * - `"page"` — relative to the full page (includes scroll offset).
	 * - `"screen"` — relative to the physical screen.
	 * @default "client"
	 */
	type?: "client" | "page" | "screen";
	/**
	 * When provided, `x` and `y` are returned relative to this element's bounding rect
	 * rather than the selected coordinate space. The element's `DOMRect` is also returned
	 * as `relativeElementDim`.
	 */
	relativeElement?: RefObject<HTMLElement | null> | HTMLElement;
}

/**
 * Result object returned by [useMouse](https://react-tools.ndria.dev/hooks/events/useMouse).
 */
export interface UseMouseResult {
	/** Current horizontal pointer coordinate. `null` before the first pointer event. */
	x: number | null;
	/** Current vertical pointer coordinate. `null` before the first pointer event. */
	y: number | null;
	/**
	 * Bounding rect of the `relativeElement` at the time of the last pointer event.
	 * Only present when `relativeElement` is provided to the hook.
	 */
	relativeElementDim?: DOMRect;
}