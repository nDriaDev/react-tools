import { useCallback, useRef } from "react";
import { useArray } from "../../../..";

/**
The component has:
- A _useArray_ internal state.
- An uncontrolled input with _inputRef_ ref used to execute buttons actions.
- A button _Push_ that push the input value into state by _push_ method of Array interface.
- A button _Pop_ that remove last item into state by _pop_ method of Array interface.
 */
const UseArray = () => {
	const array = useArray<string>();

	const inputRef = useRef<HTMLInputElement>(null);

	const pop = useCallback(() => {
		array.pop();
	}, [array]);

	const push = useCallback(() => {
		array.push(inputRef.current!.value);
	}, [array]);

	return (<>
		{array.join(",")}
		<br />
		<input ref={inputRef} type="text" />
		<br />
		<div style={{ marginTop: 15, gridTemplateColumns: 'auto auto', justifyContent: 'center', display: 'grid', gap: '5px' }}>
			<button onClick={push}>Push</button>
			<button onClick={pop}>Pop</button>
		</div>
	</>);
}

UseArray.displayName = "UseArray";

export { UseArray }