import { RefCallback } from "react";

export interface UseRemotePlaybackProps {
	onConnecting?:(evt:Event) => void;
	onConnect?:(evt:Event) => void;
	onDisconnect?: (evt: Event) => void;
	onError?: (err: unknown) => void;
}

export interface UseRemotePlaybackResult<T extends HTMLMediaElement> {
	ref: RefCallback<T>;
	isSupported: boolean;
	state: "unavailable" | "connected" | "connecting" | "disconnected";
	prompt: () => Promise<void>,
}
