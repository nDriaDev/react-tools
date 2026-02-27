import { RefObject } from "react";

/**
 * Parameters accepted by [useEventDispatcher](https://react-tools.ndria.dev/hooks/events/useEventDispatcher).
 *
 * The single argument is the target on which events will be dispatched.
 * Accepts either a React `RefObject<HTMLElement>` or a direct `Window` reference.
 * Defaults to the global `window` when omitted.
 */
export type UseEventDispatcherProps = RefObject<HTMLElement> | Window;

/**
 * Return value of [useEventDispatcher](https://react-tools.ndria.dev/hooks/events/useEventDispatcher).
 *
 * A stable function that dispatches the provided {@link Event} or
 * {@link CustomEvent} on the configured target element.
 */
export type UseEventDispatcherResult = (evt: Event | CustomEvent) => void;