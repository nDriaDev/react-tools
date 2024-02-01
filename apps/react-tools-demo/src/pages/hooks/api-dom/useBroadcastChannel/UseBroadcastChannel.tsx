import { FormEvent } from "react";
import { useBroadcastChannel } from "../../../../../../../packages/react-tools/src"

/**
The component uses _useBroadcastChannel_ hook to send a text in a broadcast channel
 */
export const UseBroadcastChannel = () => {
	const [state, setState] = useBroadcastChannel<string>("react-tools");

	return <div>
		<h2>Open page on multiple tab to see how hook work</h2>
		<p>State: {state}</p>
		<form
			onSubmit={(e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				setState(((e.target as HTMLFormElement).elements.namedItem("text") as HTMLInputElement).value)
			}}
		>
			<input name="text" type="text" />
			<button type="submit">SEND</button>
		</form>
	</div>
}