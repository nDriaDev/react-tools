import { useCallback, useRef } from "react"
import { useSyncExternalStore } from "../state";
import { UseGeolocationProps, UseGeoLocationResult } from "../../models";

/**
 * **`useGeolocation`**: Hook to use user's geographic location.
 * @see [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useGeolocation)
 * @param {UseGeolocationProps} param - {@link UseGeolocationProps}
 * @returns {UseGeoLocationResult} result {@link UseGeoLocationResult}
 */
export const useGeolocation = ({mode, locationOptions, onError}: UseGeolocationProps): UseGeoLocationResult => {
	const idWatch = useRef<number>();
	const cachedLocation = useRef<UseGeoLocationResult[0]>({ isSupported: !!navigator && "geolocation" in navigator });
	const currentLocation = useRef<UseGeoLocationResult[0]>({ isSupported: !!navigator && "geolocation" in navigator });
	const notifRef = useRef<() => void>();
	const successCallback = useCallback<PositionCallback>((position: GeolocationPosition) => {
		currentLocation.current = {position, isSupported: true};
		notifRef.current && notifRef.current();
	}, []);

	const errorCallback = useCallback<PositionErrorCallback>((positionError: GeolocationPositionError) => {
		if (onError) {
			onError(positionError)
		} else {
			throw positionError;
		}
	}, [onError]);

	const location = useSyncExternalStore(
		useCallback(notif => {
			if (!!navigator && "geolocation" in navigator) {
				notifRef.current = notif;
				mode === "observe"
					? (idWatch.current = navigator.geolocation.watchPosition(successCallback, errorCallback, locationOptions))
					: mode === "current"
						? navigator.geolocation.getCurrentPosition(successCallback, errorCallback, locationOptions)
						: notif();
			} else {
				currentLocation.current = {isSupported: false};
			}
			return () => {
				notifRef.current = undefined;
				mode === "observe" && idWatch.current && navigator.geolocation.clearWatch(idWatch.current);
			}
		}, [successCallback, errorCallback, locationOptions, mode]),
		useCallback(() => {
			if (
				cachedLocation.current?.isSupported !== currentLocation.current?.isSupported ||
				cachedLocation.current?.position?.timestamp !== currentLocation.current?.position?.timestamp ||
				cachedLocation.current?.position?.coords.latitude !== currentLocation.current?.position?.coords.latitude ||
				cachedLocation.current?.position?.coords.longitude !== currentLocation.current?.position?.coords.longitude
			) {
				cachedLocation.current = {...currentLocation.current};
			}
			return cachedLocation.current;
		}, [])
	);

	const currentPosition = useCallback(() => {
		let resolve: () => void, reject: () => void;
		const promise = new Promise<void>((res, rej) => {
			resolve = res as ()=>void;
			reject = rej;
		})
		if (!!navigator && "geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				position => {
					successCallback(position);
					resolve();
				},
				error => {
					errorCallback(error);
					reject();
				},
				locationOptions
			);
		} else {
			return Promise.resolve();
		}
		return promise;
	}, [successCallback, errorCallback, locationOptions])

	const observerPosition: () => Promise<() => void> = useCallback(() => {
		let watchId: number;
		let resolve: () => void, reject: () => void;
		let promise = new Promise((res, rej) => {
			resolve = res as () => void;
			reject = rej;
		})
		if (!!navigator && "geolocation" in navigator) {
			watchId = navigator.geolocation.watchPosition(
				position => {
					successCallback(position);
					resolve();
				},
				error => {
					errorCallback(error);
					reject();
				},
				locationOptions
			);
		} else {
			promise = Promise.resolve();
		}
		return promise.then(() => () => watchId && navigator.geolocation.clearWatch(watchId));
	}, [successCallback, errorCallback, locationOptions])

	return [
		location,
		currentPosition,
		observerPosition
	]
}