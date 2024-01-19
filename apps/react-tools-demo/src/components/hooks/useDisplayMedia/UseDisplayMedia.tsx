import { useRef } from "react";
import { useDisplayMedia } from "../../../../../../packages/react-tools/src"

/**
The component renders a button that if clicked activate the capturing of the screen selected by user and render it on a video element.
 */
export const UseDisplayMedia = () => {
	const [stream, start, stop] = useDisplayMedia();
	const ref = useRef<HTMLVideoElement>(null);

	const init = async () => {
		await start();
	}

	if (ref.current) {
		stream
			? (ref.current.srcObject = stream)
			: (ref.current.srcObject = null);
	}

	return <div style={{ display: "grid", gridTemplateRows: "auto auto auto", justifyContent: "center", gap: 20, maxHeight: 350, overflow: "auto" }}>
		<button onClick={init}>Start</button>
		<button onClick={stop}>Stop</button>
		<video autoPlay width={300} height={200} ref={ref}/>
	</div>
}
