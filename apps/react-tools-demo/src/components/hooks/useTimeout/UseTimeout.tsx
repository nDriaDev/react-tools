import { useState } from "react"
import { useTimeout } from "../../../../../../packages/react-tools/src";

/**
The component has:
- A _count_ state initialized to _0_.
- A _delay_ state initialized to _1000_.
- A _useTimeout_ that receives a _callback_ to update _count_ by 1 and _delay_ as time to delay execution.
- Two p tag to diplay current _count_ and _delay_ variable.
- A button to execute _apply_ function returned from _useTimeout_.
- A button to increment by 1000 _delay_ state.
- A button to restore _delay_ state to 1000.
- A button to execute _clear_ function returned from _useTimeout_.
- A button to execute _applyPromisy_ function returned from _useTimeout_ tha after _count_ state update, restore _delay_ state to 1000.
 */
export const UseTimeout = () => {
	const [count, setCount] = useState(0);
	const [delay, setDelay] = useState(1000);
	const [apply, clear, applyPromisy] = useTimeout(
		() => setCount(c => c + 1),
		delay
	)

	return (
		<div style={{ display: "grid", gridTemplateRows: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<p>Count: {count}</p>
			<p>Delay: {delay}</p>
			<div style={{ display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
				<button onClick={apply}>Increment count</button>
				<button onClick={clear}>Clear Timeout</button>
				<button onClick={async()=>applyPromisy().then(()=>setDelay(1000))}>Increment promisy</button>
				<button onClick={() => setDelay(d => d + 1000)}>Increment delay</button>
				<button onClick={() => setDelay(() => 1000)}>Clear delay</button>
			</div>
		</div>
	);
}