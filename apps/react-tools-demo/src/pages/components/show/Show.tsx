import { useReducer } from "react";
import { Show } from "../../../../../../packages/react-tools-lib/src";

/**
The component has a state boolean variable _show_ updated by a button element and uses _Show_ generic component to conditional render a p element. If _show_ is true, a _p element_ with __Shown__ text value is shown otherwise is shown a _p element_ with __Hidden__ text value.
 */
export default function ShowComponent() {
	const [show, setShow] = useReducer(t => !t, false);

	return <>
		<button onClick={setShow}>{show ? "hide" : "show"}</button>
		<Show when={show} fallback={<p>hidden</p>}>
			<p>Shown</p>
		</Show>
	</>
}