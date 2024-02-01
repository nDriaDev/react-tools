import { useEffect, useState } from "react";
import { useEffectOnce } from "../../../../../../../packages/react-tools/src";

/**
The component has:
- a _Child1_ component with a _messages useState variable_ and _useEffect_ that sets a message for effect and clean up executions.
- a _Child2_ component with a _messages useState variable_ and _useEffectOnce_ that sets a message for effect and clean up executions.

Since _React 18 StrictMode_ executes effects twice (mount - unmount - mount), the _useEffect_ will print _run effect_ message twice, _useEffectOnce_ no.
 */
const Child1 = () => {
	const [messages, setMessages] = useState<string[]>([]);

	useEffect(() => {
		setMessages(m => ([...m, "run effect"]));
		return () => {
			setMessages(m => ([...m, "run clean up function effect"]));
		}
	}, []);
	return (<div>
		<p><strong>UseEffect</strong></p>
		{messages.map((mess, index) => <p key={index}>{mess}</p>)}
	</div>);
}

const Child2 = () => {
	const [messages, setMessages] = useState<string[]>([]);

	useEffectOnce(() => {
		setMessages(m => ([...m, "run effect"]));
		return () => {
			setMessages(m => ([...m, "run clean up function effect"]));
		}
	});

	return (<div>
		<p><strong>UseEffectOnce</strong></p>
		{messages.map((mess, index) => <p key={index}>{mess}</p>)}
	</div>);
}

const UseEffectOnce = () => {
	return (
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
			<Child1 />
			<Child2 />
		</div>
	);
};

UseEffectOnce.displayName = "UseEffectOnce";

export { UseEffectOnce };