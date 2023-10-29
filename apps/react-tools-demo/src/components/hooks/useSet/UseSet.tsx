import { useCallback, useMemo, useRef } from "react";
import { useSet } from "../../../../../../packages/react-tools/src";

/**
The component has:
- A _useSet_ internal state.
- An uncontrolled input with _inputRef_ ref used to execute buttons actions.
- A button _Add_ that adds the input value into state by _add_ method of Set interface.
- A button _Delete_ that remove item into state by _key_, written in input by _delete_ method of Set interface.
- A button _Clear_ that clear state by _clear_ method of Set interface.
- A variable _parsed_ create with __useMemo__ that memoized a concatenated string of state values, separated by comma.
 */
const UseSet = () => {
	const set = useSet<string | number>();

	const inputRef = useRef<HTMLInputElement>(null);

	const del = useCallback(() => {
		set.delete(inputRef.current!.value);
	}, [set]);

	const add = useCallback(() => {
		const { value } = inputRef.current!;
		set.add(value);
	}, [set]);

	const clear = useCallback(() => {
		set.clear();
	}, [set]);

	const parsed = useMemo(() => {
		const temp: (string|number)[] = [];
		set.forEach((value) => temp.push(value));
		return temp.join(", ");
	}, [set]);

	return (<>
		{parsed}
		<br/>
		<input ref={inputRef} type="text" />
		<br />
		<div style={{ marginTop: 15, gridTemplateColumns: 'auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={add}>Add</button>
			<button onClick={del}>Delete</button>
			<button onClick={clear}>Clear</button>
		</div>
	</>);
}

UseSet.displayName = "UseSet";

export {UseSet}