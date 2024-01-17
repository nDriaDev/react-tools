import { TypedArray } from ".";

export interface UseWebSocketProps {
	url?: string | URL;
	protocols?: string | string[];
	binaryType?: "blob" | "arraybuffer";
	immediateConnection?: boolean;
	onOpen?: (evt:Event)=>void;
	onMessage?: <T = string | ArrayBuffer | Blob>(evt: MessageEvent<T>)=>void;
	onError?: (evt: Event)=>void;
	onClose?: (evt: CloseEvent) => void;
	bufferingData?: boolean;
	autoReconnect?: boolean | { retries: number, delay: number, onFailed?: () => void };
}

export interface UseWebSocketResult<T = string | ArrayBuffer | Blob> {
	status: "READY" | "CONNECTING" | "OPENED" | "CLOSED";
	data: T | null;
	open: (url?: string | URL) => void;
	send: (data: string | ArrayBuffer | Blob | TypedArray) => void;
	close: (code?: number, reason?: string) => void;
}