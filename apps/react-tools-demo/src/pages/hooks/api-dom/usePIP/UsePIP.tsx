import { useRef, useState } from "react"
import video from './../../../../assets/mov_bbb.mp4';
import { usePIP } from "../../../../../../../packages/react-tools/src";

/**
The component uses _usePIP_ hook to show a video and a button to enable PIP.
 */
export const UsePIP = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [show, setShow] = useState(true);
	const { isSupported, openPIP } = usePIP({
		target: videoRef,
		onOpen: () => setShow(false),
		onClose: () => setShow(true)
	});

	return <div>
		<p>Supported: {isSupported ? 'Yes' : 'No'}</p>
		{
			show &&
			<>
				<video ref={videoRef} width="400" controls>
					<source src={video} type="video/mp4" />
					Your browser does not support HTML video.
				</video>
				<div>
					<button onClick={openPIP}>Open PIP</button>
				</div>
			</>
		}
	</div>
}
