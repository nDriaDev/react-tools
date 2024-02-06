import { useCallback, useRef } from "react";
import { SwipeDirection, UseSwipeProps, UseSwipeResult } from "../../models";
import { useEventListener } from "./useEventListener";
import { isTouchEvent } from "../../utils";

/**
 * **`useSwipe`**: hook to handle swipe gesture. [See demo](https://ndriadev.github.io/react-tools/#/hooks/events/useSwipe)
 * @param {UseSwipeProps} param - object
 * @param {RefObject<Element>|Element} param.target - element on which attach swipe event.
 * @param {(e: MouseEvent|TouchEvent) => void} [param.onSwipeStart] - callback that will be executed when swipe starts.
 * @param {(e: MouseEvent|TouchEvent, direction: SwipeDirection, delta: {x: number, y: number}) => void} [param.onSwipe] - callback that will be executed when swipe moves.
 * @param {(e: MouseEvent|TouchEvent, direction: SwipeDirection, delta: { x: number, y: number }) => void} [param.onSwipeEnd] - callback that will be executed when swipe ends.
 * @param {Object} [param.options] - object to set option for listener.
 * @param {boolean} [param.options.passive=true] - if true, handler callback never calls _preventDefault_ method.
 * @param {threshold} [param.options.threshold=0] - a threshold value for swipe event.
 * @returns {UseSwipeResult} - callback that stops listener.
 */
export const useSwipe = ({ target, onSwipeStart, onSwipe, onSwipeEnd, options }: UseSwipeProps): UseSwipeResult => {
	const isThresholdExceeded = useRef<(diffX:number, diffY:number)=>boolean>((diffX, diffY) => Math.max(Math.abs(diffX), Math.abs(diffY)) >= (options?.threshold ?? 0));
	const targetRef = useRef<EventTarget|null>();
	const getDirection = useRef<(diffX: number, diffY: number) => SwipeDirection>((diffX, diffY) => {
		if (!isThresholdExceeded.current(diffX, diffY)) {
			return "none";
		}
		if (Math.abs(diffX) > Math.abs(diffY)) {
			return diffX > 0
				? "right"
				: "left";
		}
		return diffY > 0
			? "down"
			: "up";
	});

	const isSwiping = useRef(false);
	const coords = useRef<{ start: { x: number, y: number }, end: { x: number, y: number }, target: { x: number, y: number } }>({
		target: {
			x: 0,
			y: 0
		},
		start: {
			x: 0,
			y: 0
		},
		end: {
			x: 0,
			y: 0
		}
	});

	const stopPointerDown = useEventListener({
		type: ["mousedown", "touchstart"],
		element: target,
		listener: useCallback((e: TouchEvent|MouseEvent) => {
			isSwiping.current = true;
			targetRef.current = e.target;
			e.target && (e.target as HTMLElement).style.setProperty('touch-action', 'none')
			e.target && (e.target as HTMLElement).style.setProperty('-webkit-user-select', 'none')
			e.target && (e.target as HTMLElement).style.setProperty('-ms-user-select', 'none')
			e.target && (e.target as HTMLElement).style.setProperty('user-select', 'none')
			const { x, y } = (e.target as Element)?.getBoundingClientRect() ?? { x: 0, y: 0 };
			const {clientX, clientY} = isTouchEvent(e) ? (e as TouchEvent).touches[0] : e as MouseEvent;
			coords.current = {
				target: {
					x,
					y
				},
				start: {
					x: clientX,
					y: clientY
				},
				end: {
					x: clientX,
					y: clientY
				}
			}
			!!onSwipeStart && onSwipeStart(e);
		}, [onSwipeStart]),
		listenerOpts: {
			capture: true,
			passive: options?.passive !== undefined ? options.passive : true
		}
	});

	const stopPointerMove = useEventListener({
		type: ["mousemove", "touchmove"],
		element: window,
		listener: useCallback((e: MouseEvent|TouchEvent) => {
			const { clientX, clientY } = isTouchEvent(e) ? (e as TouchEvent).touches[0] : e as MouseEvent;
			coords.current.end = {
				x: clientX,
				y: clientY
			}
			const diffX = coords.current.end.x - coords.current.start.x,
				diffY = coords.current.end.y - coords.current.start.y;
			isSwiping.current && isThresholdExceeded.current(diffX, diffY) && !!onSwipe && onSwipe(e, getDirection.current(diffX, diffY), {x: diffX, y: diffY});
		}, [onSwipe]),
		listenerOpts: {
			capture: true,
			passive: options?.passive !== undefined ? options.passive : true
		}
	});

	const stopPointerUpCancel = useEventListener({
		type: ["mouseup", "mouseleave", "touchend", "touchcancel"],
		element: window,
		listener: useCallback((e: MouseEvent|TouchEvent) => {
			const diffX = coords.current.end.x - coords.current.start.x,
				diffY = coords.current.end.y - coords.current.start.y;
			isSwiping.current && !!onSwipeEnd && onSwipeEnd(e, getDirection.current(diffX, diffY), {x: diffX, y: diffY});
			isSwiping.current = false;
			targetRef.current && (targetRef.current as HTMLElement).style.removeProperty('touch-action');
			targetRef.current && (targetRef.current as HTMLElement).style.removeProperty('-webkit-user-select');
			targetRef.current && (targetRef.current as HTMLElement).style.removeProperty('-ms-user-select');
			targetRef.current && (targetRef.current as HTMLElement).style.removeProperty('user-select');
			targetRef.current = null;
		}, [onSwipeEnd]),
		listenerOpts: {
			capture: true,
			passive: options?.passive !== undefined ? options.passive : true
		}
	});

	const stop = useCallback(() => {
		stopPointerDown();
		stopPointerMove();
		stopPointerUpCancel();
	}, [stopPointerDown, stopPointerMove, stopPointerUpCancel]);

	return stop;
}