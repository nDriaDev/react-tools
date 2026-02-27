import { useBattery } from "../../../.."

/**
The component displays device battery information.
 */
export const UseBattery = () => {
	const status = useBattery();

	return (<div style={{ textAlign: "center" }}>
		{
			Object.keys(status).map(el => (
				<p key={el}>{el}: {el === "isSupported" ? status.isSupported ? "Yes" : "No": status[el as keyof typeof status]}</p>
			))
		}
	</div>)
}