/**
 * Props accepted by [useGeolocation](https://react-tools.ndria.dev/hooks/api-dom/useGeolocation).
 */
export interface UseGeolocationProps {
	/**
	 * it establishes how to obtain the geographic location:
	 * - __current__: it gets the location when invoked.
	 * - __observer__: it gets the current position every time it changes.
	 * - __manual__: to obtain the location it need to invoke functions returned from hook.
	 */
	mode: "observe" | "current" | "manual";
	/**
	 * Called when the Geolocation API returns an error (permission denied, unavailable, timeout, etc.).
	 * @param error - The `GeolocationPositionError` describing the failure.
	 */
	onError?: (error: GeolocationPositionError) => void;
	/**
	 * Options forwarded directly to `Geolocation.getCurrentPosition` /
	 * `Geolocation.watchPosition`.
	 * Common options: `{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }`.
	 */
	locationOptions?: PositionOptions;
}

/**
 * Result tuple returned by [useGeolocation](https://react-tools.ndria.dev/hooks/api-dom/useGeolocation).
 *
 */
export type UseGeoLocationResult = [
	/** `location` - possible states of the Geolocation API: supported (with an optional position) or not supported. */
	({
		/** `true` — the Geolocation API is supported in the current browser/environment. */
		isSupported: true;
		/**
		 * The most recent `GeolocationPosition` object, containing `coords` (latitude, longitude,
		 * accuracy, etc.) and a `timestamp`. `undefined` before the first position is obtained
		 * or if the user denies permission.
		 */
		position?: GeolocationPosition;
	}) | ({
		/** `false` — the Geolocation API is not supported; `position` is never set. */
		isSupported: false;
		position?: never;
	}),
	/** `currentPosition` — function to obtain manually current location. */
	() => Promise<void>,
	/** `observerPosition` — function to obtain location on every changes. */
	() => Promise<()=>void>
];