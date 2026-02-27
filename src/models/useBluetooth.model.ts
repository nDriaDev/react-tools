/**
 * The `navigator.bluetooth` interface, extended with the `requestDevice` method.
 * Used internally by `useBluetooth`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth
 */
export interface Bluetooth extends EventTarget {
	/**
	 * Prompts the user to select a Bluetooth device matching the provided options.
	 * @param opts - Filter options (services, device name, etc.).
	 * @returns A Promise resolving to the selected `BluetoothDevice`, or a `TypeError`/`DOMException` on failure.
	 */
	requestDevice: (opts?: BluetoothDevicesOptions) => Promise<BluetoothDevice | TypeError | DOMException>;
}

/**
 * Options passed to `Bluetooth.requestDevice()`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice
 */
export interface BluetoothDevicesOptions {
	/**
	 * Array of scan filters. The browser only shows devices that match at least one filter.
	 * Each filter can specify `services`, `name`, and/or `namePrefix`.
	 */
	filters?: BluetoothScanFilters[],
	/**
	 * Array of additional GATT service UUIDs that the requesting script wants to access,
	 * beyond those specified in `filters`.
	 */
	optionalServices?: BluetoothServiceUUID[],
	/**
	 * When `true`, the browser shows all discoverable Bluetooth devices regardless of filters.
	 * Use with caution — requires user consent for every device.
	 * @default false
	 */
	acceptAllDevices?: boolean
}

/** A UUID identifying a Bluetooth GATT service. Can be a 16-bit short UUID (number) or a full 128-bit UUID string. */
export type BluetoothServiceUUID = number | string;
/** A UUID identifying a Bluetooth GATT characteristic. */
export type BluetoothCharacteristicUUID = number | string;
/** A UUID identifying a Bluetooth GATT descriptor. */
export type BluetoothDescriptorUUID = number | string;

/**
 * Represents a Bluetooth device inside the current script execution environment.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice
 */
export interface BluetoothDevice {
	/** A unique string identifying the device across sessions in the same origin. */
	readonly id: string;
	/** Human-readable name provided by the device (e.g. `"My Headphones"`). */
	readonly name: string;
	/** Reference to the device's primary GATT server. Use this to discover services and characteristics. */
	readonly gatt: BluetoothRemoteGATTServer;
}

/**
 * Represents a GATT Server hosted on a remote Bluetooth device.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer
 */
export interface BluetoothRemoteGATTServer {
	/**
	 * `true` while this script execution environment is connected to the device.
	 * Note: may be `false` even when the physical connection is still alive.
	 */
	readonly connected: boolean;
	/** The `BluetoothDevice` this server belongs to. */
	readonly device: BluetoothDevice;
	/**
	 * Establishes a GATT connection to the device.
	 * @returns A Promise that resolves to this `BluetoothRemoteGATTServer` on success.
	 */
	connect: () => Promise<BluetoothRemoteGATTServer>;
	/** Disconnects from the remote GATT server. */
	disconnect: () => void;
	/**
	 * Returns a Promise to the primary GATT service with the given UUID.
	 * @param uuid - The service UUID to look up.
	 */
	getPrimaryService: (uuid: BluetoothServiceUUID) => Promise<BluetoothRemoteGATTService>;
	/**
	 * Returns a Promise to all primary GATT services with the given UUID.
	 * @param uuid - The service UUID to look up.
	 */
	getPrimaryServices: (uuid: BluetoothServiceUUID) => Promise<BluetoothRemoteGATTService[]>;
}

/**
 * Represents a GATT service on a remote Bluetooth device.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService
 */
export interface BluetoothRemoteGATTService {
	/** The `BluetoothDevice` this service belongs to. */
	readonly device: BluetoothDevice;
	/** `true` if this is a primary service; `false` if it is secondary. */
	readonly isPrimary: boolean;
	/** UUID string identifying this service (e.g. `"0000180d-0000-1000-8000-00805f9b34fb"`). */
	readonly uuid: BluetoothServiceUUID;
	/**
	 * Returns a Promise to the characteristic with the given UUID within this service.
	 * @param uuid - The characteristic UUID.
	 */
	getCharacteristic: (uuid: BluetoothCharacteristicUUID) => Promise<BluetoothRemoteGATTCharacteristic>;
	/**
	 * Returns a Promise to all characteristics with the given UUID within this service.
	 * @param uuid - The characteristic UUID.
	 */
	getCharacteristics: (uuid: BluetoothCharacteristicUUID) => Promise<BluetoothRemoteGATTCharacteristic[]>;
}

/**
 * Represents a GATT Characteristic, the basic data element of a Bluetooth service.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic
 */
