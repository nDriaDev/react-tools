import { useCallback, useEffect, useState } from "react";
import { useWebWorker } from "../../../.."

/**
The component uses _useWebWorker_ hook to execute an heavy function in a worker to avoid burdening the main thread.
 */
export const UseWebWorker = () => {
	const [ts, setTs] = useState(new Date());
	const [mess, setMess] = useState<string>("");

	const { send } = useWebWorker({
		url: new URL('./worker.ts', import.meta.url),
		onMessage: useCallback((e: MessageEvent) => {
			setMess(e.data.res.join(","))
		}, [])
	});

	useEffect(() => {
		const id = setInterval(() => setTs(new Date()), 1);
		return () => clearInterval(id);
	}, []);

	return <div>
		<p>Timestamp: {ts.toLocaleString() + "." + ts.getMilliseconds()}</p>
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