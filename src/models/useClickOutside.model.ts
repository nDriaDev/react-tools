import { RefObject } from "react";

/**
 * Parameters accepted by [useClickOutside](https://react-tools.ndria.dev/hooks/events/useClickOutside).
 */
export type UseClickOutsideProps = {
	/**
	 * The element to monitor. Accepts either a React `RefObject<HTMLElement>` or a
	 * direct `HTMLElement` reference. Click events originating inside this element
	 * (or on the element itself) are ignored; only clicks outside it trigger `handler`.
	 */
	target: RefObject<HTMLElement> | HTMLElement;

	/**
	 * Callback invoked whenever a click event is detected outside the `target` element.
	 * Receives the native {@link Event} that triggered the outside-click detection.
	 */
	handler: (evt: Event) => void;
};