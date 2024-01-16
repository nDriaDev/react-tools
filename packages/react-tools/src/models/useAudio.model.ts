export interface UseAudioProps {
	url?: string;
	volume?: number;
	loop?: boolean;
	defaultMuted?: boolean;
	playbackRate?: number;
	onError?: OnErrorEventHandler;
}

export interface UseAudioResult {
	state: {
		status: "unavailable" | "ready" | "playing" | "pause";
		volume?: number | undefined;
		playbackRate?: number | undefined;
	};
	setAudio: (audio: string) => void;
	setPlaybackRate: (playbackRate: number) => void;
	setVolume: (volume: number) => void;
	play: () => void;
	pause: () => void;
	load: () => void;
}