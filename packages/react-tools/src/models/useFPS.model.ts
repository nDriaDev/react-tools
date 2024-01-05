export interface UseFPSProps {
	everySeconds: number;
	windowSize: number;
}

export interface UseFPSResult {
	fps: number[],
	avg: number,
	maxFps: number,
	currentFps: number;
}