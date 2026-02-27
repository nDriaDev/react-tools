import { ComponentPropsWithRef, AriaAttributes, DOMAttributes } from "react";

/**
 * Extends the standard HTML attribute set with the `popover` attribute introduced by the
 * [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).
 *
 * @template T - The HTML element type the attributes apply to.
 *
 */
export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	/**
	 * Sets the popover behaviour of the element:
	 *  - **`"auto"`** — The popover can be dismissed by clicking outside it (light-dismiss)
	 *    or by pressing `Escape`. Only one `auto` popover can be open at a time.
	 *  - **`"manual"`** — The popover must be explicitly opened and closed via JavaScript.
	 *    Multiple `manual` popovers can coexist, and light-dismiss is disabled.
	 */
	popover?: "auto" | "manual";
}

/**
 * Parameters accepted by [usePopover](https://react-tools.ndria.dev/hooks/api-dom/usePopover).
 */
export interface UsePopoverProps {
	/**
	 * Controls the popover dismissal behaviour:
	 *   - **`"auto"`** — Light-dismiss is enabled (clicking outside or pressing `Escape` closes
	 *     the popover). Only one `auto` popover can be visible at a time.
	 *   - **`"manual"`** — The popover must be closed explicitly via {@link UsePopoverResult.hidePopover}
	 *     or {@link UsePopoverResult.togglePopover}. Multiple `manual` popovers can coexist.
	*/
	mode: "auto" | "manual";
	/**
	 * Optional callback invoked
	 *   synchronously **before** the popover transitions between open and closed states.
	 *   Receives a {@link ToggleEvent} whose `oldState` and `newState` properties indicate the
	 *   direction of the transition (`"closed" → "open"` or `"open" → "closed"`).
	 */
	onBeforeToggle?: (evt: ToggleEvent) => void;
	/**
	 * Optional callback invoked
	 *   **after** the popover has finished transitioning. Receives the same {@link ToggleEvent}
	 *   as `onBeforeToggle`. Use this to react to the final open/closed state rather than
	 *   intercepting the transition.
	 */
	onToggle?: (evt: ToggleEvent) => void;
}

/**
 * Return value of [usePopover](https://react-tools.ndria.dev/hooks/api-dom/usePopover).
 */
export interface UsePopoverResult {
	/**
	 * `true` when the browser supports the Popover API
	 *   (i.e. `showPopover` exists on `HTMLElement.prototype`). When `false`, the
	 *   {@link UsePopoverResult.Popover} component renders nothing and all control functions
	 *   are no-ops.
	 */
	isSupported: boolean;
	/**
	 * Reactive boolean reflecting the current visibility state of
	 *   the popover. Updates synchronously after each {@link ToggleEvent} fires. Use this to
	 *   conditionally style trigger elements or render additional UI.
	 */
	isOpen: boolean;
	/**
	 * Imperatively opens the popover by calling the native
	 *   `HTMLElement.showPopover()` method on the underlying element. Has no effect if the
	 *   popover is already open or if the API is not supported.
	 */
	showPopover: () => void;
	/**
	 * Imperatively closes the popover by calling the native
	 *   `HTMLElement.hidePopover()` method on the underlying element. Has no effect if the
	 *   popover is already closed or if the API is not supported.
	 */
	hidePopover: () => void;
	/**
	 * Imperatively toggles the popover open or closed by
	 *   calling the native `HTMLElement.togglePopover()` method. Has no effect if the API is
	 *   not supported.
	 */
	togglePopover: () => void;
	/**
	 *   A React component that renders the popover container as a `<div>` with the appropriate
	 *   `id`, `popover`, and ref wired up internally. Accepts all standard `<div>` props
	 *   (including `ref`) plus the {@link HTMLAttributes} `popover` extension.
	 *   - Renders `false` (nothing) when the Popover API is not supported.
	 *   - Must be rendered in the tree for {@link UsePopoverResult.showPopover},
	 *     {@link UsePopoverResult.hidePopover}, and {@link UsePopoverResult.togglePopover} to work.
	 *   - The `id` is managed internally and should not be overridden.
	 */
	Popover: ({ children, ...rest }: ComponentPropsWithRef<"div"> & HTMLAttributes<"div">) => false | JSX.Element;
}