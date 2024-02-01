import { useCallback, useEffect, useState } from "react";
import { useWebWorkerFn } from "../../../../../../../packages/react-tools/src";

/**
The component uses _useWebWorkerFn_ hook to execute an expensive function in a worker. Same function can be executed in main thread. Try to execute it to see the differences.
 */
export const UseWebWorkerFn = () => {
	const [ts, setTs] = useState(Date.now());
	const [mess, setMess] = useState<string>("");
	const heavyTask = useCallback(() => {
		const numbers: number[] = Array(5_000_000).fill(true).map(() => Math.random() * 11)
		return numbers.slice(0, 5).map(el => Math.floor(el))
	}, []);
	const execute = useWebWorkerFn(heavyTask);

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
				setMess(heavyTask().join(","))
			}}
		>
			Start in Main Thread
		</button>
		<button
			onClick={() => {
				setMess("Pending...");
				execute().then(res => setMess(res.join(",")));
			}}
		>
			Start in Web Worker
		</button>
	</div>
}