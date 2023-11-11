import { useCallback, useState } from "react"
import { useThrottle } from "../../../../../../packages/react-tools/src";

/**
The component has:
- A _state_ internal with _0_ value.
- A _useThrottle_ hook that receives an async function that increments _state_ variable after 3 seconds and _waitFn_ true as option. It returns the debounced function _fn_, the function to cancel throttle limitation _cancel_ and the function _immediate_ to immediately execute function. Each function is executed by onClick event of three button elements.
 */
export const UseThrottle = () => {
	const [state, setState] = useState(0);
	const [fn, cancel, immediate] = useThrottle(
		useCallback(() => new Promise(res => setTimeout(() => res(setState(t => t + 1)), 3000)), []),
		{
			waitFn: true
		}
	);


	return (<div>
		<p>State is: {state}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<button onClick={fn}>Throttled increment</button>
			<button onClick={immediate}>Immediatly increment</button>
			<button onClick={cancel}>Cancel</button>
		</div>
	</div>);
}