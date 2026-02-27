/**
 * Props for the [useRaf](https://react-tools.ndria.dev/hooks/api-dom/useRaf).
 * @template T Type of arguments passed to the requestAnimationFrame callback function.
 */
export interface UseRafProps<T extends unknown []> {
	/**
	 * Callback invoked on each animation frame.
	 * @param timeElapsed - Milliseconds elapsed since the RAF loop started.
	 * @param repeat - function which, if invoked, re-executes the requestAnimationFrame with the callback itself.
	 * @param args - various parameters can be added, passed with the invocation function returned by the hook.
	 */
	cb: (timeElapsed: number, repeat: () => void, ...args: T) => void;
}

/**
 * Result object returned by [useRaf](https://react-tools.ndria.dev/hooks/api-dom/useRaf).
 *
 */
export type UseRafResult<T extends unknown[]> = [
	/** `start` - function to invoke requestAnimationFrame. */
	(...args: T) => void,
	/** `cancel` — function to invoke cancelAnimationFrame. */
	() => void
]