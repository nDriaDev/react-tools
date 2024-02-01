import { useState } from "react";
import { useIntersectionObserver } from "../../../../../../packages/react-tools/src"

/**
The component renders a textarea element with a ref that receives callback returned from __useIntersectionObserver__ hook. There are also two button to disconnect and reconnect observer by functions returned from hook. The textarea element is inside a div, at 400px from top, so it isn't visible. It need to scroll div to see textarea.

Hook is initialized with a callback that verifies if textarea element intersecting window amd set result into __state variable__. The __state variable__ value is displayed on screen.
 */
export const UseIntersectionObserver = () => {
	const [state, setState] = useState(false);
	const [refCb, disconnect, reconnect] = useIntersectionObserver<HTMLTextAreaElement>(
		(entries) => {
			const result = entries[0].isIntersecting;
			result !== state && setState(result);
		}
	);

	return <div>
		<p>{"Is intersected: " + state}</p>
		<div style={{ position: "relative", width: "fit-contenr", height: 200, border: '1px solid lightblue', overflow: 'auto' }}>
			<textarea ref={refCb} style={{ position: "absolute", top: 400 }} rows={3}></textarea>
		</div>
		<br/>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
	</div>
}