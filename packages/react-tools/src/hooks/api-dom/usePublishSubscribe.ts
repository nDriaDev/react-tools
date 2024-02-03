import { useEffect, useRef } from "react";
import { PublishSubscribePattern } from "../../utils";

const pubsub = new PublishSubscribePattern<string>();
/**
 * **`usePublishSubscribe`**: Communication system based on PubSub pattern. Instantiate a topic and use the publish and subscribe functions to communicate. [See demo](https://nDriaDev.io/react-tools/#/hooks/api-dom/usePublishSubscribe)
 * @param {string} topic
 * @returns {[(listener: (value?: T) => Promise<void> | void) => () => void, (value?: T) => Promise<void> ]} result - contains the _publish_ and _subscribe_ functions. The result of invoking the _subscribe_ function in turn returns a function that can be used to _unsubscribe_ the topic
 */
export const usePublishSubscribe = <T>(topic: string): [(listener: (value?: T) => Promise<void> | void) => () => void, (value?: T) => Promise<void> ] => {
	const publish = useRef<(value?: T) => Promise<void>>(async (value?: T) => await pubsub.publish(topic, value));
	const unsubscribeCb = useRef<Set<() => void>>(new Set());
	const subscribe = useRef<(listener: (value?: T) => void | Promise<void>) => () => void>((listener: ((value?: T) => void | Promise<void>)) => {
		pubsub.subscribe(topic, listener)
		const unsubscribe = () => pubsub.unsubscribe(topic, listener);
		unsubscribeCb.current.add(unsubscribe);
		return () => {
			unsubscribeCb.current.delete(unsubscribe);
			pubsub.unsubscribe(topic, listener);
		}
	});

	useEffect(() => {
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			unsubscribeCb.current.forEach(unsub => unsub());
		}
	}, [topic]);

	return [
		subscribe.current,
		publish.current
	]
}