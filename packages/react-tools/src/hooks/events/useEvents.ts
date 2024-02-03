import { useEffect, useRef } from "react";
import { EventsPattern } from "../../utils"

const events = new EventsPattern();

/**
 * **`useEvents`**: Communication system based on Events pattern implemented on a EventTarget subclass. AddListener and dispatch functions to communicate. The result of invoking the _addListener_ function in turn returns a function that can be used to _removeListener_ on event. Otherwise, the listener is automatically removed when the component that has instantiated it is unmounted. [See demo](https://nDriaDev.io/react-tools/#/hooks/events/useEvents)
 * @returns {[(type: string, callback<T>:(evt: Event | CustomEvent<T>) => void, options?: boolean | AddEventListenerOptions) => ()=>void, <T>(evt: Event | CustomEvent<T>) => void]} result - contains the _addListener_ and _dispatch_ functions.
 */
export const useEvents = (): [(type: string, callback:<T>(evt: Event|CustomEvent<T>) => void, options?: boolean | AddEventListenerOptions) => ()=>void, <T>(evt: Event|CustomEvent<T>) => void] => {
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
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			listenerRef.current.forEach(unlisten => unlisten());
		}
	}, []);

	return [addListener.current, dispatch.current];
}