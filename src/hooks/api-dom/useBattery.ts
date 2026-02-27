import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state"
import { BatteryStatus, UseBatteryProps } from "../../models";

const listeners = new Set<() => void>();
const eventsListeners = {
	onCharging: new Set<(evt: Event) => void>(),
	onChargingTime: new Set<(evt: Event) => void>(),
	onDischargingTime: new Set<(evt: Event) => void>(),
	onLevel: new Set<(evt: Event) => void>()
};
let batteryCached: undefined | BatteryStatus & { onchargingchange: null | ((evt: Event) => void), onlevelchange: null | ((evt: Event) => void), onchargingtimechange: null | ((evt: Event) => void), ondischargingtimechange: null | ((evt: Event) => void) };

/**
 * **`useBattery`**: Hook for accessing and monitoring device battery status.
 * @see [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useBattery)
 * @param {UseBatteryProps} [opts] - {@link UseBatteryProps}
 * @returns {BatteryStatus} result {@link BatteryStatus}
 */
export const useBattery = (opts?: UseBatteryProps): BatteryStatus => {
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
					opts?.onCharging && eventsListeners.onCharging.add(opts.onCharging);
					opts?.onChargingTime && eventsListeners.onChargingTime.add(opts.onChargingTime);
					opts?.onDischargingTime && eventsListeners.onDischargingTime.add(opts.onDischargingTime);
					opts?.onLevel && eventsListeners.onLevel.add(opts.onLevel);
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
				opts?.onCharging && eventsListeners.onCharging.delete(opts.onCharging);
				opts?.onChargingTime && eventsListeners.onChargingTime.delete(opts.onChargingTime);
				opts?.onDischargingTime && eventsListeners.onDischargingTime.delete(opts.onDischargingTime);
				opts?.onLevel && eventsListeners.onLevel.delete(opts.onLevel);
				listeners.delete(notif);
				if (listeners.size === 0) {
					!!batteryCached && (batteryCached.onchargingchange = null);
					!!batteryCached && (batteryCached.onchargingtimechange = null);
					!!batteryCached && (batteryCached.ondischargingtimechange = null);
					!!batteryCached && (batteryCached.onlevelchange = null);
					batteryCached = undefined;
				}
			}
		}, [opts?.onCharging, opts?.onChargingTime, opts?.onDischargingTime, opts?.onLevel]),
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