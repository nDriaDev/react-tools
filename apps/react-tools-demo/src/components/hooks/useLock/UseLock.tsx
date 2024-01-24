import { useCallback, useEffect, useState } from "react"
import { useLock } from "../../../../../../packages/react-tools/src";

/**
The component uses _useLock_ hook to simulate a buffer write by a producer and read from a consumer.
 */
export const UseLock = () => {
	const [buffer, setBuffer] = useState<number[]>([]);
	const [lock, setLock] = useState<{ held: string[], pending: string[] }>({ held: [], pending: [] });
	const [messages, setMessages] = useState<{ consumer: string[], producer: string[] }>({
		consumer: [],
		producer: []
	});
	const do_something = useCallback((mode: "read" | "write") => {
		return new Promise<void>((res) => {
			setTimeout(() => {
				if (mode === "read") {
					let el: number | undefined;
					setBuffer(b => b.filter((_, index, arr) => {
						if (index !== arr.length - 1) {
							return true;
						} else {
							el = _;
							return false;
						}
					}))
					setMessages(m => ({...m, consumer: [...m.consumer, el !== undefined ? "Consumer has read " + el : "Consumer has read nothing"]}))
				} else {
					const n = Math.floor(Math.random() * 11);
					setBuffer(b => [...b, n]);
					setMessages(m => ({ ...m, producer: [...m.producer, "Producer has written " + n] }));
				}
				res();
			}, mode === "read" ? 1600 : 2400);
		});
	}, []);

	const [createExclusiveLock, query] = useLock("resource", async () => {
		await do_something("write");
	});

	const [createSharedLock] = useLock("resource", async () => {
		await do_something("read");
	}, { mode: "shared" });

	useEffect(() => {
		const interval = setInterval(async () => {
			const n = Math.floor(Math.random() * 11);
			n > 6 ? createExclusiveLock() : createSharedLock();
		}, 700);
		return () => clearInterval(interval);
	}, [createExclusiveLock, createSharedLock]);

	useEffect(() => {
		const interval = setInterval(async () => {
			const result = await query();
			const held = (result.held || []).map(el => el.name + " - " + el.mode);
			const pending = (result.pending || []).map(el => el.name + " - " + el.mode);
			setLock({ held, pending });
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [query]);

	return <div>
		<div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "auto auto auto auto auto", justifyContent: "center", gap: 50, overflow: 'auto', maxHeight: 400 }}>
			<div style={{ overflow: 'auto', maxHeight: 400 }}>
				<h3>Producer</h3>
				{
					messages.producer.map((m, index) => <p key={index}>{m}</p>)
				}
			</div>
			<div>
				<h3>Buffer</h3>
				<p>{JSON.stringify(buffer, null, 6)}</p>
			</div>
			<div style={{ display: "grid", gridTemplateColumns: "auto", justifyContent: "center", gap: 50, overflow: 'auto', maxHeight: 400 }}>
				<div>
					<h3>Consumer </h3>
					{
						messages.consumer.map((m, index) => <p key={index}>{m}</p>)
					}
				</div>
			</div>
			<div style={{ overflow: 'auto', maxHeight: 400 }}>
				<h4>Held Lock</h4>
				{
					lock.held.map((el, index) => <p key={index}>{el}</p>)
				}
			</div>
			<div style={{ overflow: 'auto', maxHeight: 400 }}>
				<h4>Pending Lock</h4>
				{
					lock.pending.map((el, index) => <p key={index}>{el}</p>)
				}
			</div>
		</div>
	</div>
}