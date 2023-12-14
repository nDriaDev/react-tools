export interface ScreenDetail extends Omit<Screen, "orientation"> {
	/** A number representing the x-coordinate (left-hand edge) of the available screen area. */
	readonly availLeft: number | undefined;
	/** A number representing the y - coordinate(top edge) of the available screen area. */
	readonly availTop: number | undefined;
	/** A number representing the screen's device pixel ratio. */
	readonly devicePixelRatio: number | undefined;
	/** A boolean indicating whether the screen is internal to the device or external. */
	readonly isInternal: boolean | undefined;
	/** A boolean indicating whether the screen is set as the operating system (OS) primary screen or not. */
	readonly isPrimary: boolean | undefined;
	/** A string providing a descriptive label for the screen, for example "Built-in Retina Display". */
	readonly label: string | undefined;
	/** A number representing the x-coordinate (left-hand edge) of the total screen area. */
	readonly left: number | undefined;
	/** A number representing the y-coordinate (top edge) of the total screen area. */
	readonly top: number | undefined;
	/** The current orientation of the screen. */
	readonly orientation: {
		/** The document's current orientation type, one of portrait-primary, portrait-secondary, landscape-primary, or landscape-secondary. */
		type: OrientationType;
		/** The document's current orientation angle. */
		angle: number;
	}
}

export interface ScreenDetails {
	readonly currentScreen: ScreenDetail;
	readonly screens: ScreenDetail[] | undefined;
}

export interface ScreenDetailsEvt extends ScreenDetails, EventTarget {
	oncurrentscreenchange: ((evt: Event) => void) | null;
	onscreenschange: ((evt: Event) => void) | null;
}

export type OrientationLockType = "any" | "natural" | "landscape" | "portrait" | "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary"