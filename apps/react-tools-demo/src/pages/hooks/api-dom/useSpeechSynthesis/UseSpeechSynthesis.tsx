import { useState } from "react";
import { LanguageBCP47Tags, useSpeechSynthesis } from "../../../../../../../packages/react-tools/src"

/**
The component use _useSpeechSynthesis_ hook to read a text from an input text. Other fields are renders to setting properties as _voice_ _rate_ and _pitch_ of SpeechRecognition.
 */
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