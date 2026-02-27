import { useCallback, useRef } from "react"
import { UseWebWorkerProps, UseWebWorkerResult } from "../../models";
import { useEffectOnce } from "../lifecycle";

/**
 * **`useWebWorker`**: Hook to use Web Worker, handling registration and communication.
 * @see [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useWebWorker)
 * @param {UseWebWorkerProps} param - {@link UseWebWorkerProps}
 * @returns {UseWebWorkerResult} result {@link UseWebWorkerResult}
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