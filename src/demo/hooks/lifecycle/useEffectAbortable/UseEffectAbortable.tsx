import { useState } from "react";
import { useEffectAbortable } from "../../../../hooks";
import { Show } from "../../../..";

/**
The component has:
- a _state useState variable_ boolean uaws by a Show component to render the _Demo component_.
- a _data useState variable_ with value 0.
- a button that toggle _state between __false__ and __true__ value.
- a _Demo component_ that receives the update function for _data variable_. It has a _useEffectAbortable_ that hat simulates an asynchronous call during which a loading message is shown and at the end of which increment by one _date varibale_.

If you click the _mount button_ the _Demo component_ is rendering. The simulated call starts and at the end updates the _date variable_ but if the _unmount button_ is clicked before call ending, it will be canceled with the _useEffectAbortable_ and _date variable_ will not be updated.
 */
const Demo = ({ setDate }: {setDate: (cb: (n:number)=> number) => void}) => {
	const [state, setState] = useState("IDLE");

	useEffectAbortable((signal) => {
		let id = setTimeout(() => {
			setState("LOADING");
		}, 1000);
		let id1 = setTimeout(() => {
			setState("SUCCESS");
			setDate(d => d+1);
		}, 5000)
		signal.addEventListener('abort', () => {
			clearTimeout(id);
			clearTimeout(id1);
		});
	}, []);

	return <p>
		{state}
	</p>

}
const UseEffectAbortable = () => {
	const [state, setState] = useState(false);
	const [data, setData] = useState(0);

	return (<>
		<p>Current state: {state ? "MOUNT" : "UNMOUNT"}</p>
		<p>Current data: {data}</p>
		<button onClick={() => setState(t => !t)}>{state ? "Unmount" : "Mount"}</button>
		<Show when={state}>
			<Demo setDate={setData}/>
		</Show>
	</>);
};

UseEffectAbortable.displayName = "UseEffectAbortable";

export { UseEffectAbortable };