import { ComponentPropsWithRef, useCallback, useMemo, useRef } from "react";
import { HTMLAttributes, UsePopoverProps, UsePopoverResult } from "../../models";
import { useId, useMergedRef } from "../performance";
import { useSyncExternalStore } from "../state";

/**
 * **`usePopover`**: Hook to use [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).
 * @param {UsePopoverProps} param - object
 * @param {"auto"|"manual"} param.mode - popover state: __auto__ indicates that popover can be "light dismissed" by selecting outside the popover area, by contrast __manual__ popover must always be explicity hidden.
 * @param {(evt: ToggleEvent) => void} [param.onBeforeToggle] - function that will be executed before popover showed/hidden.
 * @param {(evt: ToggleEvent) => void} [param.onToggle] - function that will be executed when popover has been showed/hidden.
 * @returns {UsePopoverResult} result
 * Object with these properties:
 * - __isSupported__: boolean that indicates if Popover API is supported or not.
 * - __isSupported__: boolean that indicates if popover is opened or not.
 * - __showPopover__: function to show popover.
 * - __hidePopover__: function to hide popover.
 * - __togglePopover__: function to toggle popover.
 * - __Popover__: Component that wraps the element to render in popover. It can be stylized with _className_ and _style_ props.
 */
function usePopover({ mode, onBeforeToggle, onToggle }: UsePopoverProps): UsePopoverResult {
	const isSupported = "showPopover" in document.body;
	const id = useId();
	const isOpenCached = useRef(false);
	const notifyRef = useRef<() => void>();
	const onBeforeToggleCb = useCallback((evt: ToggleEvent) => {
		!!onBeforeToggle && onBeforeToggle(evt);
	}, [onBeforeToggle]);

	const onToggleCb = useCallback((evt: ToggleEvent) => {
		console.log("onToggle");

		isOpenCached.current = evt.newState === "open";
		!!onToggle && onToggle(evt);
		!!notifyRef.current && notifyRef.current();
	}, [onToggle]);

	const popoverListenerRef = useCallback((node: HTMLDivElement) => {
		if (node) {
			node.removeEventListener("beforetoggle", onBeforeToggleCb as EventListenerOrEventListenerObject)
			node.removeEventListener("toggle", onToggleCb as EventListenerOrEventListenerObject)
			node.addEventListener("beforetoggle", onBeforeToggleCb as EventListenerOrEventListenerObject)
			node.addEventListener("toggle", onToggleCb as EventListenerOrEventListenerObject)
		}
	}, [onBeforeToggleCb, onToggleCb]);
	const popoverRef = useRef<HTMLDivElement>(null);

	const ref = useMergedRef(popoverRef, popoverListenerRef);

	const Popover = useMemo(() => {
		return (({ children, ...rest }: ComponentPropsWithRef<"div"> & HTMLAttributes<"div">) => {
			return "showPopover" in document.body && <div id={id} ref={ref} popover={mode} {...rest}>
				{children}
			</div>
		})
	}, [id, mode, ref]);


	const isOpen = useSyncExternalStore(
		useCallback(notify => {
			notifyRef.current = notify;
			return () => {
				notifyRef.current = undefined;
			}
		}, []),
		useCallback(() => isOpenCached.current, [])
	);

	const showPopover = useCallback(() => {
		"showPopover" in document.body && popoverRef.current && popoverRef.current.showPopover();
	}, []);

	const hidePopover = useCallback(() => {
		"showPopover" in document.body && popoverRef.current && popoverRef.current.hidePopover();
	}, []);

	const togglePopover = useCallback(() => {
		"showPopover" in document.body && popoverRef.current && popoverRef.current.togglePopover();
	}, []);

	if (popoverRef.current) {
		setTimeout(() => {
			if (popoverRef.current) {
				popoverRef.current.removeEventListener("beforetoggle", onBeforeToggleCb as EventListenerOrEventListenerObject)
				popoverRef.current.removeEventListener("toggle", onToggleCb as EventListenerOrEventListenerObject)
				isOpenCached.current && popoverRef.current?.showPopover();
				setTimeout(() => {
					popoverRef.current?.addEventListener("beforetoggle", onBeforeToggleCb as EventListenerOrEventListenerObject)
					popoverRef.current?.addEventListener("toggle", onToggleCb as EventListenerOrEventListenerObject)
				}, 1)
			}
		}, 1);
	}

	return {
		isSupported,
		isOpen,
		showPopover,
		hidePopover,
		togglePopover,
		Popover
	}
}

export { usePopover };