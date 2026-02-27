import { LanguageBCP47Tags } from ".";

/**
 * Imperative controls for the speech recognition instance, injected as the
 * second argument of every event callback in {@link UseSpeechRecognitionProps}.
 * Using these controls inside a callback is always safe — they delegate to the
 * latest internal implementation via stable refs, so no circular dependency or
 * stale closure issues arise.
 */
export interface SpeechRecognitionControls {
	/**Starts a new recognition session, optionally overriding the _defaultConfig_ passed to the hook.*/
	start: (config?: SpeechRecognitionConfig) => void;
	/**Stops the current recognition session and attempts to return results for audio captured so far.*/
	stop: () => void;
	/**Aborts the current recognition session. Pass _true_ to also clear the last result from state.*/
	reset: (resultAlso?: boolean) => void;
}

/**
 * Configuration object accepted by [useSpeechRecognition](https://react-tools.ndria.dev/hooks/api-dom/useSpeechRecognition).
 *
 * All callback properties mirror the corresponding event handlers on the native
 * `SpeechRecognition` interface.
 */
export interface UseSpeechRecognitionProps {
	/**
	 * When `true`, recognition starts automatically on mount (equivalent to calling
	 * `start()` immediately). Useful for "always listening" scenarios.
	 * @default false
	 */
	alreadyStarted?: boolean;
	/**
	 * Default configuration applied to the `SpeechRecognition` instance.
	 * See {@link SpeechRecognitionConfig} for the available options.
	 */
	defaultConfig?: SpeechRecognitionConfig;
	/** Fired when the user agent has started capturing audio. */
	onAudioStart?: (this: SpeechRecognition, ev: Event, controls: SpeechRecognitionControls) => void;
	/** Fired when the user agent has finished capturing audio. */
	onAudioEnd?: (this: SpeechRecognition, ev: Event, controls: SpeechRecognitionControls) => void;
	/** Fired when the speech recognition service disconnects. */
	onEnd?: (this: SpeechRecognition, ev: Event, controls: SpeechRecognitionControls) => void;
	/** Fired when a speech recognition error occurs. */
	onError?: (this: SpeechRecognition, ev: SpeechRecognitionErrorEvent, controls: SpeechRecognitionControls) => void;
	/** Fired when no significant recognition was returned. */
	onNoMatch?: (this: SpeechRecognition, ev: SpeechRecognitionEvent, controls: SpeechRecognitionControls) => void;
	/** Fired when a word or phrase has been positively recognised. */
	onResult?: (this: SpeechRecognition, ev: SpeechRecognitionEvent, controls: SpeechRecognitionControls) => void;
	/** Fired when any sound (recognisable or not) has been detected. */
	onSoundStart?: (this: SpeechRecognition, ev: Event, controls: SpeechRecognitionControls) => void;
	/** Fired when any sound has stopped being detected. */
	onSoundEnd?: (this: SpeechRecognition, ev: Event, controls: SpeechRecognitionControls) => void;
	/** Fired when speech recognised by the service has been detected. */
	onSpeechStart?: (this: SpeechRecognition, ev: Event, controls: SpeechRecognitionControls) => void;
	/** Fired when speech recognised by the service has stopped being detected. */
	onSpeechEnd?: (this: SpeechRecognition, ev: Event, controls: SpeechRecognitionControls) => void;
	/** Fired when the speech recognition service has begun listening. */
	onStart?: (this: SpeechRecognition, ev: Event, controls: SpeechRecognitionControls) => void;
}

/**
 * Initial configuration options for the `SpeechRecognition` instance.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
 */
export interface SpeechRecognitionConfig {
	/**Returns and sets a collection of _SpeechGrammar_ objects that represent the grammars that will be understood by the current SpeechRecognition.*/
	grammars?: SpeechGrammarList;
	/**
	 * BCP 47 language tag for recognition (e.g. `"en-US"`, `"it-IT"`).
	 * Falls back to the `<html lang>` attribute or the user agent's language setting.
	 */
	lang?: LanguageBCP47Tags;
	/**
	 * When `true`, continuous results are returned for each recognition phrase.
	 * When `false` (default), recognition stops after the first result.
	 * @default false
	 */
	continuous?: boolean;
	/**
	 * When `true`, interim (non-final) results are also returned.
	 * When `false`, only final results are delivered.
	 * @default false
	 */
	interimResults?: boolean;
	/**
	 * Maximum number of `SpeechRecognitionAlternative` objects per result.
	 * @default 1
	 */
	maxAlternatives?: number;
}

export type SpeechRecognitionErrorCode = 'aborted' | 'audio-capture' | 'bad-grammar' | 'language-not-supported' | 'network' | 'no-speech' | 'not-allowed' | 'service-not-allowed'

export interface SpeechRecognitionErrorEvent extends Event {
	readonly error: SpeechRecognitionErrorCode;
	readonly message?: string;
}

export interface SpeechRecognitionEvent extends Event {
	/**Returns the lowest index value result in the SpeechRecognitionResultList "array" that has actually changed.*/
	readonly resultIndex: number;
	/**Returns a SpeechRecognitionResultList object representing all the speech recognition results for the current session.*/
	results: SpeechRecognitionResultList;
}

