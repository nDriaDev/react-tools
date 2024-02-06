export interface UseEventSourceProps {
	url?: string | URL,
	opts?: EventSourceInit,
	events?: { name: string, handler?: (evt: MessageEvent) => void }[],
	immediateConnection?: boolean,
	onOpen?: (evt: Event) => void,
	onError?: (evt: Event) => void,
	onMessage?: <T>(evt: MessageEvent<T>) => void
}

export interface UseEventSourceResult<T> {
	status: "READY" | "CONNECTING" | "OPENED" | "CLOSED";
	data: T | null,
	open: (url?: string) => void,
	close: () => void
}