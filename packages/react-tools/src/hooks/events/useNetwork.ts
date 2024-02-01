import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { ArrayMinLength1, ConnectionState } from "../../models";

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

/**
 * **`useNetwork`**: Hook to detect network connection infos, refer to [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation). It takes optinally a parameter __selectedInfo__ to specify a subset of connection status property.
 * @template T
 * @extends {}
 * @param {ArrayMinLength1<T>} [selectedInfo] - array of connection property.
 * @returns {ConnectionState|{[k in T] : ConnectionState[k]}} object - Network connection property or a subset if __selectedInfo__ is specified.
 */
function useNetwork(selectedInfo?: undefined): ConnectionState;
function useNetwork<T extends keyof ConnectionState>(selectedInfo?: ArrayMinLength1<T>): { [k in T]: ConnectionState[k] };
function useNetwork<T extends keyof ConnectionState>(selectedInfo?: ArrayMinLength1<T>): ConnectionState | {[k in T] : ConnectionState[k]} {
	const selectedInfoCached = useRef(selectedInfo ?? ["isSupported", "isOnline", "since", "downlink", "downlinkMax", "effectiveType", "rtt", "saveData", "type"] as ArrayMinLength1<keyof ConnectionState>);
	return useSyncExternalStore(
		useCallback(notif => {
			const connection = Reflect.get(navigator, "connection");
			if (listeners.size === 0) {
				window.addEventListener("online", handler, { passive: true });
				window.addEventListener("offline", handler, { passive: true });
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
			return () => {
				const state = getConnetionState();
				for (const key of selectedInfoCached.current) {
					if (state[key] !== prevState[key]) {
						prevState = {
							...state,
							...(prevState.isOnline !== state.isOnline && {since: new Date().getTime()})
						};
						break;
					}
				}
				return prevState;
			}
		}, [])
	);
}

export {useNetwork}