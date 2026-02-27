import { useCallback, useRef } from "react";
import { useLongPressCallback, useLongPressOptions, UseLongPressResult } from "../../models";

/**
 * **`useLongPress`**: Hook to execute a callback on a long press event.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useLongPress)
 * @template E - The event type received by the callback.
 * @template T - The element type the ref callback is attached to.
 * @param {useLongPressCallback<E>} cb - {@link useLongPressCallback}
 * @param {useLongPressOptions<E>} opts - {@link useLongPressOptions}
 * @returns {RefCallback<T>} result
 */
export const useLongPress = <T extends Element = Element, E extends Event = Event>(cb: useLongPressCallback<E>, { duration = 1000, normalPress, onStart, onFinish }: useLongPressOptions<E>): UseLongPressResult<T> => {
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