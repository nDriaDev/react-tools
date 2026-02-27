import { ComponentPropsWithRef, useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { HTMLAttributes, UsePopoverProps, UsePopoverResult } from "../../models";
import { useId, useMergedRef } from "../performance";
import { useSyncExternalStore } from "../state";

/**
 * **`usePopover`**:
 * @see [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/usePopover)
 * @template T - The HTML element type the attributes apply to.
 * @param {UsePopoverProps} param - {@link UsePopoverProps}
 * @returns {UsePopoverResult} result {@link UsePopoverResult}
 */
function usePopover({ mode, onBeforeToggle, onToggle }: UsePopoverProps): UsePopoverResult {
	const isSupported = "showPopover" in document.body;
	const id = useId();
	const idRef = useRef<string>();
	const modeRef = useRef<typeof mode>();
	idRef.current = id;
	modeRef.current = mode;
	const isOpenCached = useRef(false);
	const notifyRef = useRef<() => void>();
	const onBeforeToggleCb = useCallback((evt: ToggleEvent) => {
		!!onBeforeToggle && onBeforeToggle(evt);
	}, [onBeforeToggle]);

	const onToggleCb = useCallback((evt: ToggleEvent) => {
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
			return "showPopover" in document.body && <div id={idRef.current} ref={ref} popover={modeRef.current} {...rest}>
				{children}
			</div>
		})
	}, [ref]);


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

	useLayoutEffect(() => {
		if (popoverRef.current) {
			const timer = setTimeout(() => {
				if (popoverRef.current) {
					popoverRef.current.removeEventListener("beforetoggle", onBeforeToggleCb as EventListenerOrEventListenerObject)
					popoverRef.current.removeEventListener("toggle", onToggleCb as EventListenerOrEventListenerObject)
					isOpenCached.current && popoverRef.current?.showPopover();
					const innerTimer = setTimeout(() => {
						popoverRef.current?.addEventListener("beforetoggle", onBeforeToggleCb as EventListenerOrEventListenerObject)
						popoverRef.current?.addEventListener("toggle", onToggleCb as EventListenerOrEventListenerObject)
					}, 1);
					return () => clearTimeout(innerTimer);
				}
			}, 1);
			return () => clearTimeout(timer);
		}
	}, [onBeforeToggleCb, onToggleCb]);

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