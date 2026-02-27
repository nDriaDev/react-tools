import { useEffect, useRef } from "react";
import { EventsPattern } from "../../utils"
import { UseEventsResult } from "../../models";

const events = new EventsPattern();

/**
 * **`useEvents`**: Communication system based on Events pattern implemented on a EventTarget subclass. AddListener and dispatch functions to communicate. The result of invoking the _addListener_ function in turn returns a function that can be used to _removeListener_ on event. Otherwise, the listener is automatically removed when the component that has instantiated it is unmounted.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/events/useEvents)
 * @template T - The type of the `detail` payload carried by {@link CustomEvent} instances. Defaults to `unknown` when not specified.
 * @returns {UseEventsResult} result {@link UseEventsResult}
 */
export const useEvents = <T>(): UseEventsResult<T> => {
	const listenerRef = useRef<(()=>void)[]>([]);

	const addListener = useRef((type: string, callback: <T>(evt: Event|CustomEvent<T>) => void, options?: boolean | AddEventListenerOptions) => {
		const unlisten = events.listen(type, callback, options);
		listenerRef.current.push(unlisten);
		return unlisten;
	});

	const dispatch = useRef(<T>(evt: Event|CustomEvent<T>) => {
		events.dispatch(evt)
	});

	useEffect(() => {
		const ref = listenerRef.current;
		return () => {
			ref.forEach(unlisten => unlisten());
		}
	}, []);

	return [addListener.current, dispatch.current];
}