import { useAudio } from "../../../../../../../packages/react-tools/src";
import audio from '../../../../assets/bubbles.mp3';

/**
The component use _useAudio_ hook to use an audio track.
 */
export const UseAudio = () => {
	const {MediaElement, state, controls: {play, pause}} = useAudio({ src: audio, controls: true });

	return <div>
		{MediaElement}
		<p>Status: {state.paused ? "paused" : state.playing ? "playing" : "ready"}</p>
		<button onClick={play} disabled={state.playing}>Play</button>
		<button onClick={pause} disabled={state.paused}>Pause</button>
	</div>
}