/**The SpeechGrammar interface of the Web Speech API represents a set of words or patterns of words that we want the recognition service to recognize.*/
export interface SpeechGrammar {
	/**Sets and returns a string containing the grammar from within in the SpeechGrammar object instance.*/
	src: string;
	/**Sets and returns the weight of the SpeechGrammar object.*/
	weight?: number;
}

/**The SpeechGrammarList interface of the Web Speech API represents a list of SpeechGrammar objects containing words or patterns of words that we want the recognition service to recognize.*/
export interface SpeechGrammarList {
	/**Returns the number of SpeechGrammar objects contained in the SpeechGrammarList.*/
	readonly length: number;
	/**Standard getter — allows individual SpeechGrammar objects to be retrieved from the SpeechGrammarList using array syntax.*/
	item: (index: number) => SpeechGrammar;
	/**Takes a grammar present at a specific URI and adds it to the SpeechGrammarList as a new SpeechGrammar object.*/
	addFromURI: (
		/**A string representing the URI of the grammar to be added.*/
		src: string,
		/**A float representing the weight of the grammar relative to other grammars present in the SpeechGrammarList. The weight means the importance of this grammar, or the likelihood that it will be recognized by the speech recognition service. The value can be between 0.0 and 1.0; If not specified, the default used is 1.0.*/
		weight?: number
	) => undefined;
	/**Adds a grammar in a string to the SpeechGrammarList as a new SpeechGrammar object.*/
	addFromString: (
		/**A string representing the URI of the grammar to be added.*/
		src: string,
		/**A float representing the weight of the grammar relative to other grammars present in the SpeechGrammarList. The weight means the importance of this grammar, or the likelihood that it will be recognized by the speech recognition service. The value can be between 0.0 and 1.0; If not specified, the default used is 1.0.*/
		weight?: number
	) => undefined;
	[index: number]: SpeechGrammar
}

/**
 * Reactive state snapshot returned by [useSpeechRecognition](https://react-tools.ndria.dev/hooks/api-dom/useSpeechRecognition).
 */
export interface SpeechRecognitionState {
	/**
	 * `true` when the Web Speech API (`SpeechRecognition` or `webkitSpeechRecognition`)
	 * is available in the current browser.
	 */
	isSupported: boolean;
	/**
	 * `true` while the speech recognition service is actively listening for speech.
	 * Becomes `false` after `stop()` is called or recognition ends automatically.
	 */
	isListening: boolean;
	/**
	 * The most recent recognition result.
	 * - `results` — a `SpeechRecognitionResultList` containing all result alternatives.
	 * - `resultIndex` — index of the most recent result in the list.
	 * Both are `null` before the first result arrives.
	 */
	result: {
		results: SpeechRecognitionEvent["results"] | null;
		resultIndex: SpeechRecognitionEvent["resultIndex"] | null;
	};
}

/**
 * The `SpeechRecognition` Web API interface.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
 */
export interface SpeechRecognition extends EventTarget {
	/** Grammar list used by this recognition instance. */
	grammars: SpeechGrammarList;
	/**
	 * BCP 47 language tag. Falls back to the document's `lang` attribute
	 * or the user agent's default language.
	 */
	lang: LanguageBCP47Tags;
	/**
	 * When `true`, recognition continues returning results until `stop()` is called.
	 * @default false
	 */
	continuous: boolean;
	/**
	 * When `true`, interim (non-final) results are delivered via `onresult`.
	 * @default false
	 */
	interimResults: boolean;
	/**
	 * Maximum number of recognition alternatives per result.
	 * @default 1
	 */
	maxAlternatives: number;
	/** Called when audio capture starts. */
	onaudiostart: ((this: SpeechRecognition, ev: Event) => void) | null;
	/** Called when audio capture ends. */
	onaudioend: ((this: SpeechRecognition, ev: Event) => void) | null;
	/** Called when the service disconnects. */
	onend: ((this: SpeechRecognition, ev: Event) => void) | null;
	/** Called when a recognition error occurs. */
	onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
	/** Called when no significant recognition was found. */
	onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
	/** Called when a recognition result is returned. */
	onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
	/** Called when any detectable sound starts. */
	onsoundstart: ((this: SpeechRecognition, ev: Event) => void) | null;
	/** Called when detectable sound stops. */
	onsoundend: ((this: SpeechRecognition, ev: Event) => void) | null;
	/** Called when recognised speech starts. */
	onspeechstart: ((this: SpeechRecognition, ev: Event) => void) | null;
	/** Called when recognised speech ends. */
	onspeechend: ((this: SpeechRecognition, ev: Event) => void) | null;
	/** Called when the recognition service starts listening. */
	onstart: ((this: SpeechRecognition, ev: Event) => void) | null;
	/** Starts listening for speech. */
	start: () => void;
	/** Stops listening; returns results for speech recognised so far. */
	stop: () => void;
	/** Stops listening without returning results. */
	abort: () => void;
}