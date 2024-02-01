import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { OrientationLockType, ScreenDetails, ScreenDetailsEvt } from "../../models";

const listeners = new Set<() => void>();

/**
 * **`useScreen`**: Hook to work with [Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API) and [Window Management API](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API).
 * @param {boolean} [allScreen=false] - to interact with all screens or only with current screen.
 * @returns {[ScreenDetails, (orientation: OrientationLockType)=>void, ()=> void]}
 * It contains:
 * - __details__: an object with two properties:
 *     - _currentScreen_: object of type _ScreenDetail_ with informations of current screen.
 *     - _screens_: a _ScreenDetail_ array of all available screens, if browser supports this functionality, otherwise _undefined_.
 *     - A _ScreenDetail_ object has these properties:
 *         - __availHeight__
 *         - __availWidth__
 *         - __height__
 *         - __width__
 *         - __colorDepth__
 *         - __pixelDepth__
 *         - __orientation__:
 *             - __angle__
 *             - __type__
 *         - __availLeft__: only available if browser supports them, otherwise is _undefined_
 *         - __availTop__: only available if browser supports them, otherwise is _undefined_
 *         - __left__: only available if browser supports them, otherwise is _undefined_
 *         - __top__: only available if browser supports them, otherwise is _undefined_
 *         - __devicePixelRatio__: only available if browser supports them, otherwise is _undefined_
 *         - __isInternal__: only available if browser supports them, otherwise is _undefined_
 *         - __isPrimary__: only available if browser supports them, otherwise is _undefined_
 *         - __label__: only available if browser supports them, otherwise is _undefined_
 * - __lock__: function that locks the orientation of the containing document to the specified orientation. Typically orientation locking is only enabled on mobile devices, and when the browser context is full screen.
 * - __unlock__: function that unlocks the orientation of the containing document from its default orientation.
 */
export const useScreen = (allScreen?:boolean): [ScreenDetails, (orientation: OrientationLockType) => Promise<void>, ()=>void] => {
	const screensDetailsCached = useRef<ScreenDetailsEvt>();
	const changes = useRef(false);

	const details = useSyncExternalStore(
		useCallback(notif => {
			const listener = () => {
				console.log("orientation")
				changes.current = true;
				listeners.forEach(l => l());
			};
			listeners.add(notif);
			let pending = false;
			if (listeners.size === 1) {
				screen.orientation.onchange = listener;
				if (!!window && "getScreenDetails" in window) {
					pending = true;
					(window.getScreenDetails as () => Promise<ScreenDetailsEvt>)()
						.then(screensDetails => {
							if (pending) {
								screensDetails.addEventListener("currentscreenchange", listener);
								allScreen && screensDetails.addEventListener("screenschange", listener);
								screensDetailsCached.current = screensDetails;
								notif();
							}
						})
						.catch(() => {
							void 0;
						})
				}
			}
			return () => {
				listeners.delete(notif);
				if (listeners.size === 0) {
					if (screensDetailsCached.current) {
						screensDetailsCached.current.removeEventListener("currentscreenchange", listener);
						allScreen && screensDetailsCached.current.removeEventListener("screenschange", listener);
					}
					pending = false;
					screen.orientation.onchange = null;
				}
			}
		}, [allScreen]),
		useMemo(() => {
			let cachedDetails: ScreenDetails = {
				currentScreen: {
					availHeight: screen.availWidth,
					availWidth: screen.availWidth,
					height: screen.height,
					width: screen.width,
					colorDepth: screen.colorDepth,
					pixelDepth: screen.pixelDepth,
					orientation: {
						angle: screen.orientation.angle,
						type: screen.orientation.type,
					},
					availLeft: undefined,
					availTop: undefined,
					left: undefined,
					top: undefined,
					devicePixelRatio: undefined,
					isInternal: undefined,
					isPrimary: undefined,
					label: undefined
				},
				screens: undefined
			}
			return () => {
				const keys = Reflect.ownKeys(cachedDetails.currentScreen);
				if (cachedDetails.currentScreen.isPrimary === undefined && screensDetailsCached.current) {
					cachedDetails = {
						currentScreen: {
							...cachedDetails.currentScreen,
							availLeft: screensDetailsCached.current.currentScreen.availLeft,
							availTop: screensDetailsCached.current.currentScreen.availTop,
							left: screensDetailsCached.current.currentScreen.left,
							top: screensDetailsCached.current.currentScreen.top,
							devicePixelRatio: screensDetailsCached.current.currentScreen.devicePixelRatio,
							isInternal: screensDetailsCached.current.currentScreen.isInternal,
							isPrimary: screensDetailsCached.current.currentScreen.isPrimary,
							label: screensDetailsCached.current.currentScreen.label
						},
						screens: allScreen && screensDetailsCached.current?.screens ? screensDetailsCached.current.screens : undefined
					}
				}
				let areDifferent = false;
				if (changes.current) {
					changes.current = false;
					for (let i = 0, size = keys.length; i < size; i++) {
						if (keys[i] === "orientation") {
							if (cachedDetails.currentScreen.orientation.angle !== screen.orientation.angle || cachedDetails.currentScreen.orientation.type !== screen.orientation.type) {
								areDifferent = true;
							}
						} else if (keys[i] in screen && cachedDetails.currentScreen[keys[i] as keyof ScreenDetails["currentScreen"]] !== screen[keys[i] as keyof typeof screen]) {
							areDifferent = true;
						}
						if (areDifferent) {
							cachedDetails = {
								currentScreen: {
									availHeight: screen.availWidth,
									availWidth: screen.availWidth,
									height: screen.height,
									width: screen.width,
									colorDepth: screen.colorDepth,
									pixelDepth: screen.pixelDepth,
									orientation: {
										angle: screen.orientation.angle,
										type: screen.orientation.type,
									},
									availLeft: screensDetailsCached.current ? screensDetailsCached.current.currentScreen.availLeft : undefined,
									availTop: screensDetailsCached.current ? screensDetailsCached.current.currentScreen.availTop : undefined,
									left: screensDetailsCached.current ? screensDetailsCached.current.currentScreen.left : undefined,
									top: screensDetailsCached.current ? screensDetailsCached.current.currentScreen.top : undefined,
									devicePixelRatio: screensDetailsCached.current ? screensDetailsCached.current.currentScreen.devicePixelRatio : undefined,
									isInternal: screensDetailsCached.current ? screensDetailsCached.current.currentScreen.isInternal : undefined,
									isPrimary: screensDetailsCached.current ? screensDetailsCached.current.currentScreen.isPrimary : undefined,
									label: screensDetailsCached.current ? screensDetailsCached.current.currentScreen.label : undefined
								},
								screens: allScreen && screensDetailsCached.current?.screens ? screensDetailsCached.current.screens : undefined
							};
							break;
						}
					}
				}
				return cachedDetails;
			}
		}, [allScreen])
	);

	const lock = useRef((orientation: OrientationLockType) => (screen.orientation as ScreenOrientation & { lock: (orientation: OrientationLockType) => Promise<void> }).lock(orientation));

	const unlock = useRef(() => screen.orientation.unlock());

	return [
		details,
		lock.current,
		unlock.current
	]
}