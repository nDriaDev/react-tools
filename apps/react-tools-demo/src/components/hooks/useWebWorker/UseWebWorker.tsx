import { useCallback, useEffect, useState } from "react";
import { useWebWorker } from "../../../../../../packages/react-tools/src"

/**
The component uses _useWebWorker_ hook to execute an heavy function in a worker to avoid burdening the main thread.
 */
export const UseWebWorker = () => {
	const [ts, setTs] = useState(Date.now());
	const [mess, setMess] = useState<string>("");

	const { send } = useWebWorker({
		url: new URL('./worker.ts', import.meta.url),
		onMessage: useCallback((e: MessageEvent) => {
			setMess(e.data.res.join(","))
		}, [])
	});

	useEffect(() => {
		const id = setInterval(() => setTs(Date.now()), 1);
		return () => clearInterval(id);
	}, []);

	return <div>
		<p>Timestamp: {ts}</p>
		<p>Result: {mess ? mess : ""}</p>
		<button
			onClick={() => {
				setMess("Pending...");
				send("heavyTask");
			}}
		>
			START
		</button>
	</div>
}