/**
 * Props accepted by [useIdleCallback](https://react-tools.ndria.dev/hooks/api-dom/useIdleCallback)
 */
export interface UseIdleCallbackProps {
	/** Callback passed to `requestIdleCallback`, invoked during browser idle periods. */
	cb: IdleRequestCallback;
	/** Options forwarded to `requestIdleCallback` (e.g. `{ timeout: 2000 }`). */
	opts?: IdleRequestOptions;
}

/**
 * Result tuple returned by [useIdleCallback](https://react-tools.ndria.dev/hooks/api-dom/useIdleCallback).
 *
 */
export type UseIdleCallbackResult = [
	/** `location` - possible states of the Geolocation API: supported (with an optional position) or not supported. */
	boolean,
	/** `invoke` - function to invoke execution. */
	() => void,
	/** `cancel` - function to cancel execution. */
	() => void
]