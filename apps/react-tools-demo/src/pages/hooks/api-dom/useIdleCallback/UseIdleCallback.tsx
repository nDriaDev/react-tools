import { useState } from "react"
import { useIdleCallback } from "../../../../../../../packages/react-tools-lib/src";


/**
The component has:
- a __iterations__ variable of type string.
- a __log__ variable of type string.
- a function __invoke__ returned from _useIdleCallback_ hook, initialized with a cb that update __log__ variable with message _"RequestIdleCallback executed"_.
- a button start that when clicked executes __start__ function that executes __invoke__ function and updates __iterations__ variable inside a loop with iteration index.
 */
export const UseIdleCallback = () => {
	const [iterations, setIterations] = useState(0);
	const [log, setLog] = useState("");
	const [invoke] = useIdleCallback(() => setLog("RequestIdleCallback executed"));

	const start = async() => {
		invoke();
		for (let i = 0; i < 5_000; i++) {
			setTimeout(() => setIterations(i + 1), 5);
		}
	}
	const reset = () => {
		setLog("");
		setIterations(0);
	}
	return (<div>
		<p>Iterations are: {iterations}</p>
		<p>Log is: {log}</p>
		<button onClick={start}>START</button>
		<button onClick={reset}>RESET</button>
	</div>);
}