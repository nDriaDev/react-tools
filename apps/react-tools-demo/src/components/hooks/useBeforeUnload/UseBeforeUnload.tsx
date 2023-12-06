import { useCallback } from "react";
import { useBeforeUnload } from "../../../../../../packages/react-tools/src"

/**
The component uses _useBeforeUnload_ hook to ask confirm to user if he is sure to leave page when he changes page.
 */
export const UseBeforeUnload = () => {
	useBeforeUnload({
		listener: useCallback((evt: BeforeUnloadEvent) => {
			evt.preventDefault();
			evt.returnValue = true;
		}, [])
	});

	return (<>
		<a href="/">Go To home</a>
	</>);
}