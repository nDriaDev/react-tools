import { useCallback, useMemo } from "react";
import { useSyncExternalStore } from "."
import { ConnectionState } from "../models";

const listeners = new Set<() => void>();
const handler = () => listeners.forEach(l => l());

const getConnetionState = () => {
	const connection = Reflect.get(navigator, "connection");
	const obj: ConnectionState = {
		isSupported: !!connection,
		isOnline: navigator.onLine
	};
	if (connection) {
		obj.isSupported = true;
		obj.downlink = connection.downlink as number;
		obj.downlinkMax = connection.downlinkMax as number;
		obj.effectiveType = connection.effectiveType as "slow-2g" | "2g" | "3g" | "4g";
		obj.rtt = connection.rtt as number;
		obj.saveData = connection.saveData as boolean;
		obj.type = connection.type as "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
	}
	return obj;
}

export const useNetwork = () => {
	return useSyncExternalStore(
		useCallback(notif => {
			const connection = Reflect.get(navigator, "connection");
			if (listeners.size === 0) {
				window.addEventListener("online", handler);
				window.addEventListener("offline", handler);
				!!connection && connection.addEventListener("change", handler);
			}
			listeners.add(notif);
			return () => {
				listeners.delete(handler);
				if (listeners.size === 0) {
					window.removeEventListener("online", handler);
					window.removeEventListener("offline", handler);
					!!connection && connection.removeEventListener("change", handler);
				}
			}
		}, []),
		useMemo(() => {
			let prevState = getConnetionState();
			return () => {}
		}, [])
	);
}