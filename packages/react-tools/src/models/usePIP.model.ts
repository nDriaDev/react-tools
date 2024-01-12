import { RefObject } from "react";

export interface UsePIPProps {
	target: RefObject<HTMLVideoElement> | HTMLVideoElement;
	onOpen?: () => void;
	onOpened?: (pipWindow: PictureInPictureWindow) => void,
	onClosed?: () => void;
	onError?: (err: unknown) => void;
}

export interface UsePIPResult {
	isSupported: boolean;
	openPIP: () => Promise<void>;
	closePIP: () => Promise<void>;
}