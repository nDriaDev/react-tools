import { useCallback, useMemo, useRef } from "react";
import { SpeechRecognition, SpeechRecognitionConfig, SpeechRecognitionControls, SpeechRecognitionEvent, SpeechRecognitionState, UseSpeechRecognitionProps } from "../../models";
import { useEffectOnce } from "../lifecycle";
import { useSyncExternalStore } from "../state";

/**
 * **`useSpeechRecognition`**: Hook to use _SpeechRecognition API_.
 * @see [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useSpeechRecognition)
 * @param {UseSpeechRecognitionProps} param - {@link UseSpeechRecognitionProps}
 * @returns {[SpeechRecognitionState, (config?: SpeechRecognitionConfig) => void, () => void, (resultAlso?: boolean) => void]} result {@link SpeechRecognitionState} {@link SpeechRecognitionConfig}
 */
export const useSpeechRecognition = ({ alreadyStarted, defaultConfig, onAudioStart, onAudioEnd, onEnd, onError, onNoMatch, onResult, onSoundStart, onSoundEnd, onSpeechStart, onSpeechEnd, onStart }: UseSpeechRecognitionProps): [SpeechRecognitionState, (config?: SpeechRecognitionConfig) => void, () => void, (resultAlso?: boolean) => void] => {
	const isSupported = useRef(typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) && ("SpeechGrammarList" in window || "webkitSpeechGrammarList" in window) && ("SpeechRecognitionEvent" in window || "webkitSpeechRecognitionEvent" in window));
	const SpeechRecognitionAPI = useRef(typeof window !== "undefined" && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition));

	const recognition = useRef<SpeechRecognition>();
	const notifRef = useRef<() => void>();
	const isListening = useRef(false);
	const result = useRef<{ results: SpeechRecognitionEvent["results"] | null, resultIndex: SpeechRecognitionEvent["resultIndex"] | null }>({ resultIndex: null, results: null });

	// Stable controls object — identity never changes between renders.
	// Each function delegates to the latest implementation via startRef/stopRef/resetRef.
	const controls = useRef<SpeechRecognitionControls>({
		start: (config?) => startRef.current(config),
		stop: () => stopRef.current(),
		reset: (resultAlso?) => resetRef.current(resultAlso),
	});

	const startRef = useRef<(config?: SpeechRecognitionConfig) => void>(null!);
	const stopRef = useRef<() => void>(null!);
	const resetRef = useRef<(resultAlso?: boolean) => void>(null!);

	const start = useCallback((config?: typeof defaultConfig) => {
		if (isSupported.current && !isListening.current) {
			const conf: SpeechRecognitionConfig = {
				grammars: config?.grammars ?? defaultConfig?.grammars,
				lang: config?.lang ?? defaultConfig?.lang,
				continuous: config?.continuous ?? defaultConfig?.continuous,
				interimResults: config?.interimResults ?? defaultConfig?.interimResults,
				maxAlternatives: config?.maxAlternatives ?? defaultConfig?.maxAlternatives,
			};
			!!recognition.current && (recognition.current = undefined);
			recognition.current = new SpeechRecognitionAPI.current();
			!!conf.grammars && (recognition.current!.grammars = conf.grammars);
			!!conf.lang && (recognition.current!.lang = conf.lang);
			!!conf.continuous && (recognition.current!.continuous = conf.continuous);
			!!conf.interimResults && (recognition.current!.interimResults = conf.interimResults);
			!!conf.maxAlternatives && (recognition.current!.maxAlternatives = conf.maxAlternatives);
			onAudioStart && (recognition.current!.onaudiostart = (ev) => onAudioStart.call(recognition.current!, ev, controls.current));
			onSpeechStart && (recognition.current!.onspeechstart = (ev) => onSpeechStart.call(recognition.current!, ev, controls.current));
			onSoundStart && (recognition.current!.onsoundstart = (ev) => onSoundStart.call(recognition.current!, ev, controls.current));
			onStart && (recognition.current!.onstart = (ev) => onStart.call(recognition.current!, ev, controls.current));
			onError && (recognition.current!.onerror = (ev) => onError.call(recognition.current!, ev, controls.current));
			onNoMatch && (recognition.current!.onnomatch = (ev) => onNoMatch.call(recognition.current!, ev, controls.current));
			recognition.current!.onresult = (evt: SpeechRecognitionEvent) => {
				result.current = {
					results: evt.results,
					resultIndex: evt.resultIndex
				};
				notifRef.current && notifRef.current();
				onResult && onResult.call(recognition.current!, evt, controls.current);
			};
			onSoundEnd && (recognition.current!.onsoundend = (ev) => onSoundEnd.call(recognition.current!, ev, controls.current));
			onAudioEnd && (recognition.current!.onaudioend = (ev) => onAudioEnd.call(recognition.current!, ev, controls.current));
			recognition.current!.onend = (evt: Event) => {
				isListening.current = false;
				notifRef.current && notifRef.current();
				onEnd && onEnd.call(recognition.current!, evt, controls.current);
			};
			onSpeechEnd && (recognition.current!.onspeechend = (ev) => onSpeechEnd.call(recognition.current!, ev, controls.current));
			isListening.current = true;
			notifRef.current && notifRef.current();
			recognition.current!.start();
		}
	}, [defaultConfig?.grammars, defaultConfig?.lang, defaultConfig?.continuous, defaultConfig?.interimResults, defaultConfig?.maxAlternatives, onAudioStart, onAudioEnd, onError, onEnd, onNoMatch, onResult, onSoundEnd, onSoundStart, onSpeechEnd, onSpeechStart, onStart]);

	startRef.current = start;

	const stop = useCallback(() => {
		if (isSupported.current && isListening.current) {
			recognition.current!.stop();
			isListening.current = false;
			notifRef.current && notifRef.current();
		}
	}, []);

	stopRef.current = stop;

	const reset = useCallback((resultsAlso = false) => {
		if (recognition.current) {
			recognition.current!.abort();
			recognition.current!.onaudiostart = null;
			recognition.current!.onaudioend = null;
			recognition.current!.onend = null;
			recognition.current!.onerror = null;
			recognition.current!.onnomatch = null;
			recognition.current!.onresult = null;
			recognition.current!.onsoundstart = null;
			recognition.current!.onsoundend = null;
			recognition.current!.onspeechstart = null;
			recognition.current!.onspeechend = null;
			recognition.current!.onstart = null;
			recognition.current = undefined;
			isListening.current = false;
			if (resultsAlso) {
				result.current = {
					resultIndex: null,
					results: null
				};
			}
			notifRef.current && notifRef.current();
		}
	}, []);

	resetRef.current = reset;

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			return () => {
				notifRef.current = undefined;
			}
		}, []),
		useMemo(() => {
			let cached: SpeechRecognitionState = {
				isSupported: isSupported.current,
				isListening: false,
				result: {
					results: null,
					resultIndex: null
				}
			}
			return () => {
				if (isListening.current !== cached.isListening || result.current?.resultIndex !== cached.result.resultIndex || result.current?.results !== cached.result.results) {
					cached = {
						isSupported: isSupported.current,
						isListening: isListening.current,
						result: result.current
					}
				}
				return cached;
			}
		}, [])
	);

	useEffectOnce(() => {
		if (isSupported.current && alreadyStarted) {
			start();
		}
	});

	return [state, start, stop, reset];
}