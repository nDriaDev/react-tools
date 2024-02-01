import { useState } from "react";
import { useEffectOnce, useIsMounted } from "../../../../../../packages/react-tools/src";

/**
The component has:
- A message _state_ object variable with two properties: _child1_ and _child2_.
- A show _state_ variable that shows and hides two child components by clicking on a button.
- A _Child1_ component that inside a _useEffectOnce_, `after 5 second`, update _child1_ property of _message state_ with `OK`
- A _Child2_ component that inside a _useEffectOnce_, `after 5 second` and if _isMounted_ function returns true update _child1_ property of _message state_ with `OK`

If child components are showed and hides before 5 seconds, only _Child1_ component update its message because hiding components, isMounted() returns false so _Child2_ don't update its message.
 */
const sleep = () => new Promise(res => setTimeout(res, 5000));

const Child1 = ({ setMessage }: { setMessage: React.Dispatch<React.SetStateAction<{child1: string;child2: string;}>>}) => {
	useEffectOnce(() => {
		sleep().then(()=>{setMessage(t=>({...t, child1: "OK"}))})
	})
	return <p>Child 1</p>;
}

const Child2 = ({ setMessage }: { setMessage: React.Dispatch<React.SetStateAction<{ child1: string; child2: string; }>> }) => {
	const isMounted = useIsMounted();
	useEffectOnce(() => {
		sleep().then(() => { isMounted() && setMessage(t => ({...t, child2: "OK"})) })
	})
	return <p>Child 2</p>;
}

const UseIsMounted = () => {
	const [show, setShow] = useState(true);
	const [message, setMessage] = useState({child1: "", child2: ""});
	return (
		<>
			<p>Message Child1: {message.child1}</p>
			<p>Message Child2: {message.child2}</p>
			<button type="button" onClick={() => {
				setShow(!show);
				setMessage({ child1: "", child2: "" });
			}}>
				{show ? "Hide":"Show"}
			</button>
			{
				show &&
				<div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "center", gap: 50 }}>
					<Child1 setMessage={setMessage} />
					<Child2 setMessage={setMessage} />
				</div>
			}
		</>
	);
}

UseIsMounted.displayName = "UseIsMounted";

export { UseIsMounted };