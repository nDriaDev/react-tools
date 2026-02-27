/**
 * Result object returned by [useShare](https://react-tools.ndria.dev/hooks/api-dom/useShare).
 */
export interface UseShareResult {
	/**
	 * Invoke the native share sheet with the provided data.
	 * @param data - `ShareData` object containing `title`, `text`, `url`, and/or `files`.
	 */
	share: (data: ShareData) => Promise<void>;
	/** `true` when the Web Share API (`navigator.share`) is available in the current browser. */
	isSupported: boolean;
}