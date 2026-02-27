/**
 * Result object returned by [useVibrate](https://react-tools.ndria.dev/hooks/api-dom/useVibrate)
 */
export interface UseVibrateResult {
	/**
	 * Trigger a vibration pattern using the Vibration API.
	 * @param pattern - Duration in ms, or an array alternating vibration/pause durations.
	 */
	vibrate: (pattern: VibratePattern) => void;
	/** `true` when the Vibration API (`navigator.vibrate`) is available in the current environment. */
	isSupported: boolean;
	/** function to stop vibrating. */
	cancel: () => void;
}