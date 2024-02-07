import { useCallback, useRef, useState } from "react"
import { usePinchZoom } from "../../../../../../../packages/react-tools-lib/src";

/**
The component renders a bordered div element. When pinch zoom gestures are executed in this div, a message is shown inside it with zoom type.
 */
export const UsePinchZoom = () => {
	const [state, setState] = useState("");
	const ref = useRef<HTMLDivElement>(null);
	const listener = useCallback((_:Event, type: "zoomIn" | "zoomOut") => {
		setState(type === "zoomIn" ? "Zooming in..." : "Zooming out...");
	}, []);
	usePinchZoom({
		listener,
		target: ref
	});

	return (
		<div ref={ref} style={{ margin: '0 auto', width: 300, height: 300, overflow: 'auto', resize: 'both', border: '1px solid lightblue' }}>
			{state}
		</div>
	);
}