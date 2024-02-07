import { useState } from "react";
import { useLogger } from "../../../../../../../packages/react-tools-lib/src";

/**
The component uses _useLogger_ hook to trace component state in lifecycle events.
 */
const Counter = (props: {init: number}) => {
	const [state, setState] = useState<number>(props.init);
	useLogger("Counter", { state, props });

	return (<>
		<p>Counter is: {state}</p>
		<button type="button" onClick={() => setState(t => t + 1)}>Increment</button>
		<button type="button" onClick={() => setState(t => t - 1)}>Decrement</button>
	</>);
}
export const UseLogger = () => {
	const [state, setState] = useState(0);
	return <>
		<button type="button" onClick={() => setState(t => t + 1)}>Increment</button>
		<br/>
		<Counter init={state}/>
	</>
}