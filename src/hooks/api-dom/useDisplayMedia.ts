import { useCallback, useMemo, useRef } from "react";
import { useSyncExternalStore } from "../state";
import { useMediaDevices } from "./useMediaDevices";
import { TDisplayMediaStreamOptions, UseDisplayMediaResult } from "../../models";

/**
 * **`useDisplayMedia`**: Hook to capture the contents of a display.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/useDisplayMedia)
 * @returns {UseDisplayMediaResult} result {@link UseDisplayMediaResult}
 */
export const useDisplayMedia = (): UseDisplayMediaResult => {
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