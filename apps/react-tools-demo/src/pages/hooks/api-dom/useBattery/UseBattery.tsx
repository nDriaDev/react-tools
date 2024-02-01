import { useBattery } from "../../../../../../packages/react-tools/src"

/**
The component displays device battery information.
 */
export const UseBattery = () => {
	const status = useBattery();

	return (<div style={{ textAlign: "center" }}>
		{
			Object.keys(status).map(el => (
				<p key={el}>{el}: {status[el as keyof typeof status]}</p>
			))
		}
	</div>)
}