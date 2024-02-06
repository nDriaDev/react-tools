export interface UseWebWorkerFnProps<T extends (...args:unknown[]) => unknown> {
	fn: T,
	deps?: string[],
}

export interface UseWebWorkerFnResult<T extends (...args: unknown[]) => unknown> {
	(...args: Parameters<T>): Promise<ReturnType<T>>;
}