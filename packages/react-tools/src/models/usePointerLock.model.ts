import { RefObject } from "react";

export interface UsePointerLockProps<T extends HTMLElement> {
	/**Element that asks for the pointer lock.*/
	target: RefObject<T> | T;
	/**Disables OS-level adjustment for mouse acceleration, and accesses raw mouse input instead. The default value is false; setting it to true will disable mouse acceleration.*/
	unadjustedMovement?: boolean;
	onError: (e: unknown) => void;
	onLock?: (target: T) => void;
	onUnlock?: (target: T) => void;
}

export interface UsePointerLockResult {
	/**Function to acquire lock.*/
	lock: () => Promise<void>
	/**Function to release lock.*/
	unlock: () => void;
}