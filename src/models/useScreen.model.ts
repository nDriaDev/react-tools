/**
 * Detailed information about a single screen, extending the standard `Screen` interface
 * with additional properties available via the Window Management API.
 */
export interface ScreenDetail extends Omit<Screen, "orientation"> {
	/**
	 * X-coordinate (left edge) of the available screen area — the area not occupied by
	 * the OS taskbar or dock. `undefined` when not available.
	 */
	readonly availLeft: number | undefined;
	/**
	 * Y-coordinate (top edge) of the available screen area.
	 * `undefined` when not available.
	 */
	readonly availTop: number | undefined;
	/**
	 * Ratio of physical pixels to CSS pixels for this screen.
	 * Higher values indicate high-DPI / Retina displays.
	 * `undefined` when not available via the Window Management API.
	 */
	readonly devicePixelRatio: number | undefined;
	/**
	 * `true` when this is a built-in screen (e.g. laptop display).
	 * `false` for external monitors. `undefined` when not available.
	 */
	readonly isInternal: boolean | undefined;
	/**
	 * `true` when this is the operating system's primary/main screen.
	 * `undefined` when not available via the Window Management API.
	 */
	readonly isPrimary: boolean | undefined;
	/**
	 * Human-readable label for the screen as reported by the OS
	 * (e.g. `"Built-in Retina Display"`, `"LG UltraWide"`).
	 * `undefined` when not available.
	 */
	readonly label: string | undefined;
	/**
	 * X-coordinate (left edge) of the total screen area in the multi-screen coordinate space.
	 * `undefined` when the Window Management API is not available.
	 */
	readonly left: number | undefined;
	/**
	 * Y-coordinate (top edge) of the total screen area in the multi-screen coordinate space.
	 * `undefined` when the Window Management API is not available.
	 */
	readonly top: number | undefined;
	/** Current orientation of the screen, including type and angle. */
	readonly orientation: {
		/**
		 * Current orientation type.
		 * One of `"portrait-primary"`, `"portrait-secondary"`,
		 * `"landscape-primary"`, or `"landscape-secondary"`.
		 */
		type: OrientationType;
		/**
		 * Current orientation angle in degrees (`0`, `90`, `180`, or `270`).
		 * `0` corresponds to the natural orientation of the device.
		 */
		angle: number;
	};
}

/**
 * Aggregated screen information returned by [useScreen](https://react-tools.ndria.dev/hooks/events/useScreen).
 */
export interface ScreenDetails {
	/** Details of the screen currently displaying the browser window. */
	readonly currentScreen: ScreenDetail;
	/**
	 * Details of all screens connected to the device.
	 * `undefined` when the Window Management API is unavailable or permission was denied.
	 */
	readonly screens: ScreenDetail[] | undefined;
}

/**
 * Internal interface extending `ScreenDetails` for the Window Management API event target.
 * @internal
 */
export interface ScreenDetailsEvt extends ScreenDetails, EventTarget {
	/** Called when the current screen changes (e.g. window moved to another display). */
	oncurrentscreenchange: ((evt: Event) => void) | null;
	/** Called when the set of available screens changes (monitor connected/disconnected). */
	onscreenschange: ((evt: Event) => void) | null;
}

/**
 * Screen orientation lock type supported by the Screen Orientation API.
 * Pass one of these values to the `lockOrientation` function returned by [useScreen](https://react-tools.ndria.dev/hooks/events/useScreen).
 */
export type OrientationLockType = "any" | "natural" | "landscape" | "portrait" | "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary"

/**
 * Parameters accepted by [useScreen](https://react-tools.ndria.dev/hooks/events/useScreen).
 */
export type UseScreenProps = {
	/**
	 * When `true`, the hook requests access to the full multi-screen details via the
	 * [Window Management API](https://developer.mozilla.org/en-US/docs/Web/API/Window_Management_API),
	 * populating per-screen properties such as `availLeft`, `availTop`, `left`, `top`,
	 * `devicePixelRatio`, `isInternal`, `isPrimary`, and `label` for each screen.
	 * Requires the `"window-management"` permission to be granted.
	 * When `false` or omitted, only the standard `screen` properties are populated
	 * and multi-screen fields are `undefined`.
	 */
	allScreen?: boolean;
};

/**
 * Return value of [useScreen](https://react-tools.ndria.dev/hooks/events/useScreen).
 */
export type UseScreenResult = [
	/**
	 * A reactive snapshot of the current screen details. Includes standard
	 * `screen` properties (`width`, `height`, `availWidth`, `availHeight`,
	 * `colorDepth`, `pixelDepth`, `orientation`) on `currentScreen`, plus
	 * extended per-screen properties when `allScreen` is `true` and the
	 * Window Management API is available.
	 */
	ScreenDetails,

	/**
	 * Requests a screen orientation lock, constraining the device to the specified
	 * {@link OrientationLockType} (e.g. `"portrait-primary"`, `"landscape"`).
	 * Resolves when the lock is acquired. Rejects if the browser does not support
	 * orientation locking or if the request is denied.
	 */
	(orientation: OrientationLockType) => Promise<void>,

	/**
	 * Releases the current orientation lock, allowing the device to rotate freely
	 * again. No-op if no lock is currently held.
	 */
	() => void
];