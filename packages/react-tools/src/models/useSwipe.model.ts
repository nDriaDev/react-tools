import { RefObject } from "react";

export type SwipeDirection = "up" | "right" | "down" | "left" | "none";

export interface UseSwipeProps {
	/**Element swipable*/
	target: RefObject<Element> | Element;
	/**Callback that will be executed on swipe starts*/
	onSwipeStart?: (e: MouseEvent|TouchEvent) => void;
	/**Callback that will be executed on swipe moves*/
	onSwipe?: (e: MouseEvent|TouchEvent, direction: SwipeDirection, delta: {x: number, y: number}) => void;
	/**Callback that will be executed on swipe ends*/
	onSwipeEnd?: (e: MouseEvent|TouchEvent, direction: SwipeDirection, delta: { x: number, y: number }) => void;
	/**Options configurable for swipe listeners*/
	options?: {
		/**If true, listener never invokes _preventDefault_ method.*/
		passive?: boolean;
		/**A threshold value for swipe event.*/
		threshold?: number;
	};
}

export interface UseSwipeResult {
	/**Callback to stop swipe event listening.*/
	():void
}
