import { TDisplayMediaStreamOptions } from "./useMediaDevices.model";

/**
 * Result tuple returned by [useDisplayMedia](https://react-tools.ndria.dev/hooks/api-dom/useDisplayMedia).
 *
 */
export type UseDisplayMediaResult = [
	/** The active display capture stream. `undefined` before `start()` is called or after `stop()`. */
	MediaStream | undefined,
	/** `start` — opens the display-capture picker and starts the stream. */
	(options?: TDisplayMediaStreamOptions) => Promise<void>,
	/** `stop` — stops all tracks and releases the stream. */
	() => void
];