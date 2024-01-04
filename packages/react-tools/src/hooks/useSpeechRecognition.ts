import { useCallback, useMemo, useRef } from "react";
import { SpeechRecognition, SpeechRecognitionConfig, SpeechRecognitionEvent, SpeechRecognitionState } from "../models";
import { useSyncExternalStore } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SpeechRecognition = window && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)
const isSupported = !!window && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) && ("SpeechGrammarList" in window || "webkitSpeechGrammarList" in window) && ("SpeechRecognitionEvent" in window || "webkitSpeechRecognitionEvent" in window);

/**
 * **`useSpeechRecognition`**: Hook to use _SpeechRecognition API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).
 * @param {Object} opts - options.
 * @param {boolean} [opts.alreadyStarted=false] - istant start SpeechRecognition if it is available.
 * @param {Object} [opts.defaultConfig] - config parameters for current SpeechRecognition.
 * @param {SpeechGrammarList} [opts.defaultConfig.grammars] - a _SpeechGrammarList_ containing the SpeechGrammar objects that represent your grammar for your app.
 * @param {LanguageBCP47Tags} [opts.defaultConfig.lang] - a string representing the BCP 47 language tag for the current SpeechRecognition.
 * @param {boolean} [opts.defaultConfig.continuous] - a boolean value representing the current SpeechRecognition's continuous status. true means continuous, and false means not continuous (single result each time.).
 * @param {boolean} [opts.defaultConfig.interimResults] - a boolean value representing the state of the current SpeechRecognition's interim results. true means interim results are returned, and false means they aren't.
 * @param {number} [opts.defaultConfig.maxAlternatives] - a number representing the maximum returned alternatives for each result.
 * @param {((this: SpeechRecognition, ev: Event) => void) | null} [opts.onAudioStart] - function that will be executed when _audiostart_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: Event) => void) | null} [opts.onAudioEnd] - function that will be executed when _audioend_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: Event) => void) | null} [opts.onEnd] - function that will be executed when _end_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null} [opts.onError] - function that will be executed when _error_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null} [opts.onNoMatch] - function that will be executed when _nomatch_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null} [opts.onResult] - function that will be executed when _result_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: Event) => void) | null} [opts.onSoundStart] - function that will be executed when _soundstart_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: Event) => void) | null} [opts.onSoundEnd] - function that will be executed when _soundend_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: Event) => void) | null} [opts.onSpeechStart] - function that will be executed when _speechstart_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: Event) => void) | null} [opts.onSpeechEnd] - function that will be executed when _speechend_ event is dispatched.
 * @param {((this: SpeechRecognition, ev: Event) => void) | null} [opts.onStart] - function that will be executed when _start_ event is dispatched.
 * @returns {[SpeechRecognitionState, (config?: SpeechRecognitionConfig)=>void, ()=>void, (resultAlso?:boolean)=>void]} result - An array with four element:
 * - 1. __state__: object with these properties:
 * 		- _isSupported_: returns a boolean to know if API is available.
 * 		- _isListening_: returns a boolean indicating current SpeechRecognition execution or not.
 * 		- _result_: returns result of SpeechRecognition execution.
 * - 2. __start__: function to start SpeechRecognition.
 * - 3. __stop__: function to stop SpeechRecognition.
 * - 4. __reset__: function to reset SpeechRecognition with optional parameter to reset results also.
 */
