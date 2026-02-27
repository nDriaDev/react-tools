import { DetailedReactHTMLElement, HTMLAttributes, MediaHTMLAttributes, ReactEventHandler, SyntheticEvent, createElement, useMemo, useRef, useState } from "react";
import { HTMLMediaState } from "../models/common.model";

function parseTimeRanges(ranges: TimeRanges) {
	const result: { start: number; end: number }[] = [];

	for (let i = 0; i < ranges.length; i++) {
		result.push({
			start: ranges.start(i),
			end: ranges.end(i),
		});
	}

	return result;
}

export const createHTMLMediaHook =<T extends HTMLAudioElement | HTMLVideoElement>(tag: 'audio' | 'video') => {
	return (props: MediaHTMLAttributes<T>) => {
		const [state, setState] = useState<HTMLMediaState>({
			buffered: null,
			time: 0,
			duration: 0,
			paused: true,
			muted: false,
			volume: 1,
			playbackRate: 1,
			playing: false,
		});
		const ref = useRef<T | null>(null);

		const wrapEvent = <T extends Event | unknown>(userEvent: ReactEventHandler<T> | undefined, proxyEvent?: ReactEventHandler<T> | undefined) => {
			return (event: SyntheticEvent<T, Event>) => {
				try {
					proxyEvent && proxyEvent(event);
				} finally {
					userEvent && userEvent(event);
				}
			};
		};

		const onPlay = () => setState(s => ({ ...s, paused: false }));
		const onPlaying = () => setState(s => ({ ...s, playing: true }));
		const onWaiting = () => setState(s => ({ ...s, playing: false }));
		const onPause = () => setState(s => ({ ...s, paused: true, playing: false }));
		const onVolumeChange = () => {
			const el = ref.current;
			if (!el) {
				return;
			}
			setState(s => ({
				...s,
				muted: el.muted,
				volume: el.volume,
			}));
		};
		const onDurationChange = () => {
			const el = ref.current;
			if (!el) {
				return;
			}
			const { duration, buffered } = el;
			setState(s => ({
				...s,
				duration,
				buffered: parseTimeRanges(buffered),
			}));
		};
		const onTimeUpdate = () => {
			const el = ref.current;
			if (!el) {
				return;
			}
			setState(s => ({ ...s, time: el.currentTime }));
		};
		const onProgress = () => {
			const el = ref.current;
			if (!el) {
				return;
			}
			setState(s => ({ ...s, buffered: parseTimeRanges(el.buffered) }));
		};

		const MediaElement = useMemo(() => {
			return createElement(tag, {
				controls: false,
				...props,
				ref,
				onPlay: wrapEvent(props.onPlay, onPlay),
				onPlaying: wrapEvent(props.onPlaying, onPlaying),
				onWaiting: wrapEvent(props.onWaiting, onWaiting),
				onPause: wrapEvent(props.onPause, onPause),
				onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange),
				onDurationChange: wrapEvent(props.onDurationChange, onDurationChange),
				onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate),
				onProgress: wrapEvent(props.onProgress, onProgress),
			} as unknown as DetailedReactHTMLElement<HTMLAttributes<HTMLAudioElement>, HTMLAudioElement>);
		}, [props])

		// Some browsers return `Promise` on `.play()` and may throw errors
		// if one tries to execute another `.play()` or `.pause()` while that
		// promise is resolving. So we prevent that with this lock.
		let lockPlay: boolean = false;

		const controls = {
			play: () => {
				const el = ref.current;
				if (!el) {
					return undefined;
				}

				if (!lockPlay) {
					const promise = el.play();
					const isPromise = typeof promise === 'object';

					if (isPromise) {
						lockPlay = true;
						const resetLock = () => {
							lockPlay = false;
						};
						promise.then(resetLock, resetLock);
					}

					return promise;
				}
				return undefined;
			},
			pause: () => {
				const el = ref.current;
				if (el && !lockPlay) {
					return el.pause();
				}
			},
			seek: (time: number) => {
				const el = ref.current;
				if (!el || state.duration === undefined) {
					return;
				}
				time = Math.min(state.duration, Math.max(0, time));
				el.currentTime = time;
			},
			playbackRate: (playbackRate: number) => {
				const el = ref.current;
				if (!el) {
					return;
				}
				playbackRate = Math.min(16, Math.max(0, playbackRate));
				el.playbackRate = playbackRate;
				setState(s => ({ ...s, playbackRate }));
			},
			volume: (volume: number) => {
				const el = ref.current;
				if (!el) {
					return;
				}
				volume = Math.min(1, Math.max(0, volume));
				el.volume = volume;
				setState(s => ({ ...s, volume }));
			},
			mute: () => {
				const el = ref.current;
				if (!el) {
					return;
				}
				el.muted = true;
			},
			unmute: () => {
				const el = ref.current;
				if (!el) {
					return;
				}
				el.muted = false;
			},
		};

		return { MediaElement, state, controls, ref };
	};
}