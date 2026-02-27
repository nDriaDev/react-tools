import { RefObject } from "react";

/**
 * Parameters accepted by [useBeforeUnload](https://react-tools.ndria.dev/hooks/events/useBeforeUnload).
 */
export type UseBeforeUnloadProps = {
	/**
	 * The target on which the `beforeunload` event listener is registered. Accepts
	 * either a React `RefObject<HTMLElement>` or a direct `Window` reference.
	 * When omitted, the listener is attached to the global `window` object.
	 */
	element?: RefObject<HTMLElement> | Window;

	/**
	 * The event handler invoked when the `beforeunload` event fires. Receives the
	 * native {@link BeforeUnloadEvent}. To trigger the browser's built-in leave
	 * confirmation dialog, call `evt.preventDefault()` inside this handler (the
	 * `returnValue` approach is deprecated in modern browsers).
	 */
	listener: (evt: BeforeUnloadEvent) => void;

	/**
	 * Options forwarded to `addEventListener` as the third argument. Accepts either
	 * a boolean shorthand for `capture` or a full {@link AddEventListenerOptions}
	 * object. When omitted, the listener is registered with the browser defaults
	 * (bubble phase, non-passive, non-once).
	 */
	opts?: boolean | AddEventListenerOptions;
};

/**
 * Return value of [useBeforeUnload](https://react-tools.ndria.dev/hooks/events/useBeforeUnload).
 *
 * A stable cleanup function that manually removes the `beforeunload` listener from
 * the target element. Calling it is optional — the hook removes the listener
 * automatically on unmount — but it can be useful to detach the listener earlier
 * in response to a user action (e.g. after a successful save that makes the warning
 * unnecessary).
 */
export type UseBeforeUnloadResult = () => void;