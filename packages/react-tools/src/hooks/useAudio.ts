import { useCallback, useRef } from "react"
import { useEffectOnce, useSyncExternalStore } from ".";
import { UseAudioProps, UseAudioResult } from "../models";

/**
 * **`useAudio`**: Hook to use an Audio source.
 * @param {UseAudioProps} param - object
 * @param {string} [param.url] - An optional string containing the URL of an audio file to be associated with the new audio element.
 * @param {number} [param.volume] - A double indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).
 * @param {boolean} [param.loop] - A boolean that reflects the loop HTML attribute, which indicates whether the media element should start over when it reaches the end.
 * @param {boolean} [param.defaultMuted] - A boolean that reflects the muted HTML attribute, which indicates whether the media element's audio output should be muted by default.
 * @param {number} [param.playbackRate] - A double that indicates the rate at which the media is being played back.
 * @param {OnErrorEventHandler} [param.onError] -
 * @returns {UseAudioResult} result
 * Object with these properties:
 * - __state__: object with current audio properties:
 * 		- _status_: value between __"unavailable"__ __"ready"__ __"playing"__ __"pause"__ indicating current audio status.
 * 		- _volume_: current audio volume.
 * 		- _playbackRate_: current audio playbackRate.
 * - __setAudio__: function to set audio.
 * - __setPlaybackRate__: function to set audio playbackRate.
 * - __setVolume__: function to set audio volume.
 * - __play__: function to play audio.
 * - __pause__: function to pause audio.
 * - __load__: function to reload audio.
 */
export const useAudio = ({ url, volume, loop, defaultMuted, playbackRate, onError }: UseAudioProps): UseAudioResult => {
	const notifyRef = useRef<() => void>();
	const audioRef = useRef<HTMLAudioElement>();
	const status = useRef<"unavailable" | "ready" | "playing" | "pause">(!url ? "unavailable" : "ready");
	const stateCached = useRef<{ status: "unavailable" | "ready" | "playing" | "pause", volume?: number, playbackRate?: number }>({
		status: !url ? "unavailable" : "ready",
		playbackRate,
		volume
	});

	const setAudio = useCallback((audio: string, autoPlay?: boolean) => {
		audioRef.current && (audioRef.current.pause(), audioRef.current.src = "");
		audioRef.current = new Audio(audio);
		audioRef.current.autoplay = !!autoPlay;
		stateCached.current?.volume && (audioRef.current.volume = stateCached.current.volume);
		stateCached.current?.playbackRate && (audioRef.current.playbackRate = stateCached.current.playbackRate);
		status.current = "ready";
		audioRef.current.onended = () => {
			status.current = "ready";
			notifyRef.current && notifyRef.current();
		}
		!!onError && (audioRef.current.onerror = onError);
		notifyRef.current && notifyRef.current();
	}, [onError]);

	const setVolume = useCallback((volume: number) => {
		stateCached.current = {
			...stateCached.current,
			volume
		};
		audioRef.current && (audioRef.current.volume = volume);
		notifyRef.current && notifyRef.current();
	}, []);

	const setPlaybackRate = useCallback((playbackRate: number) => {
		stateCached.current = {
			...stateCached.current,
			playbackRate
		};
		audioRef.current && (audioRef.current.playbackRate = playbackRate);
		notifyRef.current && notifyRef.current();
	}, []);

	const play = useCallback(() => {
		status.current = "playing";
		audioRef.current && audioRef.current.play();
		notifyRef.current && notifyRef.current();
	}, []);

	const pause = useCallback(() => {
		status.current = "pause";
		audioRef.current && audioRef.current.pause();
		notifyRef.current && notifyRef.current();
	}, []);

	const load = useCallback(() => {
		status.current = "ready";
		audioRef.current && audioRef.current.load();
		notifyRef.current && notifyRef.current();
	}, [])

	useEffectOnce(() => () => {
		audioRef.current && (audioRef.current.src = "");
		audioRef.current = undefined;
	})

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			return () => {
				notifyRef.current = undefined;
			};
		}, []),
		useCallback(() => {
			if (status.current !== stateCached.current.status) {
				stateCached.current = {
					...stateCached.current,
					status: status.current
				}
			}
			if (audioRef.current) {
				if (audioRef.current.volume !== stateCached.current.volume || audioRef.current.playbackRate !== stateCached.current.playbackRate) {
					stateCached.current = {
						...stateCached.current,
						volume: audioRef.current.volume,
						playbackRate: audioRef.current.playbackRate
					}
				}
			}
			return stateCached.current
		}, [])
	);

	if (!audioRef.current && url) {
		audioRef.current = new Audio(url);
		!!volume && (audioRef.current.volume = volume);
		!!playbackRate && (audioRef.current.playbackRate = playbackRate);
		!!loop && (audioRef.current.loop = loop);
		!!defaultMuted && (audioRef.current.defaultMuted = defaultMuted);
		stateCached.current.playbackRate = audioRef.current.playbackRate;
		stateCached.current.volume = audioRef.current.volume;
		audioRef.current.onended = () => {
			status.current = "ready";
			notifyRef.current && notifyRef.current();
		}
		!!onError && (audioRef.current.onerror = onError);
		notifyRef.current && notifyRef.current();
	}

	return {
		state,
		setAudio,
		setPlaybackRate,
		setVolume,
		play,
		pause,
		load,
	}
}