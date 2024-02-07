import { useState } from "react";
import { useHotKeys } from "../../../../../../../packages/react-tools-lib/src"

/**
The component uses _useHotKeys_ hook to print a message on _ctrl+shift+a_, _ctrlCommand+p_ and _ctrlCommand+a_ keys combinations and clear message when _Escape_ is pressed.
 */
export const UseHotKeys = () => {
	const [state, setState] = useState("");
	useHotKeys({
		hotKey: "ctrl+shift+b",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrl+shift+b")
		}
	});
	useHotKeys({
		hotKey: "ctrlCommand++",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrlCommand++")
		}
	});
	useHotKeys({
		hotKey: "ctrlCommand+a",
		listener: (evt) => {
			evt.preventDefault();
			setState("ctrlCommand+a")
		}
	});
	useHotKeys({
		hotKey: "Escape",
		listener: (evt) => {
			evt.preventDefault();
			setState("")
		}
	});

	return <>
		<p>Message: {state ? <><strong style={{color: "darkcyan"}}>{state}</strong> pressed.</>: ""}</p>
	</>
}