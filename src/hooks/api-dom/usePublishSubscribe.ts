import { useEffect, useRef } from "react";
import { PublishSubscribePattern } from "../../utils";
import { UsePublishSubscribeResult } from "../../models";

const pubsub = new PublishSubscribePattern<string>();
/**
 * **`usePublishSubscribe`**: Communication system based on PubSub pattern. Instantiate a topic and use the publish and subscribe functions to communicate.
 * @see [📖 Documentation](https://react-tools.ndria.dev/hooks/api-dom/usePublishSubscribe)
 * @template T Type of the message payload exchanged on the topic.
 * @param {string} topic
 * @returns {UsePublishSubscribeResult} result {@link UsePublishSubscribeResult}
 */
export const usePublishSubscribe = <T>(topic: string): UsePublishSubscribeResult<T> => {
	const publish = useRef<(value?: T) => Promise<void>>(async (value?: T) => await pubsub.publishAsync(topic, value));
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
		const ref = unsubscribeCb.current;
		return () => {
			ref.forEach(unsub => unsub());
		}
	}, [topic]);

	return [
		subscribe.current,
		publish.current
	]
}