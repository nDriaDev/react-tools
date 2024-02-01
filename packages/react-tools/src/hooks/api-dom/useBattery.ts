import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state"
import { BatteryStatus } from "../../models";

const listeners = new Set<() => void>();
const eventsListeners = {
	onCharging: new Set<(evt: Event) => void>(),
	onChargingTime: new Set<(evt: Event) => void>(),
	onDischargingTime: new Set<(evt: Event) => void>(),
	onLevel: new Set<(evt: Event) => void>()
};
let batteryCached: undefined | BatteryStatus & { onchargingchange: null | ((evt: Event) => void), onlevelchange: null | ((evt: Event) => void), onchargingtimechange: null | ((evt: Event) => void), ondischargingtimechange: null | ((evt: Event) => void) };

/**
 * **`useBattery`**: Hook for accessing and monitoring device battery status. Refer to [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)
 * @param {Object} [opts] - optional object parameter to listen battery events change.
 * @param {(evt: Event) => void} [opts.onChargingChange] - callback that will be executed when chargingchange event is fired.
 * @param {(evt: Event) => void} [opts.onChargingTimeChange] - callback that will be executed when chargingtimechange event is fired.
 * @param {(evt: Event) => void} [opts.onDischargingTimeChange] - callback that will be executed when dischargingtimechange event is fired.
 * @param {(evt: Event) => void} [opts.onLevelChange] - callback that will be executed when levelchange event is fired.
 * @returns {BatteryStatus} result
 * Object with:
 * - __isSupported__: boolean that indicates if Battery Status API is available.
 * - __level__: number that indicates battery level: is a number between 0 and 1.
 * - __charging__: boolean that indicates if battery is charging.
 * - __chargingTime__: number that indicates time in seconds remaining to full charge, or infinity.
 * - __dischargingTime__: number that indicates time in seconds remaining to empty charge, rounded in 15 minutes by API.
 */
export const useBattery = (opts?: { onChargingChange?: (evt: Event) => void, onChargingTimeChange?: (evt: Event) => void, onDischargingTimeChange?: (evt: Event) => void, onLevelChange?: (evt: Event) => void }): BatteryStatus => {
	const status = useRef<BatteryStatus>({
		isSupported: !!navigator && "getBattery" in navigator,
		charging: false,
		chargingTime: 0,
		dischargingTime: 0,
		level: 0
	});

	return useSyncExternalStore(
		useCallback(notif => {
			listeners.add(notif);
			listeners.size === 1 && !!navigator && "getBattery" in navigator && ((navigator.getBattery as () => Promise<BatteryStatus & { [k in "onchargingchange" | "onlevelchange" | "onchargingtimechange" | "ondischargingtimechange" ]: (evt:Event)=>void}>)())
				.then((battery: Exclude<typeof batteryCached, undefined>) => {
					batteryCached = battery;
					status.current = {
						isSupported: true,
						level: battery.level,
						charging: battery.charging,
						chargingTime: battery.chargingTime,
						dischargingTime: battery.dischargingTime
					}
					listeners.forEach(l => l());
					opts?.onChargingChange && eventsListeners.onCharging.add(opts.onChargingChange);
					opts?.onChargingTimeChange && eventsListeners.onChargingTime.add(opts.onChargingTimeChange);
					opts?.onDischargingTimeChange && eventsListeners.onDischargingTime.add(opts.onDischargingTimeChange);
					opts?.onLevelChange && eventsListeners.onLevel.add(opts.onLevelChange);
					battery.onchargingchange = (evt) => {
						status.current = {
							isSupported: true,
							level: battery.level,
							charging: battery.charging,
							chargingTime: battery.chargingTime,
							dischargingTime: battery.dischargingTime
						}
						eventsListeners.onCharging.forEach(l => l(evt));
						listeners.forEach(l => l());
					};
					battery.onchargingtimechange = (evt) => {
						status.current = {
							isSupported: true,
							level: battery.level,
							charging: battery.charging,
							chargingTime: battery.chargingTime,
							dischargingTime: battery.dischargingTime
						}
						eventsListeners.onChargingTime.forEach(l => l(evt));
						listeners.forEach(l => l());
					}
					battery.ondischargingtimechange = (evt) => {
						status.current = {
							isSupported: true,
							level: battery.level,
							charging: battery.charging,
							chargingTime: battery.chargingTime,
							dischargingTime: battery.dischargingTime
						}
						eventsListeners.onDischargingTime.forEach(l => l(evt));
						listeners.forEach(l => l());
					}
					battery.onlevelchange = (evt) => {
						status.current = {
							isSupported: true,
							level: battery.level,
							charging: battery.charging,
							chargingTime: battery.chargingTime,
							dischargingTime: battery.dischargingTime
						}
						eventsListeners.onLevel.forEach(l => l(evt));
						listeners.forEach(l => l());
					}
				})
			return () => {
				opts?.onChargingChange && eventsListeners.onCharging.delete(opts.onChargingChange);
				opts?.onChargingTimeChange && eventsListeners.onChargingTime.delete(opts.onChargingTimeChange);
				opts?.onDischargingTimeChange && eventsListeners.onDischargingTime.delete(opts.onDischargingTimeChange);
				opts?.onLevelChange && eventsListeners.onLevel.delete(opts.onLevelChange);
				listeners.delete(notif);
				if (listeners.size === 0) {
					!!batteryCached && (batteryCached.onchargingchange = null);
					!!batteryCached && (batteryCached.onchargingtimechange = null);
					!!batteryCached && (batteryCached.ondischargingtimechange = null);
					!!batteryCached && (batteryCached.onlevelchange = null);
					batteryCached = undefined;
				}
			}
		}, [opts?.onChargingChange, opts?.onChargingTimeChange, opts?.onDischargingTimeChange, opts?.onLevelChange]),
		useMemo(() => {
			let cachedStatus: BatteryStatus = { ...status.current };
			return () => {
				if (status.current.isSupported !== cachedStatus.isSupported || status.current.level !== cachedStatus.level || status.current.charging !== cachedStatus.charging || status.current.chargingTime !== cachedStatus.chargingTime || status.current.dischargingTime !== cachedStatus.dischargingTime) {
					cachedStatus = status.current;
				}
				return cachedStatus;
			}
		}, [])
	);
}