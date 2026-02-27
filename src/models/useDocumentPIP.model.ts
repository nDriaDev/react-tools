import { PropsWithChildren } from "react";

/**
 * Event fired when the Document Picture-in-Picture window is successfully opened.
 */
export interface DocumentPictureInPictureEvent extends Event {
	window: Window;
}

/**
 * Configuration options for the Document Picture-in-Picture window.
 */
export interface DocumentPIPOptions {
	/** Initial dimensions for the PiP window. */
	window?: {
		/** Width of the window in pixels. */
		width: number;
		/** Height of the window in pixels. */
		height: number;
	};
	/**
	 * If true, clones the parent document's stylesheets into the PiP window.
	 * Useful for maintaining consistent UI styling.
	 */
	inheritCSS?: boolean;
}

/**
 * Props accepted by [useDocumentPIP](https://react-tools.ndria.dev/hooks/api-dom/useDocumentPIP).
 */
export interface UseDocumentPIPProps {
	/** Default options to apply when opening the PiP window. */
	options?: DocumentPIPOptions,
	/** Callback triggered immediately when the opening process starts. */
	onOpen?: () => void;
	/** Callback triggered once the PiP window is open and the document is available. */
	onOpened?: (evt: DocumentPictureInPictureEvent) => void;
	/** Callback triggered when the PiP window is closed. */
	onClose?: (evt: PageTransitionEvent) => void;
	/** Callback triggered if the PiP request fails (e.g., user denial or unsupported environment). */
	onError?: (err: unknown) => void;
}

/**
 * Result returned by [useDocumentPIP](https://react-tools.ndria.dev/hooks/api-dom/useDocumentPIP).
 */
export interface UseDocumentPIPResult {
	/** Indicates if the Document Picture-in-Picture API is supported by the current browser. */
	isSupported: boolean;
	/**
	 * Opens the PiP window.
	 * @param opts - Optional overrides for the default window options.
	 * @returns A promise that resolves when the window is initialized.
	 */
	openPIP: (opts?: DocumentPIPOptions) => Promise<void>;
	/** Manually closes the active PiP window. */
	closePIP: () => void;
	/** The current PiP window instance, or undefined if no window is active. */
	window?: Window;
	/**
	 * A React component that renders its children inside the PiP window using a Portal.
	 * Returns null if the PiP window is not currently open.
	 */
	PipWindow: (props: PropsWithChildren) => JSX.Element | null;
}