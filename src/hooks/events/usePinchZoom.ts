import { useCallback, useRef } from "react";
import { useEventListener } from "./useEventListener";
import { UsePinchZoomProps, UsePinchZoomResult } from "../../models/usePinchZoom.model";

/**
 * **`usePinchZoom`**: Hook to handle pinch zoom gestures.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/usePinchZoom)
 * @param {UsePinchZoomProps} param - {@link UsePinchZoomProps}
 * @returns {UsePinchZoomResult} result {@link UsePinchZoomResult}
 */
export const usePinchZoom = ({ target = window, listener }: UsePinchZoomProps): UsePinchZoomResult => {
	const cache = useRef<PointerEvent[]>([]);
	const prevDiff = useRef(-1);
	const removeListeners = useRef<(()=>void)[]>([]);

	const pointerDownHandler = useRef((evt: PointerEvent) => {
		cache.current.push(evt);
	});
	const pointerUpHandler = useRef((evt: PointerEvent) => {
		const index = cache.current.findIndex(
			(cachedEv) => cachedEv.pointerId === evt.pointerId,
		);
		cache.current.splice(index, 1);
		if (cache.current.length < 2) {
			prevDiff.current = -1;
		}
	});

	const pointerMoveHandler = useCallback((evt: PointerEvent) => {
		// Find this event in the cache and update its record with this event
		const index = cache.current.findIndex(
			(cachedEv) => cachedEv.pointerId === evt.pointerId,
		);
		cache.current[index] = evt;
		// If two pointers are down, check for pinch gestures
		if (cache.current.length === 2) {
			// Calculate the distance between the two pointers using euclidean distance to correctly detect diagonal and vertical pinchies
			const dx = cache.current[0].clientX - cache.current[1].clientX;
			const dy = cache.current[0].clientY - cache.current[1].clientY;
			const curDiff = Math.hypot(dx, dy);
			if (prevDiff.current > 0) {
				if (curDiff > prevDiff.current) {
					// The distance between the two pointers has increased: Zoom in
					listener(evt, "zoomIn");
				}
				if (curDiff < prevDiff.current) {
					// The distance between the two pointers has decreased: Zoom out
					listener(evt, "zoomOut");
				}
			}
			// Cache the distance for the next move event
			prevDiff.current = curDiff;
		}
	}, [listener]);

	removeListeners.current[0] = useEventListener({
		type: "pointerdown",
		listener: pointerDownHandler.current,
		effectType: "normal",
		element: target
	});
	removeListeners.current[1] = useEventListener({
		type: "pointermove",
		listener: pointerMoveHandler,
		effectType: "normal",
		element: target
	});
	removeListeners.current[2] = useEventListener({
		type: "pointerup",
		listener: pointerUpHandler.current,
		effectType: "normal",
		element: target
	});
	removeListeners.current[3] = useEventListener({
		type: "pointercancel",
		listener: pointerUpHandler.current,
		effectType: "normal",
		element: target
	});
	removeListeners.current[4] = useEventListener({
		type: "pointerout",
		listener: pointerUpHandler.current,
		effectType: "normal",
		element: target
	});
	removeListeners.current[5] = useEventListener({
		type: "pointerleave",
		listener: pointerUpHandler.current,
		effectType: "normal",
		element: target
	});

	return useCallback(() => {
		removeListeners.current.forEach(l => l());
	},[])
}