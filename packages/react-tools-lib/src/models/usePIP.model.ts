import { RefObject } from "react";

export interface UsePIPProps {
	target: RefObject<HTMLVideoElement> | HTMLVideoElement;
	onOpen?: (evt: Event) => void;
	onOpened?: (pipWindow: PictureInPictureWindow) => void,
	onClose?: (evt: PictureInPictureEvent) => void;
	onError?: (err: unknown) => void;
}

export interface UsePIPResult {
	isSupported: boolean;
	openPIP: () => Promise<void>;
	closePIP: () => Promise<void>;
}