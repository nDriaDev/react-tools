import { useState } from "react"
import { useMutationObserver } from "../../../../../../packages/react-tools/src"

/**
The component has an ul element and two button to add and remove li childs. The __cbRef__ callback returned from _useMutationObserver_ hook is attached to ul element, so then ul childs change, the callback passed to hook update __messages__ state variable with added and removed nodes.
 */
export const UseMutationObserver = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [data, setData] = useState<string[]>([]);
	const [cbRef, disconnect, reconnect] = useMutationObserver<HTMLUListElement>(
		mutations => {
			for (const mutation of mutations) {
				const arr: string[] = [];
				mutation.addedNodes.forEach(node => arr.push(`Added node: ${node.textContent}`));
				mutation.removedNodes.forEach(node => arr.push(`Removed node: ${node.textContent}`));
				setMessages(m => m.concat(arr));
			}
		},
		{
			childList: true,
			subtree: true
		}
	)

	return <div>
		<button onClick={() => setData(d => [...d, d.length.toString()])}>ADD child</button>
		<button onClick={() => setData(d => d.filter((_, index) => index !== d.length - 1))}>Remove child</button>
		<button onClick={reconnect}>Reconnect</button>
		<button onClick={disconnect}>Disconnect</button>
		<div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: 50 }}>
			<div>
				<ul ref={cbRef}>
					{
						data.map(el => <li key={el}>Item {el}</li>)
					}
				</ul>
			</div>
			<div>
				{
					messages.map(el => <p>{el}</p>)
				}
			</div>
		</div>
	</div>
}