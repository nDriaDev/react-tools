import { RefObject, useCallback, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { UseHoverProps } from "../../models";

/**
 * **`useHover`**: Hook that determines whether the item is hovered or not and handles state hovers.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useHover)
 * @param {UseHoverProps["target"]} target - {@link UseHoverProps}
 * @param {UseHoverProps["opts"]} [opts] - {@link UseHoverProps}
 * @returns {boolean|void} result
 */
function useHover(target: UseHoverProps["target"], opts?: { onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: true }): boolean;
function useHover(target: UseHoverProps["target"], opts?: { onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: false }): void;
function useHover(target: UseHoverProps["target"], opts?: UseHoverProps["opts"]): boolean | void {
	const isHoverCached = useRef({ current: false, previous: false });
	const onEntRef = useRef(opts?.onEnter);
	const onLeavRef = useRef(opts?.onLeave);
	const onCngRef = useRef(opts?.onChange);
	onEntRef.current = opts?.onEnter;
	onLeavRef.current = opts?.onLeave;
	onCngRef.current = opts?.onChange;

	const isHover = useSyncExternalStore(
		useCallback(notif => {
			const element = (target as RefObject<HTMLElement>)?.current
					? (target as RefObject<HTMLElement>).current
				: target as HTMLElement;
			const pointerEnter = (evt: Event) => {
				isHoverCached.current.current = true;
				onEntRef.current?.(evt);
				onCngRef.current?.(true);
				notif();
			}
			const pointerLeave = (evt: Event) => {
				isHoverCached.current.current = false;
				onLeavRef.current?.(evt);
				onCngRef.current?.(false);
				notif();
			}
			element?.addEventListener("pointerenter", pointerEnter, { passive: true });
			element?.addEventListener("pointerleave", pointerLeave, { passive: true });

			return () => {
				element?.removeEventListener("pointerenter", pointerEnter);
				element?.removeEventListener("pointerleave", pointerLeave);
			}
		}, [target]),
		useCallback(() => {
			if (isHoverCached.current.current !== isHoverCached.current.previous) {
				isHoverCached.current.previous = isHoverCached.current.current;
			}
			return isHoverCached.current.previous;
		}, [])
	)

	if (!opts || opts.returnValue === true) {
		return isHover;
	}
}

export {useHover}