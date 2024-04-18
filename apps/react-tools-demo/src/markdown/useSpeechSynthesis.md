# useSpeechSynthesis
Hook to use _SpeechSynthesis API_. Refer to [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). [See demo](https://ndriadev.github.io/react-tools/#/hooks/api-dom/useSpeechSynthesis)

## Usage

```tsx
export const UseSpeechSynthesis = () => {
	const { state, speak, pause, resume, cancel } = useSpeechSynthesis({
		onError(ev) {
			console.log(ev)
		},
	});
	const [form, setForm] = useState<{ text: string, volume: string, voice: string, lang: string, rate: string, pitch: string }>({ text: "", volume: "0.1", voice: "", lang: "", rate: "1", pitch: "1" });

	if (!state.isSupported) {
		return <div style={{ display: "flex", justifyContent: "center" }}>
			<p>Speech Synthesis not supported</p>
		</div>
	}

	return <div style={{ display: "flex", flexDirection: "column", gap: 10, justifyContent: "center", width: 'fit-content' }}>
		<div>
			<label htmlFor="text">Text to speak</label>
			<input type="text" value={form.text} onChange={e => setForm(f => ({...f, text: e.target.value}))} id="text" name="text"/>
		</div>
		<div>
			<label htmlFor="text">Voices</label>
			<select value={form.voice} onChange={e => setForm(f => ({ ...f, voice: e.target.value }))} disabled={state.status === "speaking"}>
				<>
					{
						(state.voices || []).map(el => (
							<option key={el.name} value={el.name}>{ `${el.name} - ${el.lang}${el.default ? ' - DEFAULT' : ''}` }</option>
						))
					}
				</>
			</select>
		</div>
		<div>
			<label htmlFor="text">Voices</label>
			<select value={form.lang} onChange={e => setForm(f => ({ ...f, lang: e.target.value }))} disabled={state.status === "speaking"}>
				<>
					{
						["en-US", "it-IT", "en-GB", "de-DE", "es-ES", "fr-FR"].map(el => (
							<option key={el} value={el}>{`${el}`}</option>
						))
					}
				</>
			</select>
		</div>
		<div>
			<label htmlFor="volume">Volume</label>
			<input type="range" id="volume" name="volume" min="0" max="1" step="0.1" value={form.volume} onChange={e => setForm(f => ({...f, volume: e.target.value}))} disabled={state.status === "speaking"}/>
		</div>
		<div>
			<label htmlFor="range">Rate</label>
			<input type="range" id="range" name="range" min="0.1" max="10" step="0.1" value={form.rate} onChange={e => setForm(f => ({...f, rate: e.target.value}))} disabled={state.status === "speaking"}/>
		</div>
		<div>
			<label htmlFor="pitch">Pitch</label>
			<input type="range" id="pitch" name="pitch" value={form.pitch} min="0" max="2" step="0.1" onChange={e => setForm(f => ({ ...f, pitch: e.target.value }))} disabled={state.status === "speaking"}/>
		</div>
		<div style={{ display: "flex", gap: 10 }}>
			<button
				type="button"
				onClick={() => {
					speak({
						text: form.text,
						lang: form.lang as LanguageBCP47Tags,
						voice: (state.voices || []).filter(v => v.name === form.voice)[0],
						volume: Number(form.volume),
						rate: Number(form.rate),
						pitch: Number(form.pitch),
					})
				}}
				disabled={state.status === "paused"}
			>
				Speak
			</button>
			<button
				type="button"
				onClick={() => {
					speak({
						text: form.text,
						lang: form.lang as LanguageBCP47Tags,
						voice: (state.voices || []).filter(v => v.name === form.voice)[0],
						volume: Number(form.volume),
						rate: Number(form.rate),
						pitch: Number(form.pitch),
						startImmediatly: true
					})
				}}
			>
				Speak immediatly
			</button>
			<button
				type="button"
				onClick={() => {
					state.status === "paused" ? resume() : pause();
				}}
				disabled={!["speaking", "paused"].includes(state.status)}
			>
				{state.status === "paused" ? "Resume" : "Pause"}
			</button>
			<button
				type="button"
				onClick={cancel}
				disabled={state.status === "end"}
			>
				Cancel
			</button>
		</div>
	</div>
}
```

> The component use _useSpeechSynthesis_ hook to read a text from an input text. Other fields are renders to setting properties as _voice_ _rate_ and _pitch_ of SpeechRecognition.


## API

```tsx
useSpeechSynthesis(opts?: UseSpeechSynthesisProps): ReturnType<UseSpeechSynthesis>
```


> ### Params
>
> - __opts?__: _UseSpeechSynthesisProps_  
options.
> - __opts.onSpeak?__: _() => void_  
function that will be executed when _speak_ event is fired.
> - __opts.onStart?__: _SpeechSynthesisUtterance["onstart"]_  
function that will be executed when _start_ event is fired.
> - __opts.onPause?__: _SpeechSynthesisUtterance["onpause"]_  
function that will be executed when _pause_ event is fired.
> - __opts.onResume?__: _SpeechSynthesisUtterance["onresume"]_  
function that will be executed when _resume_ event is fired.
> - __opts.onBoundary?__: _SpeechSynthesisUtterance["onboundary"]_  
function that will be executed when _boundary_ event is fired.
> - __opts.onMark?__: _SpeechSynthesisUtterance["onmark"]_  
function that will be executed when _mark_ event is fired.
> - __opts.onError?__: _SpeechSynthesisUtterance["onerror"]_  
function that will be executed when _error_ event is fired.
> - __opts.onEnd?__: _SpeechSynthesisUtterance["onend"]_  
function that will be executed when _end_ event is fired.
> - __opts.onCancel?__: _SpeechSynthesisonCancel_  
function that will be executed when _cancel_ event is fired.
> - __opts.lang?__: _LanguageBCP47Tags_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/lang).
> - __opts.pitch?__: _SpeechSynthesisUtterance["pitch"]_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/pitch).
> - __opts.rate?__: _SpeechSynthesisUtterance["rate"]_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/rate).
> - __opts.voice?__: _SpeechSynthesisUtterance["voice"]_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/voice).
> - __opts.volume?__: _SpeechSynthesisUtterance["volume"]_  
[MDN Reference](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/volume).
>



> ### Returns
>
> __return__:  _ReturnType<UseSpeechSynthesis>_  
> -  __state__: object with these properties:
> 		- _isSupported_: Returns a boolean value indicating SpeechSynthesis availability.
> 		- _status_: Returns the current status of SpeechSynthesis between: _ready_ _speaking_ _paused_ _error_ _end_ and _unavailable_.
> 		- _hasPending_: Returns a boolean indicating the presence of texts to speech.
> 		- _voices_: Returns the list of available voices.
> -  __speak__: Function to start speaking.
> -  __pause__: Function to keep in pause speaking.
> -  __resume__: Function to resume speaking.
> -  __cancel__: Function to cancel speaking.
>