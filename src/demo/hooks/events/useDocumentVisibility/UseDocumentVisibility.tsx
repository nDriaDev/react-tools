import { useEffect, useState } from "react";
import { useDocumentVisibility } from "../../../.."

/**
The component tracks every document visibility status change and display them on screen with date they taking place. Minimize window or change tab to show them.
 */
export const UseDocumentVisibility = () => {
	const status = useDocumentVisibility();
	const [messages, setMessages] = useState <{ status: DocumentVisibilityState, date: string }[]>([]);

	useEffect(() => {
		setMessages(m => ([...m, {status: status, date: new Date().toLocaleTimeString()}]))
	}, [status])

	return (<div>
		<h3>Status:</h3>
		{
			messages.map(el => (
				<p key={el.date}>{el.date}: {el.status}</p>
			))
		}
	</div>);
}