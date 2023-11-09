import { useUpdate } from "../../../../../../packages/react-tools/src"

/**
The component has:
- a button that execute the update

The component displays the current time. When button is clicked, it rerenders and current time is updated.
 */
const UseUpdate = () => {
	const update = useUpdate();

	return (<>
		<button type="button" onClick={update}>Update</button>
		<br />
		<br />
		{new Date().toLocaleTimeString()}
	</>);
}

UseUpdate.displayName = "UseUpdate";

export { UseUpdate };