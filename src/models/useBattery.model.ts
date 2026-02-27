/**
 * Reactive state snapshot of the device's battery, returned by `useBattery`.
 * All properties are updated automatically via Battery Status API events.
 */
export interface BatteryStatus {
	/** `true` when the Battery Status API is available in the current browser/environment. */
	isSupported: boolean,
	/**
	 * Current battery charge level as a value between `0.0` (empty) and `1.0` (full).
	 * Multiply by 100 to get a percentage.
	 */
	level: number,
	/** `true` when the battery is currently being charged. */
	charging: boolean,
	/**
	 * Estimated seconds remaining until the battery is fully charged.
	 * `Infinity` when the battery is not charging or the time cannot be determined.
	 */
	chargingTime: number,
	/**
	 * Estimated seconds of remaining battery life.
	 * `Infinity` when the battery is charging or the time cannot be determined.
	 */
	dischargingTime: number
}

/**
 * Configuration object accepted by [useBattery](https://react-tools.ndria.dev/hooks/api-dom/useBattery).
 *
 * All callback properties mirror the Battery Status API events. They are optional — omit any
 * you don't need.
 *
 */
export interface UseBatteryProps {
	/**
	 * Called when the battery's `charging` state changes
	 * (i.e. the charger is plugged in or unplugged).
	 * @param evt - The native `chargingchange` event.
	 */
	onCharging?: (evt: Event) => void;
	/**
	 * Called when the estimated time until the battery is fully charged changes.
	 * @param evt - The native `chargingtimechange` event.
	 */
	onChargingTime?: (evt: Event) => void;
	/**
	 * Called when the estimated remaining battery life changes.
	 * @param evt - The native `dischargingtimechange` event.
	 */
	onDischargingTime?: (evt: Event) => void;
	/**
	 * Called when the battery level changes.
	 * @param evt - The native `levelchange` event.
	 */
	onLevel?: (evt: Event) => void;
}
