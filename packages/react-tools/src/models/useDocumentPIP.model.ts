import { PropsWithChildren } from "react";

export interface DocumentPictureInPictureEvent extends Event {
	window: Window;
}

export interface DocumentPIPOptions {
	window?: {
		width: number;
		height: number;
	};
	inheritCSS?: boolean;
}

export interface UseDocumentPIPProps {
	options?: DocumentPIPOptions,
	onOpen?: () => void;
	onOpened?: (evt: DocumentPictureInPictureEvent) => void;
	onClose?: (evt: PageTransitionEvent) => void;
	onError?: (err: unknown) => void;
}

export interface UseDocumentPIPResult {
	isSupported: boolean;
	openPIP: (opts?: DocumentPIPOptions) => Promise<void>;
	closePIP: () => void;
	window?: Window;
	PipWindow: (props: PropsWithChildren) => JSX.Element | null;
}