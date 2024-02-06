import { useCallback, useRef } from "react"
import { UseWebWorkerProps, UseWebWorkerResult } from "../../models";
import { useEffectOnce } from "../lifecycle";

/**
 * **`useWebWorker`**: Hook to use [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), handling registration and communication. [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useWebWorker)
 * @param {UseWebWorkerProps} param - object
 * @param {string|URL} [param.url] - A string representing the URL of the script the worker will execute. It must obey the same-origin policy.
 * @param {WorkerOptions} [param.options] - An object containing option properties that can be set when creating the object instance.
 * @param {(e: MessageEvent)=>void} [param.onMessage] - function that will be executed when a message occurred.
 * @param {(e: MessageEvent)=>void} [param.onMessageError] - function that will be executed when a messageError occurred.
 * @param {(e: Event)=>void} [param.onError] - function that will be executed when an error occurred.
 * @returns {UseWebWorkerResult} result
 * Object with these properties:
 * - __send__: function to send a message to worker.
 * - __terminate__: function to terminate worker.
 */
export const useWebWorker = ({ url, options, onMessage, onError, onMessageError }: UseWebWorkerProps): UseWebWorkerResult => {
	const worker = useRef<Worker>();

	const send: UseWebWorkerResult["send"] = useCallback(<T>(message: T, transfer?: Transferable[] | StructuredSerializeOptions) => {
		if (Array.isArray(transfer)) {
			worker.current?.postMessage(message, transfer);
		} else {
			worker.current?.postMessage(message, transfer);
		}
	}, []);

	const terminate = useCallback(() => {
		worker.current?.terminate();
		worker.current = undefined;
	}, []);

	useEffectOnce(() => {
		const path = url instanceof URL ? url : new URL(url, import.meta.url);
		worker.current = new Worker(path, options);
		worker.current.onerror = (e: Event) => {
			!!onError && onError(e);
		}
		worker.current.onmessageerror = (e: MessageEvent) => {
			!!onMessageError && onMessageError(e);
		}
		worker.current.onmessage = (e: MessageEvent) => {
			!!onMessage && onMessage(e);
		}
		return () => {
			worker.current?.terminate();
			worker.current = undefined;
		}
	})

	return {
		send,
		terminate
	}
}