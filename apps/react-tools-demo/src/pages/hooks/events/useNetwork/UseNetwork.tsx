import { useNetwork } from "../../../../../../../packages/react-tools/src"

/**
The component display the network connection informations. Try to change connection type from console to see changes.
 */
export const UseNetwork = () => {
	const connectionState = useNetwork();

	return (<div style={{ textAlign: "center" }}>
		{
			Object.keys(connectionState).map(el => (
				<p key={el}>{el}: {JSON.stringify(connectionState[el as keyof typeof connectionState])}</p>
			))
		}
	</div>)
}