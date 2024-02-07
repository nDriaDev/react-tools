import { useRemotePlayback } from "../../../../../../../packages/react-tools-lib/src"
import video from './../../../../assets/mov_bbb.mp4';

/**
The component use _useRemotePlayback_ hook to play a video in a remote device.
 */
export const UseRemotePlayback = () => {
	const { isSupported, ref, prompt, state } = useRemotePlayback<HTMLVideoElement>();

	return <div style={{display: "flex", flexDirection: "column", width: 'fit-content', alignItems: "center", margin: '0 auto'}}>
		<p>Is supported: {isSupported ? 'Yes' : 'No'}</p>
		<p>Current state: {state}</p>
		<video ref={ref} width="400" controls>
			<source src={video} type="video/mp4" />
			Your browser does not support HTML video.
		</video>
		<button style={{marginTop: 20}} onClick={prompt} disabled={state === "unavailable"}>Prompt</button>
	</div>
}
