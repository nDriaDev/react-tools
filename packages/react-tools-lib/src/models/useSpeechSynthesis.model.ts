import { LanguageBCP47Tags } from ".";

export type SpeechSynthesisonCancel = ((this: SpeechSynthesisUtterance, ev: {
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/charIndex).*/
	readonly charIndex: number;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/charLength).*/
	readonly charLength: number;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/elapsedTime).*/
	readonly elapsedTime: number;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/name).*/
	readonly name: string;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisEvent/utterance).*/
	readonly utterance: SpeechSynthesisUtterance;
}) => void) | null;

export interface UseSpeechSynthesisProps {
	/**function that will be executed when __speak__ method of _SpeechSynthesis_ will be invoked.*/
	onSpeak?: () => void;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/start_event).*/
	onStart?: SpeechSynthesisUtterance["onstart"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pause_event).*/
	onPause?: SpeechSynthesisUtterance["onpause"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/resume_event).*/
	onResume?: SpeechSynthesisUtterance["onresume"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/boundary_event).*/
	onBoundary?: SpeechSynthesisUtterance["onboundary"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/mark_event).*/
	onMark?: SpeechSynthesisUtterance["onmark"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/error_event).*/
	onError?: SpeechSynthesisUtterance["onerror"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/end_event).*/
	onEnd?: SpeechSynthesisUtterance["onend"];
	onCancel?: SpeechSynthesisonCancel;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/lang).*/
	lang?: LanguageBCP47Tags;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pitch).*/
	pitch?: SpeechSynthesisUtterance["pitch"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/rate).*/
	rate?: SpeechSynthesisUtterance["rate"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/voice).*/
	voice?: SpeechSynthesisUtterance["voice"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/volume).*/
	volume?: SpeechSynthesisUtterance["volume"];
}

export type SpeechSynthesisSpeakParam = SpeechSynthesisUtterance["text"] | ({
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/text).*/
	text: SpeechSynthesisUtterance["text"];
	/**boolean that if true invokes __speak__ method of _SpeechSynthesis_ cancelling currenty speaking.*/
	startImmediatly?: boolean;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/start_event).*/
	onStart?: SpeechSynthesisUtterance["onstart"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pause_event).*/
	onPause?: SpeechSynthesisUtterance["onpause"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/resume_event).*/
	onResume?: SpeechSynthesisUtterance["onresume"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/boundary_event).*/
	onBoundary?: SpeechSynthesisUtterance["onboundary"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/mark_event).*/
	onMark?: SpeechSynthesisUtterance["onmark"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/error_event).*/
	onError?: SpeechSynthesisUtterance["onerror"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/end_event).*/
	onEnd?: SpeechSynthesisUtterance["onend"];
	onCancel?: SpeechSynthesisonCancel;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/lang).*/
	lang?: LanguageBCP47Tags;
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pitch).*/
	pitch?: SpeechSynthesisUtterance["pitch"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/rate).*/
	rate?: SpeechSynthesisUtterance["rate"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/voice).*/
	voice?: SpeechSynthesisUtterance["voice"];
	/**[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/volume).*/
	volume?: SpeechSynthesisUtterance["volume"];
});

export interface UseSpeechSynthesis {
	(props?: UseSpeechSynthesisProps): {
		state: {
			/**Returns a boolean value indicating SpeechSynthesis availability.*/
			isSupported: boolean;
			/**Returns the current status of SpeechSynthesis.*/
			status: "ready" | "speaking" | "paused" | "error" | "end" | "unavailable";
			/**Returns a boolean indicating the presence of texts to speech.*/
			hasPending: boolean;
			/**Returns the list of available voices.*/
			voices: SpeechSynthesisVoice[] | null;
		},
		/**Function to start speaking.*/
		speak: (param: SpeechSynthesisSpeakParam) => void;
		/**Function to keep in pause speaking.*/
		pause: () => void;
		/**Function to resume speaking.*/
		resume: () => void;
		/**Function to cancel speaking.*/
		cancel: () => void;
	}
}
