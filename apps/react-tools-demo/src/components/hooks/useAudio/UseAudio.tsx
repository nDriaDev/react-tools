import { useAudio } from '../../../../../../packages/react-tools/src';
import audio from '../../../assets/bubbles.mp3';

/**
The component use _useAudio_ hook to use an audio track.
 */
export const UseAudio = () => {
	const { state, play, pause } = useAudio({ url: audio, loop: true });

	return <div>
		<p>Status: {state.status}</p>
		<button onClick={play} disabled={state.status === "playing"}>Play</button>
		<button onClick={pause} disabled={state.status !== "playing"}>Pause</button>
	</div>
}