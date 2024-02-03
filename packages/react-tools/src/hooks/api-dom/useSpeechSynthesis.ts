import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { UseSpeechSynthesis, SpeechSynthesisSpeakParam, UseSpeechSynthesisProps } from "../../models";

/**
 * **`useSpeechSynthesis`**: Hook to use _SpeechSynthesis API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useSpeechSynthesis)
 * @param {UseSpeechSynthesisProps} [opts] - options.
 * @param {() => void} [opts.onSpeak] - function that will be executed when _speak_ event is fired.
 * @param {SpeechSynthesisUtterance["onstart"]} [opts.onStart] - function that will be executed when _start_ event is fired.
 * @param {SpeechSynthesisUtterance["onpause"]} [opts.onPause] - function that will be executed when _pause_ event is fired.
 * @param {SpeechSynthesisUtterance["onresume"]} [opts.onResume] - function that will be executed when _resume_ event is fired.
 * @param {SpeechSynthesisUtterance["onboundary"]} [opts.onBoundary] - function that will be executed when _boundary_ event is fired.
 * @param {SpeechSynthesisUtterance["onmark"]} [opts.onMark] - function that will be executed when _mark_ event is fired.
 * @param {SpeechSynthesisUtterance["onerror"]} [opts.onError] - function that will be executed when _error_ event is fired.
 * @param {SpeechSynthesisUtterance["onend"]} [opts.onEnd] - function that will be executed when _end_ event is fired.
 * @param {SpeechSynthesisonCancel} [opts.onCancel] - function that will be executed when _cancel_ event is fired.
 * @param {LanguageBCP47Tags} [opts.lang] - [MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/lang).
 * @param {SpeechSynthesisUtterance["pitch"]} [opts.pitch] - [MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pitch).
 * @param {SpeechSynthesisUtterance["rate"]} [opts.rate] - [MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/rate).
 * @param {SpeechSynthesisUtterance["voice"]} [opts.voice] - [MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/voice).
 * @param {SpeechSynthesisUtterance["volume"]} [opts.volume] - [MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/volume).
 * @returns {ReturnType<UseSpeechSynthesis>} return - Object with these properties:
 * -  __state__: object with these properties:
 * 		- _isSupported_: Returns a boolean value indicating SpeechSynthesis availability.
 * 		- _status_: Returns the current status of SpeechSynthesis between: _ready_ _speaking_ _paused_ _error_ _end_ and _unavailable_.
 * 		- _hasPending_: Returns a boolean indicating the presence of texts to speech.
 * 		- _voices_: Returns the list of available voices.
 * -  __speak__: Function to start speaking.
 * -  __pause__: Function to keep in pause speaking.
 * -  __resume__: Function to resume speaking.
 * -  __cancel__: Function to cancel speaking.
 */
