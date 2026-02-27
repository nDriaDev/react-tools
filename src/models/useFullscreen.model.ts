import { RefCallback } from "react";

/**
 * Props accepted by [useFullscreen](https://react-tools.ndria.dev/hooks/api-dom/useFullscreen).
 *
 */
export interface UseFullscreenProps {
	/**
	 * Callback function for entering fullscreen mode.
	 * Can be synchronous or asynchronous.
	 */
	onEnter?: () => void | Promise<void>;
	/**
	 * Callback function triggered when the fullscreen state changes.
	 * @param {Event} event - The native fullscreen change event.
	 */
	onChange?: (evt: Event) => void;
	/**
	 * Callback function for exiting fullscreen mode.
	 * Can be synchronous or asynchronous.
	 */
	onExit?: () => void | Promise<void>;
}
/**
 * Result tuple returned by [useFullscreen](https://react-tools.ndria.dev/hooks/api-dom/useFullscreen).
 *
 * @template T Type of the observed DOM element.
 */
export type UseFullscreenResult<T extends Element> = [
	/** `true` when the element is currently in fullscreen mode. */
	boolean,
	/** Callback ref to attach to the target element. */
	RefCallback<T>,
	/**`enter` — requests fullscreen on the attached element, calling `onEnter` first if provided. */
	(opts?: FullscreenOptions) => Promise<void>,
	/** `exit` — exits fullscreen, calling `onExit` first if provided. */
	() => Promise<void>
];