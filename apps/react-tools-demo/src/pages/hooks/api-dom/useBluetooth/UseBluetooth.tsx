import { useCallback, useState } from "react";
import { useBluetooth } from "../../../../../../../packages/react-tools-lib/src"

/**
The component uses _useBluetooth_ hook to detect if Bluetooth API is supported and show all available bluetooth devices and show renders its name after connection.
 */
export const UseBluetooth = () => {
	const [value, requestDevice] = useBluetooth();

	const [error, setError] = useState("");

	const getDevice = useCallback(() => {
		requestDevice().catch(err => {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError(err as string);
			}
		})
	}, [requestDevice]);

	return <>
		<p>
			Bluetooth supported: {value.isSupported ? "Yes" : "No"}
		</p>
		{
			value.isConnected &&
			<p>
					Device Name: {value.device?.name}
			</p>
		}
		<button type="button" onClick={getDevice} disabled={!value.isSupported}>Get Bluetooth device</button>
		{
			error &&
			<p style={{color: 'red'}}>
					{error}
			</p>
		}
	</>
}