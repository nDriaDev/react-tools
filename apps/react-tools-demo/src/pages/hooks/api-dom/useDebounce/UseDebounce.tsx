import { BaseSyntheticEvent, useCallback, useState } from "react"
import { useDebounce } from "../../../../../../../packages/react-tools-lib/src";

/**
The component has:
- A _state_ internal state.
- A _toggle_ internal state used to choice which function execute on the OnChange event of the input element.
- A _useDebounce_ hook that receives a function that updates _state_ variable with input element value and a delay of 1000ms. It returns the debounced function _fn_, the function to cancel debounced function execution _cancel_ and the function to immediately execute function _immediate_.
- A _useCallback_ setted as Onchange function of the input element that executes _fn_ or _immediate_ to handle onChange, by _toggle_ value.
 */
export const UseDebounce = () => {
	const [state, setState] = useState("");
	const [toggle, setToggle] = useState(true);
	const [fn, cancel, immediate] = useDebounce(
		useCallback((e: BaseSyntheticEvent) => setState(e.target.value), []),
		{
			delay: 1000
		}
	);

	const onChange = useCallback((e: BaseSyntheticEvent) => {
		toggle
			? fn(e)
			: immediate(e)
	}, [fn, immediate, toggle]);

	return (<div>
		<p>State is: {state}</p>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "center", gap: 50 }}>
			<input type="text" onChange={onChange} />
			<button onClick={cancel}>Cancel</button>
			<button onClick={() => setToggle(t => !t)}>{toggle ? "Active immediate" : "Active debounced"}</button>
		</div>
	</div>);
}