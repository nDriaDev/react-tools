# useWebWorker
Hook to use [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), handling registration and communication. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useWebWorker)

## Usage

```tsx
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
```

> The component uses _useWebWorker_ hook to execute an heavy function in a worker to avoid burdening the main thread.


## API

```tsx
useWebWorker({ url, options, onMessage, onError, onMessageError }: UseWebWorkerProps): UseWebWorkerResult
```

> ### Params
>
> - __param__: _UseWebWorkerProps_  
object
> - __param.url?__: _string|URL_  
A string representing the URL of the script the worker will execute. It must obey the same-origin policy.
> - __param.options?__: _WorkerOptions_  
An object containing option properties that can be set when creating the object instance.
> - __param.onMessage?__: _(e: MessageEvent)=>void_  
function that will be executed when a message occurred.
> - __param.onMessageError?__: _(e: MessageEvent)=>void_  
function that will be executed when a messageError occurred.
> - __param.onError?__: _(e: Event)=>void_  
function that will be executed when an error occurred.
>

> ### Returns
>
> __result__:  _UseWebWorkerResult_  
> Object with these properties:
> - __send__: function to send a message to worker.
> - __terminate__: function to terminate worker.
>