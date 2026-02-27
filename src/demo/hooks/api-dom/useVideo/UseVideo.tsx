import { useVideo } from "../../../..";
import video from '../../../../assets/mov_bbb.mp4';

/**
The component use _useVideo_ hook to use a video track.
 */
export const UseVideo = () => {
	const {MediaElement, state, controls: {play, pause}} = useVideo({ src: video, controls: true });

	return <div>
		{MediaElement}
		<p>Status: {state.paused ? "paused" : state.playing ? "playing" : "ready"}</p>
		<button onClick={play} disabled={state.playing}>Play</button>
		<button onClick={pause} disabled={state.paused}>Pause</button>
	</div>
}
