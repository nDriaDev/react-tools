import { RefCallback } from "react";

/**
 * Return value of [useMeasure](https://react-tools.ndria.dev/hooks/events/useMeasure).
 *
 * @template T - The element type being measured.
 */
export type UseMeasureResult<T extends Element> = [
	/**
	 * A React ref callback to attach to the target element. Wiring this ref is
	 * required for measurements to be taken — the hook observes the element via
	 * a `ResizeObserver` and updates the returned rect whenever its size changes.
	 * `null` until the element has been mounted.
	 */
	RefCallback<T> | null,

	/**
	 * A read-only {@link DOMRectReadOnly} describing the current bounding box of
	 * the observed element. Updated reactively on every resize. Contains `x`, `y`,
	 * `width`, `height`, `top`, `right`, `bottom`, and `left`. Initialised to an
	 * empty `DOMRectReadOnly` before the element mounts.
	 */
	DOMRectReadOnly
];