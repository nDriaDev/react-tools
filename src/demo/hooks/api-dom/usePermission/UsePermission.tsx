import { usePermission } from "../../../.."

/**
The component uses _usePermission_ hook to check permission status of accelerometer, camera, microphone, notifications ans speaker.
 */
export const UsePermission = () => {
	const [accelerometer] = usePermission("accelerometer");
	const [camera] = usePermission("camera");
	const [microphone] = usePermission("microphone");
	const [notifications] = usePermission("notifications");
	const [speaker] = usePermission("speaker-selection");

	return <div>
		<p>accelerometer: {accelerometer}</p>
		<p>camera: {camera}</p>
		<p>microphone: {microphone}</p>
		<p>notifications: {notifications}</p>
		<p>speaker: {speaker}</p>
	</div>
}