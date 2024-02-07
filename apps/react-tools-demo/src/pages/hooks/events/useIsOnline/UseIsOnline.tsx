import { useIsOnline } from "../../../../../../../packages/react-tools-lib/src"

/**
The component display the network connection informations. Try to change connection type from console to see changes.
 */
export const UseIsOnline = () => {
	const connectionState = useIsOnline();

	return (<div style={{ textAlign: "center" }}>
		<p>Online: {JSON.stringify(connectionState)}</p>
	</div>)
}