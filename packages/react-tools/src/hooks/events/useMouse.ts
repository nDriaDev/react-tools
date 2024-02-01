import { RefObject, useCallback, useRef } from "react"
import { useSyncExternalStore } from "../state";

const listeners = new Set<() => void>();

/**
 * **`useMouse`**: Hook to track mouse position also in relationship with an element. It works with pointerEvents.
 * @param {Object} opts
 * @param {"client"|"page"|"screen"} [opts.type="client"] - position by client page or screen.
 * @param {RefObject<HTMLElement> | HTMLElement} [opts.relativeElement] - if it is presents, position is relative to element.
 * @returns {{x:number|null, y:number|null} | {x:number|null, y:number|null, relativeElementDim?: DOMRect}} object - postion by axis and if relativeElement is present, relativeElement dimensions also.
 */
function useMouse(opts?: undefined): { x: number, y: number };
function useMouse(opts?: { type?: "client" | "page" | "screen", relativeElement?: undefined }): { x: number | null, y: number | null };
function useMouse(opts?: { type?: "client" | "page" | "screen", relativeElement?: RefObject<HTMLElement | null> | HTMLElement }): { x: number | null, y: number | null, relativeElementDim?: DOMRect };
function useMouse(opts: { type?: "client" | "page" | "screen", relativeElement?: RefObject<HTMLElement | null> | HTMLElement } = { type: "client" }): { x: number | null, y: number | null } | { x: number | null, y: number | null, relativeElementDim?: DOMRect } {
	const prevState = useRef<{x: number | null, y: number | null, relativeElementDim?: DOMRect}>({ x: null, y: null });
	const currState = useRef<{x: number | null, y: number | null, relativeElementDim?: DOMRect}>({ x: null, y: null });

	return useSyncExternalStore(
		useCallback(notif => {
			const listener = (evt: PointerEvent) => {
				const { screenX, screenY, clientX, clientY, pageX, pageY } = evt;
				let x=null, y=null, relativeElementDim;
				if (opts.type === "client") {
					x = clientX;
					y = clientY;
				} else if (opts.type === "page") {
					x = pageX;
					y = pageY;
				} else {
					x = screenX;
					y = screenY
				}
				if (opts.relativeElement && "current" in opts.relativeElement ? opts.relativeElement.current : opts.relativeElement) {
					relativeElementDim = ((opts.relativeElement as RefObject<HTMLElement>)?.current
						? (opts.relativeElement as RefObject<HTMLElement>).current
						: opts.relativeElement as HTMLElement)!.getBoundingClientRect();
					x = pageX - (relativeElementDim.left + window.scrollX);
					y = pageY - (relativeElementDim.top + window.scrollY);
				}
				currState.current = { x, y, relativeElementDim };
				listeners.forEach(l => l());
			}
			if (listeners.size === 0) {
				window.addEventListener('pointerdown', listener)
				window.addEventListener('pointermove', listener)
				window.addEventListener('pointerup', listener)
			}
			listeners.add(notif);
			return () => {
				listeners.delete(notif);
				if (listeners.size === 0) {
					window.removeEventListener('pointerdown', listener)
					window.removeEventListener('pointermove', listener)
					window.removeEventListener('pointerup', listener)
				}
			}
		}, [opts.relativeElement, opts.type]),
		useCallback(() => {
			if (prevState.current.x !== currState.current.x || prevState.current.y !== currState.current.y) {
				prevState.current = currState.current;
			}
			return prevState.current;
		}, [])
	);
}

export { useMouse };