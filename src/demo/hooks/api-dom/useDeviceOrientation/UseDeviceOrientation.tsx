import { useDeviceOrientation } from "../../../.."

/**
The component uses _useDeviceOrientation_ hook to show device orientation details.
 */
export const UseDeviceOrientation = () => {
	const data = useDeviceOrientation();

	return <div style={{ textAlign: "center" }}>
		{
			Object.keys(data).map(key => {
				const value = data[key as keyof typeof data];
				return <p key={key}>{key}: {value !== null ? value.toString(): ""}</p>
			})
		}
	</div>
}