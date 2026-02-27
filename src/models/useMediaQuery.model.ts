/**
 * Props accepted by [useMediaQuery](https://react-tools.ndria.dev/hooks/api-dom/useMediaQuery).
 *
 */
export interface UseMediaQueryProps {
	/** media query to test. */
	mediaQuery: string;
	/** MediaQueryListEvent change handler. */
	onChange?: (evt: MediaQueryListEvent) => void;
}

/**
 * Result object returned by [useMediaQuery](https://react-tools.ndria.dev/hooks/api-dom/useMediaQuery).
 */
export interface UseMediaQueryResult {
	/**
	 * `true` when the CSS media query currently matches; `false` otherwise.
	 * Re-evaluated whenever the match state changes (component re-renders).
	 */
	matches: boolean;

	/**
	 * The serialised form of the evaluated media query string
	 * (e.g. `"(max-width: 768px)"`), as reported by `MediaQueryList.media`.
	 */
	media: string;
}