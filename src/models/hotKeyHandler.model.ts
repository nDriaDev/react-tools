import { KeyboardEvent as KeyEvt } from 'react';
/**
 * Parameters accepted by [hotKeyHandler](https://react-tools.ndria.dev/utils/hotKeyHandler).
 */
export type HotKeyHandlerProps = {
	/**
	 * The keyboard shortcut string to match against incoming events. Supports
	 * the following formats:
	 * - A bare key string (e.g. `"s"`, `"Enter"`).
	 * - A single modifier combined with a key using `+` (e.g. `"ctrl+s"`).
	 * - Two modifiers combined with a key using `+` (e.g. `"ctrl+shift+z"`).
	 *
	 * Supported modifiers: `"alt"`, `"ctrl"`, `"meta"`, `"shift"`,
	 * `"ctrlCommand"` (maps to `ctrl` on Windows/Linux, `meta` on macOS).
	 */
	hotKeys:
	| `${string}`
	| `${"alt" | "ctrl" | "meta" | "shift" | "ctrlCommand"}+${string}`
	| `${"alt" | "ctrl" | "meta" | "shift" | "ctrlCommand"}+${"alt" | "ctrl" | "meta" | "shift" | "ctrlCommand"}+${string}`;

	/**
	 * The handler invoked when the configured hotkey combination is matched.
	 * Receives the triggering {@link KeyboardEvent} or {@link KeyEvt}. May
	 * return a `Promise` for async handlers.
	 */
	listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>;
};

/**
 * Return value of [hotKeyHandler](https://react-tools.ndria.dev/utils/hotKeyHandler).
 *
 * A `keydown` / `keyup` event handler that checks each incoming event against
 * the configured hotkey combination and invokes `listener` when matched.
 * Attach this to a DOM element or `window` via `addEventListener`.
 */
export type HotKeyHandlerResult = (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void;
