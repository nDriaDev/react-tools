import { RefObject, useCallback, useRef } from "react";
import { UsePointerLockProps, UsePointerLockResult } from "../../models";

/**
 * **`usePointerLock`**: Hook to use [PointerLock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API).
 * @param {UsePointerLockProps} param - object
 * @param {RefObject<T>|T} param.target - element that requires lock.
 * @param {boolean} [param.unadjustedMovement] - Disables OS-level adjustment for mouse acceleration, and accesses raw mouse input instead. The default value is false; setting it to true will disable mouse acceleration.
 * @param {(e: unknown)=>void} param.onError - function that will be executed when an error throwing during request.
 * @param {(target: RefObject<T>|T) => void} [param.onLock] - function that will be executed when lock has been acquired.
 * @param {() => void} [param.onUnlock] - function that will be executed when lock has been released.
 * @returns {UsePointerLockResult} result
 * Object with two properties:
 * - __lock__: function to acquire lock.
 * - __unlock__: function to release lock.
 */
export const usePointerLock = <T extends HTMLElement>({ target, unadjustedMovement, onLock, onUnlock, onError }: UsePointerLockProps<T>): UsePointerLockResult => {
	const locked = useRef(false);

	const onLockChange = useCallback(() => {
		if (document.pointerLockElement) {
			onLock && onLock(document.pointerLockElement as T)
		} else {
			locked.current = false;
			document.removeEventListener("pointerlockerror", onError, false);
			document.removeEventListener("pointerlockchange", onLockChange);
			onUnlock && onUnlock(((target as RefObject<T>)?.current
				? (target as RefObject<T>).current
				: target as T)!);
		}
	}, [onError, onLock, onUnlock, target]);

	const unlock = useCallback(async () => {
		locked.current = false;
		await document.exitPointerLock();
		onUnlock && onUnlock(((target as RefObject<T>)?.current
			? (target as RefObject<T>).current
			: target as T)!);
	}, [target, onUnlock]);

	const lock = useCallback(() => {
		const element = (target as RefObject<T>)?.current
			? (target as RefObject<T>).current
			: target as T;
		return new Promise<void>((res) => {
			if (!element || locked.current) {
				return res();
			}

			document.addEventListener("pointerlockerror", onError, false);
			document.addEventListener("pointerlockchange", onLockChange);
			return (element as unknown as { requestPointerLock: (opt: { unadjustedMovement: boolean }) => Promise<void> }).requestPointerLock({
				unadjustedMovement: !!unadjustedMovement,
			})
				.then(() => {
					locked.current = true;
				})
				.catch(err => {
					onError(err);
				})
				.finally(() => {
					res();
				});
		})
	}, [target, onError, unadjustedMovement, onLockChange]);

	return { lock, unlock };
}