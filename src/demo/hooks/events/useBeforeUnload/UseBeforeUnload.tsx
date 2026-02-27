import { useCallback } from "react";
import { useBeforeUnload } from "../../../.."

/**
The component uses _useBeforeUnload_ hook to ask confirm to user if he is sure to leave page when he changes page.
 */
export const UseBeforeUnload = () => {
	useBeforeUnload({
		listener: useCallback((evt: BeforeUnloadEvent) => {
			evt.preventDefault();
			evt.returnValue = "";
		}, [])
	});

	return (<>
		<a href="https://www.google.it">Go to google</a>
	</>);
}