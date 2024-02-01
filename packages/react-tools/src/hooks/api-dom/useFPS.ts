import { useRef, useState } from "react"
import { useEffectOnce } from "../lifecycle";
import { UseFPSProps, UseFPSResult } from "../../models";
import { useRaf } from "./useRaf";

/**
 * **`useFPS`**: Hook to detect FPS (Frames per second).
 * @param {UseFPSProps} [opts] - configuration options to detect FPS.
 * @param {number} [opts.everySeconds=0.5] - it indicates how often to compute FPS. Default is 0.5 second.
 * @param {number} [opts.windowSize=10] - it indicates how FPS result keep in memory and computing average. Default is 10.
 * @returns {UseFPSResult} result
 * Stateful object with these properties:
 * -  __fps__: array of computed FPS by _windowSize_.
 * -  __currentFps__: current FPS value.
 * -  __avg__: average of FPS values kept in memory.
 * -  __maxFps__: maximum FPS value computed.
 */
export const useFPS = ({ everySeconds, windowSize }:UseFPSProps={windowSize:10, everySeconds:.5}): UseFPSResult => {
	const [fps, setFps] = useState<UseFPSResult>({fps: [], avg: 0, maxFps: 0, currentFps: 0});
	const state = useRef<{ started: boolean, ratings: number[], frames: number, startTime: number, lastTime: number, fps: number[], avg: number, maxFps: number, currentFps: number, calc: (timer: number, repeat: () => void) => void }>({
		started: false,
		ratings: [],
		frames: 0,
		startTime: performance.now(),
		lastTime: 0,
		fps: [],
		avg:0,
		maxFps: 0,
		currentFps: 0,
		calc: (timer: number, repeat: () => void) => {
			state.current.frames++;
			state.current.lastTime = timer;
			if (state.current.lastTime > state.current.startTime+(everySeconds*1000)) {
				const elapsedTime = state.current.lastTime - state.current.startTime;
				let currentFps = Math.round(1000 / (elapsedTime/state.current.frames));
				let fps = [...state.current.fps, currentFps];
				fps = fps.slice(Math.max(state.current.fps.length - windowSize, 0));
				const avg = +(fps.reduce((a, b) => a + b, 0) / fps.length).toFixed(2);
				const maxFps = Math.max(currentFps, state.current.maxFps);
				currentFps = fps[fps.length-1] as number;
				if (fps.some((el, index) => state.current.fps[index] !== el) || avg !== state.current.avg || maxFps !== state.current.maxFps || currentFps !== state.current.currentFps) {
					state.current.fps = fps;
					state.current.currentFps = currentFps;
					state.current.avg = avg;
					state.current.maxFps = maxFps;
					setFps({
						fps,
						currentFps,
						maxFps,
						avg
					})
				}

				state.current.startTime = timer;
				state.current.frames = 0;
			}
			repeat();
		}
	});
	const [start, cancel] = useRaf(state.current.calc)
	if (!state.current.started) {
		state.current.started = true;
		start();
	}

	useEffectOnce(() => () => cancel());

	return fps;
}