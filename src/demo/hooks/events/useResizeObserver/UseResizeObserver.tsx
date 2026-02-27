import { useState } from "react";
import { useResizeObserver } from "../../../.."

/**
The component renders a textarea element with a ref that receives callback returned from _useResizeObserver__ hook. There are also two button to disconnect and reconnect observer by functions returned from hook.

Hook is initialized with a callback that verifies if textarea element has a width minor or major of 100 px amd set result into __state variable__. The __state variable__ value is displayed on screen.
 */
export const UseResizeObserver = () => {
	const [state, setState] = useState(false);
	const { ref, disconnect, reconnect } = useResizeObserver<HTMLTextAreaElement>(
		(entries: ResizeObserverEntry[]) => {
			const result = entries[0].contentRect.width < 100;
			result !== state && setState(result);
		},
		{ mode: "ref" }
	);

	return <div>
		<p>{"Has width < 100 px: " + state}</p>
		<textarea ref={ref} rows={3}></textarea>
		<br/>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
	</div>
}