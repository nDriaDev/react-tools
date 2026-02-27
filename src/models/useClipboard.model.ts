import { RefObject } from "react";

/**
 * Props accepted by [useClipboard](https://react-tools.ndria.dev/hooks/api-dom/useClipboard).
 */
export interface UseClipboardProps {
	/** return a value with current clipboard value or not */
	useValue: boolean;
	/** target on which delimiter handling */
	dataType: "text" | "any";
	/** data type handling. Based on it, Hook will return the functions for writing or reading text only or any type of data. */
	target?: RefObject<HTMLElement> | HTMLElement;
}

/**
 * Result returned by [useClipboard](https://react-tools.ndria.dev/hooks/api-dom/useClipboard).
 * - `[0]` — curren value.
 * - `[1]` — function to write value to the clipboard asynchronously..
 * - `[2]` — function to read value from the clipboard asynchronously. Returns the current clipboard contents.
 *
 * OR
 * - `[0]` — function to write value to the clipboard asynchronously..
 * - `[1]` — function to read value from the clipboard asynchronously. Returns the current clipboard contents.
 */
export type UseClipboardResult =
	| [
		/** Current value */
		string,
		/**
		 * Write value to the clipboard asynchronously.
		 * @param value - The value to copy to the clipboard.
		 */
		(value: string) => Promise<void>,
		/** Read value from the clipboard asynchronously. Returns the current clipboard contents. */
		() => Promise<string>
	]
	| [string | Blob | (string | Blob)[], (blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>]
	| [(text: string) => Promise<void>, () => Promise<string>]
	| [(blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>];