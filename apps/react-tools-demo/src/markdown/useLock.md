# useLock
Hook to use [Web Locks API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API).

## Usage

```tsx
export const UseLock = () => {
	const [buffer, setBuffer] = useState<number[]>([]);
	const [lock, setLock] = useState<{ held: string[], pending: string[] }>({ held: [], pending: [] });
	const [messages, setMessages] = useState<{ reader: string[], writer: string[] }>({
		reader: [],
		writer: []
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
					setMessages(m => ({...m, reader: [...m.reader, el !== undefined ? "Reader has read " + el : "Reader has read nothing"]}))
				} else {
					const n = Math.floor(Math.random() * 11);
					setBuffer(b => [...b, n]);
					setMessages(m => ({ ...m, writer: [...m.writer, "Writer has written " + n] }));
				}
				res();
			}, mode === "read" ? 1000 : 2500);
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
			n % 2 === 0 ? createExclusiveLock() : createSharedLock();
		}, 500);
		return () => clearInterval(interval);
	}, [createExclusiveLock, createSharedLock]);

	useEffect(() => {
		const interval = setInterval(async () => {
			const result = await query();
			const held = (result.held || []).map(el => el.name + " - " + el.mode);
			const pending = (result.pending || []).map(el => el.name + " - " + el.mode);
			setLock({ held, pending });
		})
		return () => {
			clearInterval(interval)
		}
	}, [query]);

	return <div>
		<div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "auto auto auto auto", justifyContent: "center", gap: 50, overflow: 'auto', maxHeight: 400 }}>
			<div style={{ overflow: 'auto', maxHeight: 400 }}>
				<h3>Writer</h3>
				{
					messages.writer.map((m, index) => <p key={index}>{m}</p>)
				}
			</div>
			<div>
				<h3>Buffer</h3>
				<p>{JSON.stringify(buffer, null, 6)}</p>
			</div>
			<div style={{ display: "grid", gridTemplateColumns: "auto", justifyContent: "center", gap: 50, overflow: 'auto', maxHeight: 400 }}>
				<div>
					<h3>Reader </h3>
					{
						messages.reader.map((m, index) => <p key={index}>{m}</p>)
					}
				</div>
			</div>
			<div style={{ display: "grid", gridTemplateRows: "auto auto", justifyContent: "center", gap: 50, overflow: 'auto', maxHeight: 400 }}>
				<div>
					<h4>Held Lock</h4>
					{
						lock.held.map((el, index) => <p key={index}>{el}</p>)
					}
				</div>
				<div>
					<h4>Pending Lock</h4>
					{
						lock.pending.map((el, index) => <p key={index}>{el}</p>)
					}
				</div>
			</div>
		</div>
	</div>
}
```

> The component uses _useLock_ hook to simulate a buffer write by a writer and read from a reader.


## API

```tsx
useLock<T>(name?: string, cb?: LockGrantedCallback, opts?: LockOptions): [(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>, () => Promise<LockManagerSnapshot>]
```

> ### Params
>
> - __name?__: _string_  
an identifier for the lock.
> - __options?__: _LockGrantedCallback | LockOptions_  
an object describing characteristics of the lock.
> - __callback?__: _LockGrantedCallback_  
method called when the lock is granted.
>

> ### Returns
>
> __result__:  __Array__:  
    - _<T>(currName?: string, currCb?: LockGrantedCallback, currOpts?: LockOptions) => Promise<T>_  
    - _() => Promise<LockManagerSnapshot>_  
> Array with two element:
> - first element: __acquire__ function that requests a Lock object with parameters specified in hook invocation or passed to this function. The requested Lock is passed to the callback specified in hook or passed to this function. It returns a Promise that resolves (or rejects) with the result of the callback after the lock is released, or rejects if the request is aborted.
> - second element: __query__ function that returns a Promise that resolves with an object containing information about held and pending locks.
>