export const useSpeechSynthesis = (opts?: UseSpeechSynthesisProps): ReturnType<UseSpeechSynthesis> => {
	const isSupported = useRef("speechSynthesis" in window);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const synth = useRef(window && (window as any).speechSynthesis as SpeechSynthesis);

	const notifRef = useRef<() => void>();
	const status = useRef<ReturnType<UseSpeechSynthesis>["state"]["status"]>(isSupported ? "ready" : "unavailable");

	const onStart = useRef<(handler?: UseSpeechSynthesisProps["onStart"]) => SpeechSynthesisUtterance["onstart"]>((handler) => {
		return (evt: SpeechSynthesisEvent) => {
			status.current = "speaking";
			notifRef.current && notifRef.current();
			handler && handler.call(evt.utterance, evt);
		}
	});

	const onPause = useRef<(handler?: UseSpeechSynthesisProps["onPause"]) => SpeechSynthesisUtterance["onpause"]>((handler) => {
		return (evt: SpeechSynthesisEvent) => {
			status.current = "paused";
			notifRef.current && notifRef.current();
			handler && handler.call(evt.utterance, evt);
		}
	});

	const onResume = useRef<(handler?: UseSpeechSynthesisProps["onResume"]) => SpeechSynthesisUtterance["onresume"]>((handler) => {
		return (evt: SpeechSynthesisEvent) => {
			status.current = "speaking";
			notifRef.current && notifRef.current();
			handler && handler.call(evt.utterance, evt);
		}
	});

	const onEnd = useRef<(handler?: UseSpeechSynthesisProps["onEnd"]) => SpeechSynthesisUtterance["onend"]>((handler) => {
		return (evt: SpeechSynthesisEvent) => {
			status.current === "paused" && synth.current.cancel();
			status.current = "end";
			notifRef.current && notifRef.current();
			handler && handler.call(evt.utterance, evt);
		}
	});

	const onError = useRef<(handler?: UseSpeechSynthesisProps["onError"]) => SpeechSynthesisUtterance["onerror"]>((handler) => {
		return (evt: SpeechSynthesisErrorEvent) => {
			if (opts?.onCancel && ["canceled", "interrupted"].includes(evt.error)) {
				status.current = "ready";
				const { charIndex, charLength, elapsedTime, utterance} = evt;
				opts.onCancel.call(evt.utterance, { charIndex, charLength, elapsedTime, utterance, name: "oncancel" })
			} else {
				status.current = "error";
				handler && handler.call(evt.utterance, evt);
			}
			notifRef.current && notifRef.current();
		}
	});

	const speak = useRef((param: SpeechSynthesisSpeakParam) => {
		if (!isSupported.current) {
			return;
		}
		const { text, ...rest } = typeof param === "string" ? { text: param } : param;
		const utterance = new SpeechSynthesisUtterance(text);
		rest.lang && (utterance.lang = rest.lang);
		rest.pitch && (utterance.pitch = rest.pitch);
		rest.rate && (utterance.rate = rest.rate);
		rest.voice && (utterance.voice = rest.voice);
		rest.volume && (utterance.volume = rest.volume);
		const onStartHandler = onStart.current(rest.onStart ?? opts?.onStart);
		const onPauseHandler = onPause.current(rest.onPause ?? opts?.onPause);
		const onResumeHandler = onResume.current(rest.onResume ?? opts?.onResume);
		const onEndHandler = onEnd.current(rest.onEnd ?? opts?.onEnd);
		const onErrorHandler = onError.current(rest.onError ?? opts?.onError);
		const onBoundaryHandler = rest.onBoundary || opts?.onBoundary;
		const onMarkHandler = rest.onMark || opts?.onMark;
		utterance.onstart = onStartHandler;
		utterance.onpause = onPauseHandler;
		utterance.onresume = onResumeHandler;
		utterance.onend = onEndHandler;
		utterance.onerror = onErrorHandler;
		!!onBoundaryHandler && (utterance.onboundary = onBoundaryHandler);
		!!onMarkHandler && (utterance.onmark = onMarkHandler);

		if (status.current === "paused" || rest.startImmediatly) {
			synth.current.cancel();
		}

		["ready", "end", "error"].includes(status.current) && opts?.onSpeak && opts?.onSpeak();

		synth.current.speak(utterance);
	});

	const pause = useRef(() => isSupported.current && status.current === "speaking" && synth.current.pause());

	const resume = useRef(() => isSupported.current && status.current === "paused" && synth.current.resume());

	const cancel = useRef(() => isSupported.current && synth.current.cancel());

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			const listener = () => notif();
			isSupported.current && synth.current.addEventListener("voiceschanged", listener);
			return () => {
				notifRef.current = undefined;
				isSupported.current && synth.current.removeEventListener("voiceschanged", listener);
			}
		}, []),
		useMemo(() => {
			let cached:ReturnType<UseSpeechSynthesis>["state"] = {
				isSupported: isSupported.current,
				status: status.current,
				hasPending: isSupported.current ? synth.current.pending : false,
				voices: isSupported.current ? synth.current.getVoices() : null,
			}

			return () => {
				const current = {
					status: status.current,
					hasPending: isSupported.current ? synth.current.pending : false,
					voices: isSupported.current ? synth.current.getVoices() : null,
				}
				if (current.status !== cached.status || current.hasPending !== cached.hasPending || current.voices?.length !== cached.voices?.length) {
					cached = {
						isSupported: isSupported.current,
						status: current.status as typeof cached["status"],
						hasPending: current.hasPending,
						voices: current.voices
					}
				}
				return cached;
			}
		}, [])
	);

	const result: ReturnType<UseSpeechSynthesis> = useMemo(() => ({
		state,
		speak: speak.current,
		pause: pause.current,
		resume: resume.current,
		cancel: cancel.current
	}), [state]);

	return result;
}