import { useCallback, useState } from "react";
import { useDocumentPIP } from "../../../../../../../packages/react-tools/src";

/**
The component uses _useDocumentPIP_ hook to show in a separate window the counter showed renderes by the component.
 */
export const UseDocumentPIP = () => {
	const [show, setShow] = useState(true);
	const [c, setC] = useState(0);
	const { isSupported, openPIP, PipWindow, closePIP } = useDocumentPIP({
		onOpened: useCallback(() => setShow(false), []),
		onClose: useCallback(() => setShow(true), [])
	});

	return <div>
		<p>Window Counter</p>
		<button onClick={() => setC(c => c + 1)}>{c}</button>
		<p>Supported: {isSupported ? 'Yes' : 'No'}</p>
		{
			show &&
			<>
				<div>
					<button
						onClick={() => openPIP({
							inheritCSS: true
						})}
					>
						Open PIP
					</button>
				</div>
			</>
		}
		<PipWindow>
			<div style={{display: 'flex', flexDirection: "column", alignItems: "center", width: "100%", gap: 20}}>
				<h4 style={{textAlign: "center"}}>PIP Window Counter</h4>
				<button onClick={() => setC(c => c + 1)}>{c}</button>
				<button onClick={closePIP}>Close</button>
			</div>
		</PipWindow>
	</div>
}