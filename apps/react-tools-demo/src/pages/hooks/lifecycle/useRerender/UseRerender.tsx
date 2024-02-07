import { useRerender } from "../../../../../../../packages/react-tools-lib/src"

/**
The component has:
- a button that execute the update

The component displays the current time. When button is clicked, it rerenders and current time is updated.
 */
const UseRerender = () => {
	const update = useRerender();

	return (<>
		<button type="button" onClick={update}>Update</button>
		<br />
		<br />
		{new Date().toLocaleTimeString()}
	</>);
}

UseRerender.displayName = "UseRerender";

export { UseRerender };