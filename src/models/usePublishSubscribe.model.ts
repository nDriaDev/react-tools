/**
 * Result tuple returned by [usePublishSubscribe](https://react-tools.ndria.dev/hooks/api-dom/usePublishSubscribe).
 *
 * @template T Type of the message payload exchanged on the topic.
 */
export type UsePublishSubscribeResult<T> = [
	/** `subscribe` — registers a listener for the topic. Returns an `unsubscribe` function; unsubscribes automatically on component unmount. */
	(listener: (value?: T) => void | Promise<void>) => () => void,
	/** `publish` — broadcasts `value` to all current subscribers of the topic. */
	(value?: T) => Promise<void>
];