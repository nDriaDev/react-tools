import { SyntheticEvent } from "react";

/**
* Parameters accepted by [useDoubleClick](https://react-tools.ndria.dev/hooks/events/useDoubleClick).
*
* @template T - The element type the synthetic event originates from.
* @template E - The underlying native event type.
*/
export type UseDoubleClickProps<T extends Element = Element, E extends Event = Event> =
| ((evt: SyntheticEvent<T, E>) => Promise<void> | void)
| {
	/**
	* Handler invoked when a double-click gesture is detected within the
	* configured `tolerance` window.
	*/
	doubleClick: (evt: SyntheticEvent<T, E>) => Promise<void> | void;

	/**
	* Optional handler invoked when a single click is detected and no second
	* click follows within the `tolerance` window. When omitted, single clicks
	* are ignored.
	*/
	singleClick?: (evt: SyntheticEvent<T, E>) => Promise<void> | void;

	/**
	* Maximum number of milliseconds allowed between two clicks for them to be
	* considered a double-click. Defaults to `300` ms when omitted.
	*/
	tolerance?: number;
};

/**
* Return value of [useDoubleClick](https://react-tools.ndria.dev/hooks/events/useDoubleClick).
*
* A stable event handler to attach to a React element's `onClick` (or equivalent)
* prop. Internally debounces clicks and dispatches to either `singleClick` or
* `doubleClick` based on the configured `tolerance`.
*
* @template T - The element type the synthetic event originates from.
* @template E - The underlying native event type.
*/
export type UseDoubleClickResult<T extends Element = Element, E extends Event = Event> = (evt: SyntheticEvent<T, E>) => Promise<void> | void;