import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { TDisplayMediaStreamOptions } from "../../models";
import { useMediaDevices } from "./useMediaDevices";

/**
 * **`useDisplayMedia`**: Hook to capture the contents of a display.
 * @returns {[MediaStream|undefined, (options: TDisplayMediaStreamOptions | undefined) => Promise<void>, ()=>void]} result
 * Array containing:
 * - first element: the captured stream.
 * - second element: function that starts capture.
 * - third element: function that stops capture.
 */
export const useDisplayMedia = (): [MediaStream | undefined, (options?: TDisplayMediaStreamOptions) => Promise<void>, () => void] => {
	const action = useMediaDevices("DisplayCapture");
	const streamRef = useRef<MediaStream>();
	const notifyRef = useRef<() => void>();

	const start = useCallback((options?: TDisplayMediaStreamOptions) => action(options).then(stream => {
		streamRef.current = stream;
		notifyRef.current && notifyRef.current();
	}), [action]);

	const stop = useCallback(() => {
		if (streamRef.current) {
			const tracks = streamRef.current.getTracks();
			tracks.forEach(t => t.stop());
			streamRef.current = undefined;
			notifyRef.current && notifyRef.current();
		}
	}, []);

	const stream = useSyncExternalStore(
		useCallback(notif => {
			notifyRef.current = notif;
			return () => {
				notifyRef.current = undefined;
			}
		}, []),
		useMemo(() => {
			let stream: {current?: MediaStream} = {current: undefined};
			return () => {
				stream.current !== streamRef.current && (stream = {current: streamRef.current});
				return stream.current;
			}
		}, [])
	);

	return [stream, start, stop];
};