import { DependencyListTyped } from "./utilityTypes.model";

/**
 * **`CompareFn<T>`**: receive 2 parameters of type T, respectively *old* and *new* version. It compares them
 * and returns `true` if they are different, otherwise `false`.
 */
export interface CompareFn<T = unknown> {
	(oldDeps: DependencyListTyped<T>, newDeps: DependencyListTyped<T>): boolean
}

export interface HTMLMediaState {
	buffered: {start: number, end: number}[] | null;
	duration: number;
	paused: boolean;
	muted: boolean;
	time: number;
	volume: number;
	playbackRate: number;
	playing: boolean;
}

export interface HTMLMediaControls {
	play: () => Promise<void> | void;
	pause: () => void;
	mute: () => void;
	unmute: () => void;
	playbackRate: (playbackRate: number) => void;
	volume: (volume: number) => void;
	seek: (time: number) => void;
}