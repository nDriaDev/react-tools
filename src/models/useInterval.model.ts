/**
 * Props for the [useInterval](https://react-tools.ndria.dev/hooks/api-dom/useInterval).
 * @template T Type of callback function parameters.
 */
export interface UseIntervalProps<T extends unknown []> {
	/** Callback executed on each interval tick. */
	callback: (...args: T) => void;
	/**
	 * Interval period in milliseconds.
	 * The interval does not start automatically — call `start()` to begin.
	 */
	delay: number;
}

/**
 * Result tuple returned by [useInterval](https://react-tools.ndria.dev/hooks/api-dom/useInterval).
 *
 * @template T Type of the callback function parameters.
 */
export type UseIntervalResult<T extends unknown[]> = [
	/** `start` - function to start interval. */
	(...args: T) => void,
	/** `stop` - function to clear interval. */
	() => void,
	/** `promisify` - function to promisify and start interval. */
	(...args: T) => Promise<void>
]