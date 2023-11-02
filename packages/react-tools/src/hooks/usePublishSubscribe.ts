import { useEffect, useRef } from "react";
import { PublishSubscribePattern } from "../utils";

const pubsub = new PublishSubscribePattern();
/**
 * **`usePublishSubscribe`**: Communication system based on PubSub pattern. Instantiate a topic and use the publish and subscribe functions to communicate.
 * @param {string} topic
 * @returns {{ publish: (value?: T) => Promise<void>, subscribe: (listener: (value?: T) => Promise<void> | void) => () => void }} result - contains the _publish_ and _subscribe_ functions. The result of invoking the _subscribe_ function in turn returns a function that can be used to _unsubscribe_ the topic
 */
export const usePublishSubscribe = <T>(topic: string): { publish: (value?: T) => Promise<void>, subscribe: (listener: (value?: T) => Promise<void> | void) => () => void } => {
	const publish = useRef<(value?: T) => Promise<void>>(async (value?: T) => await pubsub.publish(topic, value));

	const subscribe = useRef<(listener: (value?: T) => void | Promise<void>) => () => void>((listener: ((value?: T) => void | Promise<void>)) => {
		pubsub.subscribe(topic, listener)
		return () => {
			pubsub.unsubscribe(topic, listener);
		}
	});

	useEffect(() => {
		return () => {
			const listeners = pubsub.topics.get(topic);
			listeners?.forEach(l => pubsub.unsubscribe(topic, l));
		}
	}, [topic]);

	return {
		publish: publish.current,
		subscribe: subscribe.current
	}
}