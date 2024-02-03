import { RefCallback, useCallback, useRef } from "react";
import { useLongPressCallback, useLongPressOptions } from "../../models/useLongPress.model";

/**
 * **`useLongPress`**: Hook to execute a callback on a long press event. [See demo](https://nDriaDev.io/react-tools/#/hooks/events/useLongPress)
 * @param {(evt:E)=>void} cb - callback to execute after a certain duration.
 * @param {Object} opts
 * @param {number} [opts.duration=1000] - long press event duration in milliseconds.
 * @param {(evt:E)=>void} [opts.onStart] - callback that will be executed on initial press event.
 * @param {(evt:E)=>void} [opts.onFinish] - callback that will be executed when long press callback has done.
 * @param {(evt:E)=>void} [opts.normalPress] - callback executed on normal press event.
 * @returns {RefCallback<T>} ref callback - to be attached on target element.
 */
export const useLongPress = <T extends Element = Element, E extends Event = Event>(cb: useLongPressCallback<E>, { duration = 1000, normalPress, onStart, onFinish }: useLongPressOptions<E>): RefCallback<T> => {
	const evtRef = useRef<E>();
	const idTimeout = useRef<number|undefined>();
	const longPressActive = useRef(false);
	const target = useRef<T>();

	const pointerUp = useCallback(() => {
		clearTimeout(idTimeout.current);
		onFinish && onFinish(evtRef.current as E);
		!longPressActive.current && normalPress && normalPress(evtRef.current!);
	}, [normalPress, onFinish]);

	const pointerDown = useCallback((evt: Event) => {
		longPressActive.current = false;
		evtRef.current = evt as E;

		onStart && onStart(evt as E);

		idTimeout.current = setTimeout(async () => {
			longPressActive.current = true;
			await cb(evt as E);
		}, duration) as unknown as number;

	}, [cb, duration, onStart]);

	return useCallback((node: T) => {
			if (node) {
				node.addEventListener("pointerdown", pointerDown);
				node.addEventListener("pointerup", pointerUp);
				target.current = node;
			} else {
				target.current?.removeEventListener("pointerdown", pointerDown);
				target.current?.removeEventListener("pointerup", pointerUp);
				target.current = undefined;
			}
		}, [pointerDown, pointerUp]);
}