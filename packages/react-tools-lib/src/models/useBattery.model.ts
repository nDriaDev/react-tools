export interface BatteryStatus {
	isSupported: boolean,
	level: number,
	charging: boolean,
	chargingTime: number,
	dischargingTime: number
}