/**
 * Parameters accepted by [useScreenWakeLock](https://react-tools.ndria.dev/hooks/api-dom/useScreenWakeLock).
 */
export interface UseScreenWakeLockProps {
	/**
	 * Function executed when lock is released.
	 */
	onRelease?: (evt?: Event) => void;
}

/**
 * Screen wake lock info object returned as the first element of [useScreenWakeLock](https://react-tools.ndria.dev/hooks/api-dom/useScreenWakeLock)'s tuple.
 */
export interface UseScreenWakeLockInfo {
	/** `true` when the Screen Wake Lock API is available in the current browser. */
	isSupported: boolean;

	/**
	 * The lock type currently held (`"screen"`), or `null` when no lock is active.
	 */
	type: "screen" | null;

	/**
	 * `true` when a wake lock is currently active; `false` when released; `null` before the
	 * first `acquire()` call.
	 */
	isActive: boolean | null;
}

/**
 * Result tuple returned by [useScreenWakeLock](https://react-tools.ndria.dev/hooks/api-dom/useScreenWakeLock).
 *
 */
export type UseScreenWakeLockResult = [
	/** Current wake lock status. See {@link UseScreenWakeLockInfo}. */
	UseScreenWakeLockInfo,
	/** `acquire` — requests a screen wake lock. No-op when already active. */
	() => Promise<void>,
	/**`release` — releases the active wake lock. No-op when not active. */
	() => Promise<void>
];