export interface BluetoothRemoteGATTCharacteristic extends EventTarget {
	/** The `BluetoothRemoteGATTService` this characteristic belongs to. */
	readonly service: BluetoothRemoteGATTService;
	/** UUID string identifying this characteristic (e.g. `"00002a37-0000-1000-8000-00805f9b34fb"`). */
	readonly uuid: BluetoothCharacteristicUUID;
	/** Object describing which operations (read, write, notify, etc.) are permitted. */
	readonly properties: BluetoothCharacteristicProperties;
	/** The most recently cached value, updated on read or via notification/indication. */
	readonly value: ArrayBuffer;
	/** Event handler called when the characteristic value changes (notification/indication). */
	oncharacteristicvaluechanged: (evt: EventTarget) => void;
	/**
	 * Returns the first GATT descriptor with the given UUID.
	 * @param uuid - The descriptor UUID.
	 */
	getDescriptor: (uuid: BluetoothDescriptorUUID) => Promise<BluetoothRemoteGATTDescriptor>;
	/**
	 * Returns all GATT descriptors with the given UUID.
	 * @param uuid - The descriptor UUID.
	 */
	getDescriptors: (uuid: BluetoothDescriptorUUID) => Promise<BluetoothRemoteGATTDescriptor[]>;
	/** Reads and returns the current value of the characteristic. */
	readValue: () => Promise<DataView>;
	/**
	 * Writes a value to the characteristic (response optional).
	 * @deprecated Use `writeValueWithResponse` or `writeValueWithoutResponse` instead.
	 */
	writeValue: (value: ArrayBuffer) => Promise<void>;
	/**
	 * Writes a value and waits for confirmation from the device.
	 * @param value - The binary data to write.
	 */
	writeValueWithResponse: (value: ArrayBuffer) => Promise<void>;
	/**
	 * Writes a value without requesting confirmation from the device.
	 * @param value - The binary data to write.
	 */
	writeValueWithoutResponse: (value: ArrayBuffer) => Promise<void>;
	/** Subscribes to value change notifications for this characteristic. */
	startNotifications: () => Promise<BluetoothRemoteGATTCharacteristic>;
	/** Unsubscribes from value change notifications for this characteristic. */
	stopNotifications: () => Promise<void>;
}

/**
 * Permission flags describing which operations are allowed on a GATT characteristic.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BluetoothCharacteristicProperties
 */
export interface BluetoothCharacteristicProperties {
	/** `true` if authenticated signed writes are permitted. */
	readonly authenticatedSignedWrites: boolean;
	/** `true` if broadcasting the value via the Server Characteristic Configuration Descriptor is permitted. */
	readonly broadcast: boolean;
	/** `true` if indications (acknowledged notifications) are permitted. */
	readonly indicate: boolean;
	/** `true` if notifications (unacknowledged) are permitted. */
	readonly notify: boolean;
	/** `true` if reading the characteristic value is permitted. */
	readonly read: boolean;
	/** `true` if reliable writes are permitted. */
	readonly reliableWrite: boolean;
	/** `true` if writing to the characteristic descriptor is permitted. */
	readonly writableAuxiliaries: boolean;
	/** `true` if writing with response is permitted. */
	readonly write: boolean;
	/** `true` if writing without response is permitted. */
	readonly writeWithoutResponse: boolean;
}

/**
 * Represents a GATT Descriptor, providing additional metadata about a characteristic's value.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTDescriptor
 */
export interface BluetoothRemoteGATTDescriptor {
	/** The characteristic this descriptor is attached to. */
	characteristic: BluetoothRemoteGATTCharacteristic;
	/** UUID string of this descriptor (e.g. `"00002902-0000-1000-8000-00805f9b34fb"` for CCCD). */
	uuid: BluetoothDescriptorUUID;
	/** The most recently cached descriptor value. Updated on read. */
	value: ArrayBuffer;
	/** Reads and returns the current descriptor value. */
	readValue: () => Promise<ArrayBuffer>;
	/**
	 * Writes a value to the descriptor.
	 * @param value - The binary data to write.
	 */
	writeValue: (value: ArrayBuffer) => Promise<void>;
}

/**
 * Scan filter for `Bluetooth.requestDevice()`.
 * A device matches if it satisfies at least one of the provided filters.
 *
 * Each variant requires at least one of: `name`, `namePrefix`, or `services`.
 */
export type BluetoothScanFilters =
	| { name: string; namePrefix: string; services: BluetoothServiceUUID[] }
	| { name: string; namePrefix?: never; services?: never }
	| { name: string; namePrefix: string; services?: never }
	| { name: string; namePrefix?: never; services: BluetoothServiceUUID[] }
	| { name?: never; namePrefix: string; services: BluetoothServiceUUID[] }
	| { name?: never; namePrefix?: never; services: BluetoothServiceUUID[] }
	| { name?: never; namePrefix: string; services?: never };

/**
 * Reactive state snapshot returned as the first element of [useBluetooth](https://react-tools.ndria.dev/hooks/api-dom/useBluetooth)'s tuple.
 *
 */
export interface UseBluetoothState {
	/**
	 * `true` when the Web Bluetooth API (`navigator.bluetooth`) is available in the current browser.
	 * When `false`, `requestDevice` will not open a picker.
	 */
	isSupported: boolean;
	/**
	 * `true` when a GATT connection to a device is currently active.
	 * Becomes `false` after `server.disconnect()` is called or the device goes out of range.
	 */
	isConnected: boolean;
	/**
	 * The selected `BluetoothDevice` returned by the browser's device picker.
	 * `null` before the user selects a device or after disconnection.
	 */
	device: BluetoothDevice | null;
	/**
	 * The `BluetoothRemoteGATTServer` for the selected device.
	 * Use this to discover services and characteristics.
	 * `null` until a GATT connection is established.
	 */
	server: BluetoothRemoteGATTServer | null;
}

/**
 * Result tuple returned by [useBluetooth](https://react-tools.ndria.dev/hooks/api-dom/useBluetooth).
 *
 * | Index | Type | Description |
 * |-------|------|-------------|
 * | `[0]` | `UseBluetoothState` | Reactive Bluetooth state (supported, connected, device, server). See {@link UseBluetoothState}. |
 * | `[1]` | `(opts?: BluetoothDevicesOptions) => Promise<void>` | `requestDevice` — opens the browser's Bluetooth device picker. Connect to the GATT server of the chosen device. |
 *
 */
export type UseBluetoothResult = [UseBluetoothState, (opts?: BluetoothDevicesOptions) => Promise<void>];
