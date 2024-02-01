import { useCallback, useRef } from "react";
import { Bluetooth, BluetoothDevice, BluetoothDevicesOptions, BluetoothRemoteGATTServer } from "../../models";
import { useSyncExternalStore } from "../state";

/**
 * **`useBluetooth`**: Hook to use [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API).
 * @returns {[{isSupported: boolean, isConnected: boolean, device: BluetoothDevice|null, server: BluetoothRemoteGATTServer|null}, (opts?: BluetoothDevicesOptions)=>Promise<void>]} result
 */
export const useBluetooth = ():[{isSupported: boolean, isConnected: boolean, device: BluetoothDevice|null, server: BluetoothRemoteGATTServer|null}, (opts?: BluetoothDevicesOptions)=>Promise<void>] => {
	const notifRef = useRef<() => void>();
	const cachedState = useRef<{ isSupported: boolean, isConnected: boolean, device: BluetoothDevice|null, server: BluetoothRemoteGATTServer|null }>({
		isSupported: !!navigator && "bluetooth" in navigator,
		isConnected: false,
		device: null,
		server: null
	});
	const currentState = useRef<{ device?: BluetoothDevice, server?: BluetoothRemoteGATTServer }>({
		device: undefined,
		server: undefined
	});

	const connectToServerGatt = useRef(async () => {
		if (currentState.current.device && currentState.current.device.gatt) {
			currentState.current.server = await currentState.current.device.gatt.connect();
		}
	});

	const requestDevice = useCallback(async (opts?: BluetoothDevicesOptions) => {
		try {
			if (!!navigator && 'bluetooth' in navigator) {
				currentState.current.device = await (navigator.bluetooth as Bluetooth).requestDevice({
					...(opts ?? {}),
					...((!opts || !opts.filters || opts.filters.length === 0) && { acceptAllDevices: true })
				}) as BluetoothDevice;
				currentState.current.device && await connectToServerGatt.current();
			}
		} finally {
			notifRef.current && notifRef.current();
		}
	}, []);

	const value = useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			return () => {
				notifRef.current = undefined;
			}
		}, []),
		useCallback(() => {
			const isSupportedCurrent = !!navigator && 'bluetooth' in navigator;
			const isConnectedCurrent = currentState.current.server?.connected ?? false;
			if (cachedState.current.isConnected !== isConnectedCurrent || cachedState.current.isSupported !== isSupportedCurrent || cachedState.current.device !== currentState.current.device || cachedState.current.server !== currentState.current.server) {
				cachedState.current = {
					isSupported: isSupportedCurrent,
					isConnected: isConnectedCurrent,
					device: currentState.current.device!,
					server: currentState.current.server!
				};
			}
			return cachedState.current;
		}, [])
	);

	return [value, requestDevice];
}