export const useSpeechRecognition = ({ alreadyStarted, defaultConfig, onAudioStart, onAudioEnd, onEnd, onError, onNoMatch, onResult, onSoundStart, onSoundEnd, onSpeechStart, onSpeechEnd, onStart }: { alreadyStarted?: boolean, defaultConfig?: SpeechRecognitionConfig, onAudioStart?: SpeechRecognition["onaudiostart"], onAudioEnd?: SpeechRecognition["onaudioend"], onEnd?: SpeechRecognition["onend"], onError?: SpeechRecognition["onerror"], onNoMatch?: SpeechRecognition["onnomatch"], onResult?: SpeechRecognition["onresult"], onSoundStart?: SpeechRecognition["onsoundstart"], onSoundEnd?: SpeechRecognition["onsoundend"], onSpeechStart?: SpeechRecognition["onspeechstart"], onSpeechEnd?: SpeechRecognition["onspeechend"], onStart?: SpeechRecognition["onstart"] }): [SpeechRecognitionState, (config?: SpeechRecognitionConfig) => void, () => void, (resultAlso?: boolean) => void] => {
	const recognition = useRef<SpeechRecognition>();
	const notifRef = useRef<() => void>();
	const isListening = useRef(false);
	const firstExecution = useRef(true);
	const result = useRef<{ results: SpeechRecognitionEvent["results"]|null, resultIndex: SpeechRecognitionEvent["resultIndex"]|null }>({resultIndex: null, results: null});

	const start = useCallback((config?: typeof defaultConfig) => {
		if (isSupported && !isListening.current) {
			const conf: SpeechRecognitionConfig = {
				grammars: config?.grammars ?? defaultConfig?.grammars,
				lang: config?.lang ?? defaultConfig?.lang,
				continuous: config?.continuous ?? defaultConfig?.continuous,
				interimResults: config?.interimResults ?? defaultConfig?.interimResults,
				maxAlternatives: config?.maxAlternatives ?? defaultConfig?.maxAlternatives,
			};
			!!recognition.current && (recognition.current = undefined);
			recognition.current = new SpeechRecognition();
			!!conf.grammars && (recognition.current!.grammars = conf.grammars);
			!!conf.lang && (recognition.current!.lang = conf.lang);
			!!conf.continuous && (recognition.current!.continuous = conf.continuous);
			!!conf.interimResults && (recognition.current!.interimResults = conf.interimResults);
			!!conf.maxAlternatives && (recognition.current!.maxAlternatives = conf.maxAlternatives);
			onAudioStart && (recognition.current!.onaudiostart = onAudioStart);
			onSpeechStart && (recognition.current!.onspeechstart = onSpeechStart);
			onSoundStart && (recognition.current!.onsoundstart = onSoundStart);
			onStart && (recognition.current!.onstart = onStart);
			onError && (recognition.current!.onerror = onError);
			onNoMatch && (recognition.current!.onnomatch = onNoMatch);
			recognition.current!.onresult = (evt: SpeechRecognitionEvent) => {
				console.log("result")
				result.current = {
					results: evt.results,
					resultIndex: evt.resultIndex
				};
				notifRef.current && notifRef.current();
				onResult && onResult.call(recognition.current!, evt);
			};
			onSoundEnd && (recognition.current!.onsoundend = onSoundEnd);
			onAudioEnd && (recognition.current!.onaudioend = onAudioEnd);
			onEnd && (recognition.current!.onend = onEnd);
			onSpeechEnd && (recognition.current!.onspeechend = onSpeechEnd);
			isListening.current = true;
			notifRef.current && notifRef.current();
			recognition.current!.start();
		}
	}, [defaultConfig?.grammars, defaultConfig?.lang, defaultConfig?.continuous, defaultConfig?.interimResults, defaultConfig?.maxAlternatives, onAudioStart, onAudioEnd, onError, onEnd, onNoMatch, onResult, onSoundEnd, onSoundStart, onSpeechEnd, onSpeechStart, onStart]);

	const stop = useRef(() => {
		if (isSupported && isListening.current) {
			recognition.current!.stop();
			isListening.current = false;
			notifRef.current && notifRef.current();
		}
	})

	const reset = useRef((resultsAlso = false) => {
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
			resultsAlso && (result.current = {
				resultIndex: null,
				results: null
			});
			notifRef.current && notifRef.current();
		}
	})

	const state = useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			return () => {
				notifRef.current = undefined;
			}
		}, []),
		useMemo(() => {
			let cached: SpeechRecognitionState = {
				isSupported,
				isListening: false,
				result: {
					results: null,
					resultIndex: null
				}
			}
			return () => {
				if (isListening.current !== cached.isListening || result.current?.resultIndex !== cached.result.resultIndex || result.current?.results !== cached.result.results) {
					cached = {
						isSupported,
						isListening: isListening.current,
						result: result.current
					}
				}
				return cached;
			}
		}, [])
	);

	if (firstExecution.current && isSupported && alreadyStarted) {
		isListening.current = true;
		firstExecution.current = false;
		start();
	}

	return [state, start, stop.current, reset.current];
}