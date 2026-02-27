import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { UseSpeechSynthesis, SpeechSynthesisSpeakParam, UseSpeechSynthesisProps } from "../../models";

/**
 * **`useSpeechSynthesis`**: Hook to use _SpeechSynthesis API_.
 * @see [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useSpeechSynthesis)
 * @param {UseSpeechSynthesisProps} [opts] - {@link UseSpeechSynthesisProps}
 * @returns {ReturnType<UseSpeechSynthesis>} result {@link UseSpeechSynthesis}
 */
export const useSpeechSynthesis: UseSpeechSynthesis = (opts?) => {
	const isSupported = useRef("speechSynthesis" in window);
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