import { RefObject } from "react";

/**
 * Parameters accepted by [usePointerLock](https://react-tools.ndria.dev/hooks/events/usePointerLock).
 *
 * @template T - The `HTMLElement` subtype that the pointer lock is requested on.
 */
export interface UsePointerLockProps<T extends HTMLElement> {
	/**
	 * The element on which pointer lock is requested. Accepts either a React
	 * `RefObject<T>` or a direct element reference.
	 */
	target: RefObject<T> | T;
	/**
	 * When `true`, requests unadjusted pointer movement (i.e. raw hardware input
	 * without OS-level pointer acceleration). Not supported in all browsers —
	 * falls back silently when unavailable.
	 */
	unadjustedMovement?: boolean;
	/**
	 * Called when the pointer lock is successfully acquired. Receives the currently
	 * locked element as reported by `document.pointerLockElement`.
	 */
	onLock?: (target: T) => void;
	/**
	 * Called when the pointer lock is released, either programmatically or by the
	 * user pressing `Escape`.
	 */
	onUnlock?: (target: T) => void;
	/**
	 * Called when the pointer lock request fails (e.g. the element is not focusable,
	 * or the user denied the request). Receives the error thrown by the browser.
	 */
	onError: (err: unknown) => void;
}

/**
 * Result object returned by [usePointerLock](https://react-tools.ndria.dev/hooks/events/usePointerLock).
 */
export interface UsePointerLockResult {
	/** Request the pointer lock on the `target` element. Returns a `Promise` that resolves when granted. */
	lock: () => Promise<void>;
	/** Release the pointer lock. Triggers `onUnlock` if the lock was held. */
	unlock: () => void;
}