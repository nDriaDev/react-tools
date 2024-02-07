import { BaseSyntheticEvent, useCallback, useRef, useState } from "react"
import { useEventDispatcher, useEventListener } from "../../../../../../../packages/react-tools-lib/src"

/**
The component has:
- A state variable.
- An _inputRef_ ref variable attacched to an input element contained in a form.
- An dispatch function returned from _useEventDispatcher_ with _inputRef_ as element.
- An onSubmit function to handle form onSubmit that invokes _dispatch_ function with a CustomEvent("demo") which detail is valued with input value taken from onSubmit event.
- A useEventListener of type _demo_, on element _inputRef_ and with a listener that takes CustomEvent and invokes setState with event detail.
 */
export const UseEventDispatcher = () => {
	const [state, setState] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useEventDispatcher(inputRef);

	const onSubmit = useCallback((e: BaseSyntheticEvent) => {
		dispatch(new CustomEvent("demo", { detail: e.target[0].value }));
		e.preventDefault();
	}, [dispatch]);

	useEventListener({
		type: "demo",
		element: inputRef,
		listener: (evt: CustomEvent) => {
			setState((evt as CustomEvent<string>).detail);
		},
	});

	return (<>
		<em>State is: </em> {state}
		<br />
		<form noValidate onSubmit={onSubmit}>
			<input type="text" ref={inputRef}/>
		</form>
	</>)

}