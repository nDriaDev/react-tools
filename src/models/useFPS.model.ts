/**
 * Props for the [useFPS](https://react-tools.ndria.dev/hooks/api-dom/useFPS).
 */
export interface UseFPSProps {
	/**
	 * Sampling interval in seconds. The hook records one FPS measurement per interval
	 * and updates the result accordingly.
	 */
	everySeconds: number;
	/**
	 * Number of measurements to keep in the rolling window for average/max calculations.
	 * Older measurements are dropped once the window is full.
	 */
	windowSize: number;
}
/**
 * Result object returned by [useFPS](https://react-tools.ndria.dev/hooks/api-dom/useFPS).
 */
export interface UseFPSResult {
	/**
	 * Rolling array of recent FPS measurements (up to `windowSize` entries).
	 * Each value is the frames-per-second recorded during the corresponding sampling interval.
	 */
	fps: number[];
	/** Average FPS over all measurements currently in the rolling window. */
	avg: number;
	/** Highest FPS value recorded in the rolling window. */
	maxFps: number;
	/** Most recently recorded FPS value. */
	currentFps: number;
}
