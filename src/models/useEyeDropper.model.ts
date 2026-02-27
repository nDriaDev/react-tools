/**
 * Optional callbacks for [useEyeDropper](https://react-tools.ndria.dev/hooks/api-dom/useEyeDropper).
 *
 */
export interface UseEyeDropperProps {
	/** Called immediately when `open()` is invoked, before the picker appears. */
	onStart?: () => void;
	/**
	 * Called with the selected hex colour string once the user picks a colour.
	 * @param result - The selected colour as a CSS hex string (e.g. `"#ff5733"`).
	 */
	onFinish?: (result: `#${string}`) => void;
}

/**
 * Result object returned by [useEyeDropper](https://react-tools.ndria.dev/hooks/api-dom/useEyeDropper).
 */
export interface UseEyeDropperResult {
	/** `true` when the EyeDropper API is available in the current browser. */
	isSupported: boolean;
	/**
	 * Opens the colour picker UI.
	 * Resolves with the selected hex colour string.
	 * @param signal - Optional `AbortSignal` to cancel the picker programmatically.
	 */
	open: (signal?: AbortSignal) => Promise<`#${string}`> | Promise<void>;
}