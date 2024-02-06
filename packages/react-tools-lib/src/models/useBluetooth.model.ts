export interface Bluetooth extends EventTarget {
	/**Returns a Promise to a _BluetoothDevice_ object with the specified options.*/
	requestDevice: (opts?: BluetoothDevicesOptions) => Promise<BluetoothDevice | TypeError | DOMException>;
}

export interface BluetoothDevicesOptions {
	/**An array of BluetoothScanFilters. This filter consists of an array of _BluetoothServiceUUIDs_, a _name_ parameter, and a _namePrefix_ parameter.*/
	filters?: BluetoothScanFilters[],
	/**An array of _BluetoothServiceUUID_s.*/
	optionalServices?: BluetoothServiceUUID[],
	/**A boolean value indicating that the requesting script can accept all Bluetooth devices. The default is __false__.*/
	acceptAllDevices?: boolean
}

export type BluetoothServiceUUID = number | string;
export type BluetoothCharacteristicUUID = number | string;
export type BluetoothDescriptorUUID = number | string;

/**Represents a Bluetooth device inside a particular script execution environment.*/
export interface BluetoothDevice {
	/**A string that uniquely identifies a device.*/
	readonly id: string;
	/**A string that provides a human-readable name for the device.*/
	readonly name: string;
	/**A reference to the device's BluetoothRemoteGATTServer.*/
	readonly gatt: BluetoothRemoteGATTServer;
}

/**Represents a GATT Server on a remote device.*/
export interface BluetoothRemoteGATTServer {
	/**A boolean value that returns true while this script execution environment is connected to this.device. It can be false while the user agent is physically connected.*/
	readonly connected: boolean;
	/**A reference to the BluetoothDevice running the server.*/
	readonly device: BluetoothDevice;
	/**Causes the script execution environment to connect to _this.device_.*/
	connect: () => Promise<BluetoothRemoteGATTServer>;
	/**Causes the script execution environment to disconnect from _this.device_.*/
	disconnect: ()=>void;
	/**Returns a promise to the primary _BluetoothRemoteGATTService_ offered by the Bluetooth device for a specified _BluetoothServiceUUID_.*/
	getPrimaryService: (uuid: BluetoothServiceUUID) => Promise<BluetoothRemoteGATTService>;
	/**Returns a promise to a list of primary _BluetoothRemoteGATTService_ objects offered by the Bluetooth device for a specified _BluetoothServiceUUID_.*/
	getPrimaryServices: (uuid: BluetoothServiceUUID) => Promise<BluetoothRemoteGATTService[]>;
}

/**Represents a service provided by a GATT server, including a device, a list of referenced services, and a list of the characteristics of this service.*/
export interface BluetoothRemoteGATTService {
	/**Returns information about a Bluetooth device through an instance of _BluetoothDevice_.*/
	readonly device: BluetoothDevice;
	/**Returns a boolean value indicating whether this is a primary or secondary service.*/
	readonly isPrimary: boolean;
	/**Returns a string representing the UUID of this service.*/
	readonly uuid: BluetoothServiceUUID;
	/**Returns a Promise to an instance of BluetoothRemoteGATTCharacteristic for a given universally unique identifier (UUID).*/
	getCharacteristic: (uuid: BluetoothCharacteristicUUID) => Promise<BluetoothRemoteGATTCharacteristic>;
	/**Returns a Promise to an Array of BluetoothRemoteGATTCharacteristic instances for an optional universally unique identifier (UUID).*/
	getCharacteristics: (uuid: BluetoothCharacteristicUUID) => Promise<BluetoothRemoteGATTCharacteristic[]>;
}

