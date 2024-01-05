import { LanguageBCP47Tags } from ".";

export interface UseSpeechRecognitionProps {
	alreadyStarted?: boolean;
	defaultConfig?: SpeechRecognitionConfig;
	onAudioStart?: SpeechRecognition["onaudiostart"];
	onAudioEnd?: SpeechRecognition["onaudioend"];
	onEnd?: SpeechRecognition["onend"];
	onError?: SpeechRecognition["onerror"];
	onNoMatch?: SpeechRecognition["onnomatch"];
	onResult?: SpeechRecognition["onresult"];
	onSoundStart?: SpeechRecognition["onsoundstart"];
	onSoundEnd?: SpeechRecognition["onsoundend"];
	onSpeechStart?: SpeechRecognition["onspeechstart"];
	onSpeechEnd?: SpeechRecognition["onspeechend"];
	onStart?: SpeechRecognition["onstart"];
}

/**The interface of state value returned from _useSpeechRecognition_ hook.*/
export interface SpeechRecognitionState {
	/**Returns a boolean value indicating SpeechRecognition availability.*/
	isSupported: boolean;
	/**Returns a boolean value indicating if SpeechRecognition is listening or not.*/
	isListening: boolean;
	/**Returns an object with _results_ and _resultIndex_ properties of SpeechRecognition execution.*/
	result: {
		results: SpeechRecognitionEvent["results"]|null,
		resultIndex: SpeechRecognitionEvent["resultIndex"]|null
	}
}

/**The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.*/
export interface SpeechRecognition extends EventTarget {
	/**Returns and sets a collection of _SpeechGrammar_ objects that represent the grammars that will be understood by the current SpeechRecognition.*/
	grammars: SpeechGrammarList;
	/**Returns and sets the language of the current SpeechRecognition. If not specified, this defaults to the HTML lang attribute value, or the user agent's language setting if that isn't set either.*/
	lang: LanguageBCP47Tags;
	/**Controls whether continuous results are returned for each recognition, or only a single result. Defaults to single (false.)*/
	continuous: boolean;
	/**Controls whether interim results should be returned (true) or not (false.) Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false.)*/
	interimResults: boolean;
	/**Sets the maximum number of SpeechRecognitionAlternatives provided per result. The default value is 1.*/
	maxAlternatives: number;
	/**Fired when the user agent has started to capture audio.*/
	onaudiostart: ((this: SpeechRecognition, ev: Event) => void) | null;
	/**Fired when the user agent has finished capturing audio.*/
	onaudioend: ((this: SpeechRecognition, ev: Event) => void) | null;
	/**Fired when the speech recognition service has disconnected.*/
	onend: ((this: SpeechRecognition, ev: Event) => void) | null;
	/**Fired when a speech recognition error occurs.*/
	onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
	/**Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.*/
	onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
	/**Fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app.*/
	onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
	/**Fired when any sound — recognizable speech or not — has been detected.*/
	onsoundstart: ((this: SpeechRecognition, ev: Event) => void) | null;
	/**Fired when any sound — recognizable speech or not — has stopped being detected.*/
	onsoundend: ((this: SpeechRecognition, ev: Event) => void) | null;
	/**Fired when sound that is recognized by the speech recognition service as speech has been detected.*/
	onspeechstart: ((this: SpeechRecognition, ev: Event) => void) | null;
	/**Fired when speech recognized by the speech recognition service has stopped being detected.*/
	onspeechend: ((this: SpeechRecognition, ev: Event) => void) | null;
	/**Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.*/
	onstart: ((this: SpeechRecognition, ev: Event) => void) | null;
	/**Stops the speech recognition service from listening to incoming audio, and doesn't attempt to return a SpeechRecognitionResult.*/
	abort(): void;
	/**Starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.*/
	start(): void;
	/**Stops the speech recognition service from listening to incoming audio, and attempts to return a SpeechRecognitionResult using the audio captured so far.*/
	stop(): void;
	addEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => void, options?: boolean | AddEventListenerOptions): void
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
	removeEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => void, options?: boolean | EventListenerOptions): void
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}

export interface SpeechRecognitionConfig {
	/**Returns and sets a collection of _SpeechGrammar_ objects that represent the grammars that will be understood by the current SpeechRecognition.*/
	grammars?: SpeechGrammarList;
	/**Returns and sets the language of the current SpeechRecognition. If not specified, this defaults to the HTML lang attribute value, or the user agent's language setting if that isn't set either.*/
	lang?: LanguageBCP47Tags;
	/**Controls whether continuous results are returned for each recognition, or only a single result. Defaults to single (false.)*/
	continuous?: boolean;
	/**Controls whether interim results should be returned (true) or not (false.) Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false.)*/
	interimResults?: boolean;
	/**Sets the maximum number of SpeechRecognitionAlternatives provided per result. The default value is 1.*/
	maxAlternatives?: number;
}

interface SpeechRecognitionEventMap {
	'audioend': Event;
	'audiostart': Event;
	'end': Event;
	'error': SpeechRecognitionErrorEvent;
	'nomatch': SpeechRecognitionEvent;
	'result': SpeechRecognitionEvent;
	'soundend': Event;
	'soundstart': Event;
	'speechend': Event;
	'speechstart': Event;
	'start': Event;
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