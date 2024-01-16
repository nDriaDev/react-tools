export interface UseEventSourceProps {
	url: string,
	opts?: EventSourceInit,
	events?: { name: string, handler?: (evt: MessageEvent) => void }[],
	immediateConnection?: boolean,
	onOpen?: (evt: Event) => void,
	onError?: (evt: Event) => void,
	onMessage?: (evt: MessageEvent) => void
}

export interface UseEventSourceResult<T> {
	status: "READY" | "CONNECTING" | "OPENED" | "CLOSED";
	data: T | null,
	open: () => void,
	close: () => void
}