/**
 * Reactive snapshot of the device motion sensor data, returned by [useDeviceMotion](https://react-tools.ndria.dev/hooks/api-dom/useDeviceMotion).
 * Values are updated whenever the browser fires `devicemotion` events.
 */
export interface UseDeviceMotionResult {
	/** `true` when the `DeviceMotionEvent` API is supported and permission has been granted. */
	isSupported: boolean;
	/**
	 * Acceleration of the device along `x`, `y`, and `z` axes in m/s², **excluding** the
	 * effect of gravity. `null` when not available or not supported.
	 */
	acceleration: DeviceMotionEventAcceleration | null;
	/**
	 * Acceleration of the device along `x`, `y`, and `z` axes in m/s², **including** the
	 * contribution of gravity (approximately `9.8 m/s²` on the z-axis at rest).
	 * `null` when not available or not supported.
	 */
	accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
	/**
	 * Rate of rotation around each axis in degrees per second (`alpha`, `beta`, `gamma`).
	 * `null` when not available or not supported.
	 */
	rotationRate: DeviceMotionEventRotationRate | null;
	/**
	 * Interval in milliseconds at which data is obtained from the hardware sensor.
	 * `null` when not available.
	 */
	interval: number | null;
}