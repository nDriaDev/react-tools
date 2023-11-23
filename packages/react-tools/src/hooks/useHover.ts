import { RefObject, useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from ".";

/**
 * **`useHover`**: Hook that determines whether the item is hovered or not and handles state hovers.
 * @param {RefObject<HTMLElement> | HTMLElement} target - DOM element or ref
 * @param {{ onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: boolean }} [opts] - __onEnter__ function to be executed on starting hover, __onLeave__ function to be executed on hover finished, __onChange__ function to be executed when hover state changes, __return value__ boolean to return hover state value or not.
 * @returns {boolean|void} result - if __returnValue__ option is true or not specified, hook return state hover value, otherwise returns nothing.
 */
function useHover(target: RefObject<HTMLElement> | HTMLElement, opts?: { onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: true }): boolean;
function useHover(target: RefObject<HTMLElement> | HTMLElement, opts?: { onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: false }): void;
function useHover(target: RefObject<HTMLElement> | HTMLElement, opts?: { onEnter?: (evt: Event) => void, onChange?: (isHover: boolean) => void, onLeave?: (evt: Event) => void, returnValue?: boolean }): boolean | void {
	const isHoverCached = useRef({ current: false, previous: false });
	const onEnt = useMemo(()=> opts?.onEnter, [opts?.onEnter])
	const onLeav = useMemo(()=> opts?.onLeave, [opts?.onLeave])
	const onCng = useMemo(()=> opts?.onChange, [opts?.onChange])
	const isHover = useSyncExternalStore(
		useCallback(notif => {
			const element = (target as RefObject<HTMLElement>).current
					? (target as RefObject<HTMLElement>).current
				: target as HTMLElement;
			const pointerEnter = (evt: Event) => {
				isHoverCached.current.current = true;
				onEnt && onEnt(evt);
				onCng && onCng(true);
				notif();
			}
			const pointerLeave = (evt: Event) => {
				isHoverCached.current.current = false;
				onLeav && onLeav(evt);
				onCng && onCng(false);
				notif();
			}
			element?.addEventListener("pointerenter", pointerEnter);
			element?.addEventListener("pointerleave", pointerLeave);

			return () => {
				element?.removeEventListener("pointerenter", pointerEnter);
				element?.removeEventListener("pointerleave", pointerLeave);
			}
		}, [onCng, onEnt, onLeav, target]),
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