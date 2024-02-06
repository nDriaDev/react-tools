import { useCallback, useRef } from "react"
import { useSyncExternalStore } from "../state";
import { GeoLocationObject } from "../../models";

/**
 * **`useGeolocation`**: Hook to use user's geographic location. Refer to [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useGeolocation)
 * @param {Object} opts - options to use geolocation.
 * @param {PositionOptions} [opts.locationOptions] - An optional object which provides options for retrieval of the position data.
 * @param {boolean} [opts.mode] - it establishes how to obtain the geographic location:
 * - __current__: it gets the location when invoked.
 * - __observer__: it gets the current position every time it changes.
 * - __manual__: to obtain the location it need to invoke functions returned from hook.
 * @param {GeolocationPositionError} [opts.onError] - callback that will be executed if there will be errors.
 * @returns {[GeoLocationObject|undefined, (successCallback: PositionCallback, errorCallback?: PositionErrorCallback|null|undefined, options?: PositionOptions|undefined) => number|void, ()=>void]} results
 * Array with:
 * - _first element_: is the location object with two properties: __isSupported__ and __position__.
 * - _second element_: function to obtain manually current location.
 * - _third element_: function to obtain location on every changes.
 */
export const useGeolocation = ({mode, locationOptions, onError}: { locationOptions?: PositionOptions, mode: "observe" | "current" | "manual", onError?: (error: GeolocationPositionError) => void }): [GeoLocationObject, ()=>Promise<void>, ()=>Promise<()=>void>] => {
	const idWatch = useRef<number>();
	const cachedLocation = useRef<GeoLocationObject>({ isSupported: !!navigator && "geolocation" in navigator });
	const currentLocation = useRef<GeoLocationObject>({ isSupported: !!navigator && "geolocation" in navigator });
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
			if (cachedLocation.current?.isSupported !== cachedLocation.current?.isSupported || cachedLocation.current?.position?.timestamp !== currentLocation.current?.position?.timestamp || cachedLocation.current?.position?.coords.latitude !== currentLocation.current?.position?.coords.latitude || cachedLocation.current?.position?.coords.longitude !== currentLocation.current?.position?.coords.longitude) {
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