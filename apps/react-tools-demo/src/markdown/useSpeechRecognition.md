# useSpeechRecognition
Hook to use _SpeechRecognition API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition). [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/useSpeechRecognition)

## Usage

```tsx
export const UseSpeechRecognition = () => {
	const colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow', 'transparent']
	const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')} ;`

	const btnRef = useRef<HTMLButtonElement>(null);
	const perform = usePerformAction(() => btnRef.current?.focus());

	const [message, setMessage] = useState("Ready");

	const [state, start, stop] = useSpeechRecognition({
		onStart: useCallback(() => {
			setMessage("Listening...")
		}, []),
		onEnd: useCallback(() => {
			stop();
			setMessage("Finish");
			perform();
		}, [perform]),
		onNoMatch: useCallback(() => {
			setMessage("Color not recognized.")
		}, []),
		onError: useCallback((ev: SpeechRecognitionErrorEvent) => {
			setMessage(`Error occurred in recognition: ${ev.message ? ev.message : ev.error}`);
		}, []),
	});

	const onStart = () => {
		const grammars = new SpeechGrammarListP() as SpeechGrammarList;
		grammars.addFromString(grammar, 1);
		start({
			lang: "en-US",
			continuous: false,
			interimResults: false,
			maxAlternatives: 1,
			grammars
		});
	}

	const color = useMemo(() => {
		let colr = "transparent";
		if (state.result.results) {
			const color = state.result.results[0][0].transcript;
			if (colors.includes(color)) {
				colr = color;
			}
		}
		return colr;
	}, [state.result.results, colors]);

	return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
		{
			state.isSupported
				? <>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<p>Click on start to say a color to change backgroundColor of bordered div. Try</p>
						<div style={{ display: 'flex', flexWrap: "wrap", gap: 10 }}>
							{
								colors.map(el => <span key={el} style={{ color: el }}>{el}</span>)
							}
						</div>
					</div>
					<p>{message}</p>
					<div style={{ border: "1px solid lightgray", width: 300, height: 150, backgroundColor: color, margin: '0 auto' }}>
						{
							state.result && <p>Color is: {color}</p>
						}
					</div>
					<div style={{ display: 'flex', justifyContent: "center", gap: 10 }}>
						<button ref={btnRef} onClick={onStart} disabled={state.isListening}>Start</button>
					</div>
				</>
				: <p>Speech Recognition not supported</p>
		}
	</div>
}
```

> This component use _useSpeechRecognition_ hook to simulate a Speech color change app. When button _start_ is clicked, you can say an HTML color keyword and the bordered div color will change to that color.


## API

```tsx
useSpeechRecognition({ alreadyStarted, defaultConfig, onAudioStart, onAudioEnd, onEnd, onError, onNoMatch, onResult, onSoundStart, onSoundEnd, onSpeechStart, onSpeechEnd, onStart }: UseSpeechRecognitionProps): [SpeechRecognitionState, (config?: SpeechRecognitionConfig) => void, () => void, (resultAlso?: boolean) => void]
```

> ### Params
>
> - __opts__: _UseSpeechRecognitionProps_  
options.
> - __opts.alreadyStarted=false?__: _boolean_  
istant start SpeechRecognition if it is available.
> - __opts.defaultConfig?__: _Object_  
config parameters for current SpeechRecognition.
> - __opts.defaultConfig.grammars?__: _SpeechGrammarList_  
a _SpeechGrammarList_ containing the SpeechGrammar objects that represent your grammar for your app.
> - __opts.defaultConfig.lang?__: _LanguageBCP47Tags_  
a string representing the BCP 47 language tag for the current SpeechRecognition.
> - __opts.defaultConfig.continuous?__: _boolean_  
a boolean value representing the current SpeechRecognition's continuous status. true means continuous, and false means not continuous (single result each time.).
> - __opts.defaultConfig.interimResults?__: _boolean_  
a boolean value representing the state of the current SpeechRecognition's interim results. true means interim results are returned, and false means they aren't.
> - __opts.defaultConfig.maxAlternatives?__: _number_  
a number representing the maximum returned alternatives for each result.
> - __opts.onAudioStart?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _audiostart_ event is dispatched.
> - __opts.onAudioEnd?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _audioend_ event is dispatched.
> - __opts.onEnd?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _end_ event is dispatched.
> - __opts.onError?__: _((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null_  
function that will be executed when _error_ event is dispatched.
> - __opts.onNoMatch?__: _((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null_  
function that will be executed when _nomatch_ event is dispatched.
> - __opts.onResult?__: _((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null_  
function that will be executed when _result_ event is dispatched.
> - __opts.onSoundStart?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _soundstart_ event is dispatched.
> - __opts.onSoundEnd?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _soundend_ event is dispatched.
> - __opts.onSpeechStart?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _speechstart_ event is dispatched.
> - __opts.onSpeechEnd?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _speechend_ event is dispatched.
> - __opts.onStart?__: _((this: SpeechRecognition, ev: Event) => void) | null_  
function that will be executed when _start_ event is dispatched.
>

> ### Returns
>
> __result__:  __Array__:  
    - _SpeechRecognitionState_  
    - _(config?: SpeechRecognitionConfig)=>void_  
    - _()=>void_  
    - _(resultAlso?:boolean)=>void_  
> - 1. __state__: object with these properties:
> 		- _isSupported_: returns a boolean to know if API is available.
> 		- _isListening_: returns a boolean indicating current SpeechRecognition execution or not.
> 		- _result_: returns result of SpeechRecognition execution.
> - 2. __start__: function to start SpeechRecognition.
> - 3. __stop__: function to stop SpeechRecognition.
> - 4. __reset__: function to reset SpeechRecognition with optional parameter to reset results also.
>