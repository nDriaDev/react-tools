import { useFullscreen } from "../../../../../../../packages/react-tools/src";

/**
The component render a div with a label to indicate if it is in fullscreen mode or not and two button to enter and exit from fullscreen mode.
 */
export const UseFullscreen = () => {
	const [isFullscreen, cbRef, enterFullscreen, exitFullscreen] = useFullscreen();
	return (
		<div ref={cbRef}>
			<div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
			<div>
				<button type="button" onClick={()=>enterFullscreen()}>
					enter Fullscreen
				</button>
				<button type="button" onClick={exitFullscreen} style={{ margin: '0 8px' }}>
					exit Fullscreen
				</button>
			</div>
		</div>
	);
}