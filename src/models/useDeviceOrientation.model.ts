/**
 * Reactive snapshot of the device orientation sensor data, returned by [useDeviceOrientation](https://react-tools.ndria.dev/hooks/api-dom/useDeviceOrientation).
 * Values are updated whenever the browser fires `deviceorientation` events.
 */
export interface UseDeviceOrientationResult {
	/** `true` when the `DeviceOrientationEvent` API is supported and permission has been granted. */
	isSupported: boolean;
	/**
	 * `true` when the orientation data is provided relative to the Earth's coordinate frame
	 * (absolute orientation). `false` when it is relative to some arbitrary frame.
	 * `null` when the property is not available.
	 */
	absolute: boolean | null;
	/**
	 * Rotation around the Z axis (compass heading) in degrees in the range `[0, 360)`.
	 * `null` when not available.
	 */
	alpha: number | null;
	/**
	 * Rotation around the X axis (front-to-back tilt) in degrees in the range `[-180, 180]`.
	 * Positive values indicate the top of the device is tilted away from the user.
	 * `null` when not available.
	 */
	beta: number | null;
	/**
	 * Rotation around the Y axis (left-to-right tilt) in degrees in the range `[-90, 90]`.
	 * Positive values indicate the right side of the device is tilted down.
	 * `null` when not available.
	 */
	gamma: number | null;
}
