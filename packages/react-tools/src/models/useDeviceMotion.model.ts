export interface DeviceMotionProps {
	isSupported: boolean;
	acceleration: DeviceMotionEventAcceleration | null;
	accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
	rotationRate: DeviceMotionEventRotationRate | null;
	interval: number | null;
}