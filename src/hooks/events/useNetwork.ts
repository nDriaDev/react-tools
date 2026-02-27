import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { UseNetworkProps, UseNetworkResult, UseNetworkSelectedProps, UseNetworkSelectedResult } from "../../models";

const listeners = new Set<() => void>();
const handler = () => listeners.forEach(l => l());

const getConnetionState = () => {
	const connection = Reflect.get(navigator, "connection");
	const obj: UseNetworkResult = {
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
 * **`useNetwork`**: Hook to detect network connection infos. It takes optinally a parameter __selectedInfo__ to specify a subset of connection status property.
 * @see [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useNetwork)
 * @template T - A non-empty subset of {@link ConnectionState} property keys to subscribe to.
 * @param {UseNetworkSelectedProps<T>["selectedInfo"] | UseNetworkProps["selectedInfo"]} [selectedInfo] - {@link UseNetworkProps}
 * @returns {UseNetworkResult | UseNetworkSelectedResult<T>} result {@link UseNetworkResult}
 */
function useNetwork(selectedInfo?: UseNetworkProps["selectedInfo"]): UseNetworkResult;
function useNetwork<T extends keyof UseNetworkResult>(selectedInfo?: UseNetworkSelectedProps<T>["selectedInfo"]): UseNetworkSelectedResult<T>;
function useNetwork<T extends keyof UseNetworkResult>(selectedInfo?: UseNetworkSelectedProps<T>["selectedInfo"]): UseNetworkResult | UseNetworkSelectedResult<T> {
	const selectedInfoCached = useRef(selectedInfo ?? ["isSupported", "isOnline", "since", "downlink", "downlinkMax", "effectiveType", "rtt", "saveData", "type"] as unknown as UseNetworkSelectedProps<T>["selectedInfo"]);
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
				listeners.delete(notif);
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