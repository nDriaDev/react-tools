import { useCallback, useRef } from "react";
import { UseWebWorkerFnProps, UseWebWorkerFnResult } from "../../models";
import { useEffectOnce } from "../lifecycle";

function depsParser(deps: string[]) {
	if (deps.length === 0)
		return ''

	const depsString = deps.map(dep => `'${dep}'`).toString()
	return `importScripts(${depsString})`
}

// eslint-disable-next-line @typescript-eslint/ban-types
function jobRunner(userFunc: Function) {
	return (e: MessageEvent) => {
		postMessage(['RUNNING']);
		const userFuncArgs = e.data[0]

		// eslint-disable-next-line prefer-spread
		return Promise.resolve(userFunc.apply(undefined, userFuncArgs))
			.then((result) => {
				postMessage(['SUCCESS', result])
			})
			.catch((error) => {
				postMessage(['ERROR', error])
			});
	}
}

// eslint-disable-next-line @typescript-eslint/ban-types
function createWorkerBlobUrl(fn: Function, deps?: string[]) {
	const blobCode = `${deps ? depsParser(deps)+"; ":""}onmessage=(${jobRunner})(${fn})`
	const blob = new Blob([blobCode], { type: 'text/javascript' });
	const url = URL.createObjectURL(blob);
	return url;
}

/**
 * **`useWebWorkerFn`**: Hook to run expensive functions using a Web Worker without blocking the UI handling execution as Promise. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useWebWorkerFn)
 * @param {UseWebWorkerFnProps["fn"]} fn - Expensive function to be executed in worker.
 * @param {UseWebWorkerFnProps["deps"]} [deps] - An array that contains the external dependencies needed to run the worker.
 * @returns {UseWebWorkerFnResult} execute - function to execute expansive function: return a promise.
 */
export const useWebWorkerFn = <T extends (...args: unknown[]) => unknown>(fn: UseWebWorkerFnProps<T>["fn"], deps?: UseWebWorkerFnProps<T>["deps"]): UseWebWorkerFnResult<T> => {
	const workerRef = useRef<Worker>();
	const urlWorker = useRef("");
	const statusRef = useRef("");
	const promiseRef = useRef<{resolve?:(val:ReturnType<T>)=>void, reject?:(reason:unknown)=>void}>({
		resolve: undefined,
		reject: undefined
	})

	const execute = useCallback((...args: Parameters<T>) => {
		const promise = new Promise<ReturnType<T>>((resolve, reject) => {
			promiseRef.current = {
				resolve,
				reject
			}
		});
		if (statusRef.current === "RUNNING") {
			return Promise.reject(Error("Fn Worker alreay running."));
		} else {
			workerRef.current?.postMessage([[...args]]);
		}
		return promise;
	}, []);

	useEffectOnce(() => {
		urlWorker.current = createWorkerBlobUrl(fn, deps);
		workerRef.current = new Worker(urlWorker.current);
		workerRef.current.onmessage = (e: MessageEvent) => {
			const [status, result] = e.data;
			statusRef.current = status;
			if (status === "RUNNING") {
				return;
			} else if (status === "SUCCESS") {
				!!promiseRef.current.resolve && promiseRef.current.resolve(result);
			} else {
				!!promiseRef.current.reject && promiseRef.current.reject(result);
			}
		}
		workerRef.current.onmessageerror = (e: MessageEvent) => {
			!!promiseRef.current.reject && promiseRef.current.reject(e.data);
		}
		workerRef.current.onerror = (e: Event) => {
			!!promiseRef.current.reject && promiseRef.current.reject(e);
		}

		return () => {
			URL.revokeObjectURL(urlWorker.current);
			workerRef.current?.terminate();
			workerRef.current = undefined;
			urlWorker.current = "";
		}
	})
	return execute;
}