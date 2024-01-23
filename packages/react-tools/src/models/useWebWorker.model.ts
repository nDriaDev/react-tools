export interface UseWebWorkerProps {
	/**A string representing the URL of the script the worker will execute. It must obey the same-origin policy.*/
	url: string | URL;
	/**An object containing option properties that can be set when creating the object instance.*/
	options?: WorkerOptions;
	/**The message event is fired on a Worker object when the worker's parent receives a message from its worker.*/
	onMessage?: (e: MessageEvent) => void;
	/**The messageerror event is fired on a Worker object when it receives a message that can't be deserialized.*/
	onMessageError?: (e: MessageEvent) => void;
	/**The error event of the Worker interface fires when an error occurs in the worker.*/
	onError?: (e: Event) => void;
}

export interface UseWebWorkerResult {
	/**The postMessage() method of the Worker interface sends a message to the worker.*/
	send: <T>(message: T, transfer?: Transferable[] | StructuredSerializeOptions)=>void;
	/**The terminate() method of the Worker interface immediately terminates the Worker.*/
	terminate: Worker["terminate"];
}