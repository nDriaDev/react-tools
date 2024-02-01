import { useEffect, useState } from "react";
import { useEffectCompare } from '../../../../../../packages/react-tools/src';

/**
The component has:
- a _state useState variable_ with _id_ and _name_ properties.
- a _messages useState variable_ with _effect_ and _effectCompare_ properties that are rendered.
- a _useEffect_ that update _messages effect property_ when _state_ change.
- a _useEffectCompare_ that update _messages effect property_. CompareFn returns true when _state name property_ change.
- a button with a function attached to onClick event that increment _state id property_.

Since compareFn compares only _name property_, useEffectCompare is reexecuted only once and its state value isn't updated. You can see this in dev tool console also.
 */
const UseEffectCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });
	const [messages, setMessages] = useState({ effect: "", effectCompare: "" });

	useEffect(() => {
		console.log("useEffect execution..");
		setMessages(m => ({ ...m, effect: `useEffect --> Current state is: id: ${state.id} - name: ${state.name}` }));
		return () => {
			console.log("useEffect clean up execution..");
			setMessages(m => ({ ...m, effect: "" }));
		}
	}, [state]);

	useEffectCompare(
		() => {
			console.log("useEffectCompare execution..");
			setMessages(m => ({ ...m, effectCompare: `useEffectCompare --> Current state is: id: ${state.id} - name: ${state.name}` }));
			return () => {
				console.log("useEffectCompare clean up execution..");
				setMessages(m => ({ ...m, effectCompare: "" }));
			}
		},
		[state],
		(oldDeps, newDeps) => oldDeps[0].name !== newDeps[0].name
	);


	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		<p>{messages.effect}</p>
		<p>{messages.effectCompare}</p>
		<button onClick={() => setState(t=> ({ ...t, id: t.id+1 }))}>Increment</button>
	</>);
};

UseEffectCompare.displayName = "UseEffectCompare";

export { UseEffectCompare };