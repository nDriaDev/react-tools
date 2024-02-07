import { useMemo, useState } from "react";
import { useMemoCompare } from "../../../../../../../packages/react-tools-lib/src";

/**
The component has:
- a _state useState variable_ with _id_ and _name_ properties.
- a _message useState variable_ that's a string rendered in a tag p.
- a _useCallback_ function that update _message variable_ with _state variable_ values.
- a _useCallbackCompare_ function that update _message variable_ with _state variable_ values and a compare function that checks if name property of state change.
- a button with a function attached to onClick event that increment _state id property_.
- a button with a _useCallback_ function attached to onClick event.
- a button with a _useCallbackCompare_ function attached to onClick event.

Since compare function compares only _name property_, useCallbackCompare don't update its state value and set always same message.
 */
const UseMemoCompare = () => {
	const [state, setState] = useState({ id: 0, name: "state" });

	const defaultMemo = useMemo(() => {
		console.log("Render defaultMemo");
		return <p>useMemo: id:{state.id} - name:{state.name}</p>
	}, [state]);

	const memoCompare = useMemoCompare(
		() => {
			console.log("Render memoCompare");
			return <p>useMemoCompare: id:{state.id} - name:{state.name}</p>
		},
		[state],
		(oldDeps, newDeps) => oldDeps[0].name !== newDeps[0].name
	);

	return (<>
		<p>Current state: id: {state.id} - name: {state.name}</p>
		{defaultMemo}
		{memoCompare}
		<button onClick={() => setState(t => ({ ...t, id: t.id + 1 }))}>Increment</button>
	</>);
};

UseMemoCompare.displayName = "UseMemoCompare";

export { UseMemoCompare };