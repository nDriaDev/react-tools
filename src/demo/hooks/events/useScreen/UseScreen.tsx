import { useScreen } from "../../../.."

/**
The component shows screens information.
 */
export const UseScreen = () => {
	const [details] = useScreen(true);

	return <div style={{ textAlign: "left", padding: "0 1em", maxHeight: 300, overflow: "auto", border: "1px solid lightgray" }}>
		<p><strong>Current screen:</strong></p>
		<pre>{JSON.stringify(details.currentScreen, null, 2)}</pre>
		<p><strong>Screens:</strong></p>
		{
			details.screens?.map((el, index) => (
				<pre key={index}>{el.label}</pre>
			))
		}
	</div>
}