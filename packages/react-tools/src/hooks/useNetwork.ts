import { useCallback, useMemo } from "react";
import { useSyncExternalStore } from "."

const listeners = new Set<() => void>();
const handler = () => listeners.forEach(l => l());

const getConnetionState = () => {
	const connection = Reflect.get(navigator, "connection");
	let obj = { online: navigator.onLine };
	if (connection) {
		obj.isSupported = true;
		obj.downlink = connection.downlink as number;
		obj.downlinkMax = connection.downlinkMax as number;
		obj.effectiveType = connection.effectiveType as "slow-2g" | "2g" | "3g" | "4g";
		obj.rtt = connection.rtt as number;
		obj.saveData = connection.saveData as boolean;
		obj.type = connection.type as "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
	} else {
		obj.isSupported = false;
		obj.downlink = null;
		obj.downlinkMax = null;
		obj.effectiveType = null;
		obj.rtt = null;
		obj.saveData = null;
		obj.type = null;
	}
}
export const useNetwork = () => {
	return useSyncExternalStore(
		useCallback(notif => {

		}, []),
		useMemo(() => {
			let prevState = getConnetionState();
		}, [])
	);
}