import { useState } from "react";
import { useDialogBox } from "../../../.."

/**
The component renders three button that execute three _useDialogBox_ hook with a __type__ for each one.
 */
export const UseDialogBox = () => {
	const [response, setResponse] = useState("");
	const openPrompt = useDialogBox("prompt");
	const openAlert = useDialogBox("alert");
	const openConfirm = useDialogBox("confirm");

	return <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
		<p>Response: {response}</p>
		<div style={{ display: 'flex', gap: 10, justifyContent: "center" }}>
			<button
				onClick={() => {
					const resp = openPrompt("Are you open a prompt?");
					setResponse(resp!);
				}}
			>
				Open Prompt
			</button>
			<button
				onClick={() => {
					openAlert("You open a alert");
				}}
			>
				Open Alert
			</button>
			<button
				onClick={() => {
					const resp = openConfirm("You open a confirm. it's ok?");
					setResponse(resp ? "ok" : "ko");
				}}
			>
				Open Confirm
			</button>
		</div>
	</div>
}