# useBluetooth
Hook to use [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API).

## Usage

```tsx
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
```

> The component uses _useBluetooth_ hook to detect if Bluetooth API is supported and show all available bluetooth devices and show renders its name after connection.


## API

```tsx
useBluetooth():[{isSupported: boolean, isConnected: boolean, device: BluetoothDevice|null, server: BluetoothRemoteGATTServer|null}, (opts?: BluetoothDevicesOptions)=>Promise<void>]
```

> ### Params
>
>
>

> ### Returns
>
> __result__
> - __Array__:  
>     - __Object__:  
>         - __isSupported__ : _boolean_  
>         - __isConnected__ : _boolean_  
>         - __device__ : _BluetoothDevice|null_  
>         - __server__ : _BluetoothRemoteGATTServer|null_  
>     - _(opts?: BluetoothDevicesOptions)=>Promise<void>_  
>