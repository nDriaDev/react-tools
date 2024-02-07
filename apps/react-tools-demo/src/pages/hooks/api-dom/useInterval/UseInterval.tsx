import { useState } from "react"
import { useInterval } from "../../../../../../../packages/react-tools-lib/src";

/**
The component has:
- A _count_ state initialized to _0_.
- A _interval_ state initialized to _1000_.
- A _useInterval_ that receives a _callback_ to update _count_ by 1 and _interval_ as time to interval execution.
- Two p tag to diplay current _count_ and _interval_ variable.
- A button to execute _apply_ function returned from _useInterval_.
- A button to increment by 1000 _interval_ state.
- A button to restore _interval_ state to 1000.
- A button to execute _clear_ function returned from _useInterval_.
- A button to execute _applyPromisy_ function returned from _useInterval_ tha after _count_ state update, restore _interval_ state to 1000.
 */
export const UseInterval = () => {
	const [count, setCount] = useState(0);
	const [interval, setInterval] = useState(1000);
	const [apply, clear, applyPromisy] = useInterval(
		() => setCount(c => c + 1),
		interval
	)

	return (
		<div style={{ display: "grid", gridTemplateRows: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<p>Count: {count}</p>
			<p>interval: {interval}</p>
			<div style={{ display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
				<button onClick={apply}>Increment count</button>
				<button onClick={clear}>Clear Interval</button>
				<button onClick={async()=>applyPromisy().then(()=>setInterval(1000))}>Increment promisy</button>
				<button onClick={() => setInterval(d => d + 1000)}>Increment interval</button>
				<button onClick={() => setInterval(() => 1000)}>Clear interval</button>
			</div>
		</div>
	);
}