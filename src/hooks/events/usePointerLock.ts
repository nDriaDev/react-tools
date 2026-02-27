import { RefObject, useCallback, useRef } from "react";
import { UsePointerLockProps, UsePointerLockResult } from "../../models";

/**
 * **`usePointerLock`**: Hook to use PointerLock API.
 * @see [PointerLock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/usePointerLock)
 * @template T - The `HTMLElement` subtype that the pointer lock is requested on.
 * @param {UsePointerLockProps<T>} param - {@link UsePointerLockProps}
 * @returns {UsePointerLockResult} result {@link UsePointerLockResult}
 */
export const usePointerLock = <T extends HTMLElement>({ target, unadjustedMovement, onLock, onUnlock, onError }: UsePointerLockProps<T>): UsePointerLockResult => {
	const locked = useRef(false);
	const manualUnlock = useRef(false);

	const getElement = useCallback(() => (target as RefObject<T>)?.current ? (target as RefObject<T>).current! : target as T, [target]);

	const onLockChange = useCallback(() => {
		if (document.pointerLockElement) {
			onLock && onLock(document.pointerLockElement as T)
		} else {
			locked.current = false;
			document.removeEventListener("pointerlockerror", onError, false);
			document.removeEventListener("pointerlockchange", onLockChange);
			if (!manualUnlock.current) {
				onUnlock && onUnlock(getElement());
			}
			manualUnlock.current = false;
		}
	}, [onError, onLock, onUnlock, getElement]);

	const unlock = useCallback(async () => {
		if (!locked.current) {
			return;
		}
		locked.current = false;
		manualUnlock.current = true;
		document.exitPointerLock();
		onUnlock && onUnlock(getElement());
	}, [onUnlock, getElement]);

	const lock = useCallback(() => {
		const element = getElement();
		return new Promise<void>((res) => {
			if (!element || locked.current) {
				return res();
			}
			document.addEventListener("pointerlockerror", onError, false);
			document.addEventListener("pointerlockchange", onLockChange);
			return (element as unknown as { requestPointerLock: (opt: { unadjustedMovement: boolean }) => Promise<void> })
				.requestPointerLock({ unadjustedMovement: !!unadjustedMovement })
				.then(() => {
					locked.current = true;
				})
				.catch(err => {
					document.removeEventListener("pointerlockerror", onError, false);
					document.removeEventListener("pointerlockchange", onLockChange);
					onError(err);
				})
				.finally(() => {
					res();
				});
		})
	}, [getElement, onError, unadjustedMovement, onLockChange]);

	return { lock, unlock };
}