/**Represents a GATT Characteristic, which is a basic data element that provides further information about a peripheral's service.*/
export interface BluetoothRemoteGATTCharacteristic extends EventTarget {
	/**Returns the _BluetoothRemoteGATTService_ this characteristic belongs to.*/
	readonly service: BluetoothRemoteGATTService;
	/**Returns a string containing the UUID of the characteristic, for example '00002a37-0000-1000-8000-00805f9b34fb' for the Heart Rate Measurement characteristic.*/
	readonly uuid: BluetoothCharacteristicUUID;
	/**Returns the properties of this characteristic.*/
	readonly properties: BluetoothCharacteristicProperties;
	/**The currently cached characteristic value. This value gets updated when the value of the characteristic is read or updated via a notification or indication.*/
	readonly value: ArrayBuffer;
	/**Event handler for the characteristicvaluechanged event.*/
	oncharacteristicvaluechanged: (evt: EventTarget)=>void;
	/**Returns a Promise that resolves to the first BluetoothRemoteGATTDescriptor for a given descriptor UUID.*/
	getDescriptor: (uuid: BluetoothDescriptorUUID) => Promise<BluetoothRemoteGATTDescriptor>;
	/**Returns a Promise that resolves to an Array of all BluetoothRemoteGATTDescriptor objects for a given descriptor UUID.*/
	getDescriptors: (uuid: BluetoothDescriptorUUID) => Promise<BluetoothRemoteGATTDescriptor[]>;
	/**Returns a Promise that resolves to an DataView holding a duplicate of the value property if it is available and supported. Otherwise it throws an error.*/
	readValue: () => Promise<DataView>;
	/**
	 * Sets the value property to the bytes contained in a given ArrayBuffer, calls WriteCharacteristicValue(this=this, value=value, response="optional"), and returns the resulting Promise.
	 * @deprecated
	*/
	writeValue: (value: ArrayBuffer) => Promise<void>;
	/**Sets the value property to the bytes contained in a given ArrayBuffer, calls WriteCharacteristicValue(this=this, value=value, response="required"), and returns the resulting Promise.*/
	writeValueWithResponse: (value: ArrayBuffer) => Promise<void>;
	/**Sets the value property to the bytes contained in a given ArrayBuffer, calls WriteCharacteristicValue(this=this, value=value, response="never"), and returns the resulting Promise.*/
	writeValueWithoutResponse: (value: ArrayBuffer) => Promise<void>;
	/**Returns a Promise that resolves when navigator.bluetooth is added to the active notification context.*/
	startNotifications: () => Promise<BluetoothRemoteGATTCharacteristic>;
	/**Returns a Promise that resolves when navigator.bluetooth is removed from the active notification context.*/
	stopNotifications: () => Promise<void>;
}

/**Provides properties of a particular BluetoothRemoteGATTCharacteristic.*/
export interface BluetoothCharacteristicProperties {
	/**Returns a boolean that is true if signed writing to the characteristic value is permitted.*/
	readonly authenticatedSignedWrites: boolean;

	/**Returns a boolean that is true if the broadcast of the characteristic value is permitted using the Server Characteristic Configuration Descriptor.*/
	readonly broadcast: boolean;

	/**Returns a boolean that is true if indications of the characteristic value with acknowledgement is permitted.*/
	readonly indicate: boolean;

	/**Returns a boolean that is true if notifications of the characteristic value without acknowledgement is permitted.*/
	readonly notify: boolean;

	/**Returns a boolean that is true if the reading of the characteristic value is permitted.*/
	readonly read: boolean;

	/**Returns a boolean that is true if reliable writes to the characteristic is permitted.*/
	readonly reliableWrite: boolean;

	/**Returns a boolean that is true if reliable writes to the characteristic descriptor is permitted.*/
	readonly writableAuxiliaries: boolean;

	/**Returns a boolean that is true if the writing to the characteristic with response is permitted.*/
	readonly write: boolean;

	/**Returns a boolean that is true if the writing to the characteristic without response is permitted.*/
	readonly writeWithoutResponse: boolean;
}

/**Represents a GATT Descriptor, which provides further information about a characteristic's value.*/
export interface BluetoothRemoteGATTDescriptor {
	/**Returns the BluetoothRemoteGATTCharacteristic this descriptor belongs to.*/
	characteristic: BluetoothRemoteGATTCharacteristic;

	/**Returns the UUID of the characteristic descriptor, for example '00002902-0000-1000-8000-00805f9b34fb' for theClient Characteristic Configuration descriptor.*/
	uuid: BluetoothDescriptorUUID;

	/**Returns the currently cached descriptor value.This value gets updated when the value of the descriptor is read.*/
	value: ArrayBuffer;

	/**Returns a Promise that resolves to an ArrayBuffer holding a duplicate of the value property if it is available and supported.Otherwise it throws an error.*/
	readValue: () => Promise<ArrayBuffer>;

	/**Sets the value property to the bytes contained in an ArrayBuffer and returns a Promise.*/
	writeValue: (value: ArrayBuffer) => Promise<void>;
}

export type BluetoothScanFilters = | {
	name: string,
	namePrefix: string,
	services: BluetoothServiceUUID[]
} | {
	name: string,
	namePrefix?: never,
	services?: never
} | {
	name: string,
	namePrefix: string,
	services?: never
} | {
	name: string,
	namePrefix?: never,
	services: BluetoothServiceUUID[]
} | {
	name?: never,
	namePrefix: string,
	services: BluetoothServiceUUID[]
} | {
	name?: never,
	namePrefix?: never,
	services: BluetoothServiceUUID[]
} | {
	name?: never,
	namePrefix: string,
	services?: never
};