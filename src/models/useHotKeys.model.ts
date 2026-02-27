import { KeyboardEvent as KeyEvt, RefObject } from "react";

/**
 * Parameters accepted by [useHotKeys](https://react-tools.ndria.dev/hooks/events/useHotKeys).
 */
export type UseHotKeysProps = {
	/**
	 * The keyboard shortcut string to listen for. Supports the following formats:
	 * - A bare key string (e.g. `"s"`, `"Enter"`).
	 * - A single modifier combined with a key using `+` (e.g. `"ctrl+s"`).
	 * - Two modifiers combined with a key using `+` (e.g. `"ctrl+shift+z"`).
	 *
	 * Supported modifiers: `"alt"`, `"ctrl"`, `"meta"`, `"shift"`, `"ctrlCommand"`
	 * (maps to `ctrl` on Windows/Linux and `meta` on macOS).
	 */
	hotKey:
	| `${string}`
	| `${"alt" | "ctrl" | "meta" | "shift" | "ctrlCommand"}+${string}`
	| `${"alt" | "ctrl" | "meta" | "shift" | "ctrlCommand"}+${"alt" | "ctrl" | "meta" | "shift" | "ctrlCommand"}+${string}`;

	/**
	 * The keyboard event type to listen for.
	 * - **`"keydown"`** *(default)* — Fires when the key is pressed.
	 * - **`"keyup"`** — Fires when the key is released.
	 */
	type?: "keydown" | "keyup";

	/**
	 * The target on which the keyboard event listener is registered. Accepts either
	 * a React `RefObject<HTMLElement>` or a direct `Window` reference.
	 * Defaults to `window` when omitted.
	 */
	target?: RefObject<HTMLElement> | Window;

	/**
	 * Callback invoked when the configured hotkey combination is detected. Receives
	 * the native {@link KeyboardEvent} or a {@link KeyEvt} for element-scoped targets.
	 * May return a `Promise` for async handlers.
	 */
	listener: (evt: KeyboardEvent | KeyEvt<HTMLElement>) => void | Promise<void>;

	/**
	 * Options forwarded to `addEventListener` as the third argument. Accepts either
	 * a boolean shorthand for `capture` or a full {@link AddEventListenerOptions}
	 * object. When omitted, the listener is registered with the browser defaults.
	 */
	listenerOpts?: boolean | AddEventListenerOptions;
};

/**
 * Return value of [useHotKeys](https://react-tools.ndria.dev/hooks/events/useHotKeys).
 *
 * A stable cleanup function that manually removes the keyboard event listener from
 * the target. Calling it is optional — the hook cleans up automatically on unmount
 * — but useful to detach the listener earlier on demand.
 */
export type UseHotKeysResult = () => void;