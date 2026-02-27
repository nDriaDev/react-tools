import { useFPS } from "../../../.."

/**
The component uses _useFPS_ hook to compute FPS and shows details on screen.
 */
export const UseFPS = () => {
	const fps = useFPS();
	return <p>FPS: {fps.currentFps} - avg: {fps.avg} - Max FPS: {fps.maxFps}</p>
}