import { useCallback, useMemo, useRef, useState } from "react";
import { SpeechGrammarList, SpeechRecognitionErrorEvent, usePerformAction, useSpeechRecognition } from "../../../../../../packages/react-tools/src"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SpeechGrammarListP = ((window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList);

/**
This component use _useSpeechRecognition_ hook to simulate a Speech color change app. When button _start_ is clicked, you can say an HTML color keyword and the bordered div color will change to that color.
 */
export const UseSpeechRecognition = () => {
	const colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow', 'transparent']
	const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(' | ')} ;`

	const btnRef = useRef<HTMLButtonElement>(null);
	const perform = usePerformAction(() => btnRef.current?.focus());

	const [message, setMessage] = useState("Ready");

	const [state, start, stop] = useSpeechRecognition({
		onStart: useCallback(() => {
			console.log("onStart");
			setMessage("Listening...")
		}, []),
		onSpeechEnd: () => {
			console.log("onSpeechEnd");
			stop();
			setMessage("Finish");
			perform();
		},
		onNoMatch: useCallback(() => {
			console.log("onNoMatch");
			setMessage("Color not recognized.")
		}, []),
		onError: useCallback((ev: SpeechRecognitionErrorEvent) => {
			console.log("onError");
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