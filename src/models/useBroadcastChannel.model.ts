/**
 * Props accepted by [useBroadcastChannel](https://react-tools.ndria.dev/hooks/api-dom/useBroadcastChannel).
 *
 * @template T Type of the data exchanged on the channel.
 *
 */
export interface UseBroadcastChannelProps<T> {
	/** broadcast channel name */
	name: string;
	/** function that will be execute when a message occurred */
	onMessage?: (evt: MessageEvent<T>) => void;
	/** function that will be execute when an error message occurred */
	onError?: (evt: MessageEvent) => void;
}

/**
 * Result tuple returned by [useBroadcastChannel](https://react-tools.ndria.dev/hooks/api-dom/useBroadcastChannel).
 *
 * @template T Type of the data exchanged on the channel.
 */
export type UseBroadcastChannelResult<T> = [
	/** Last received message data. `undefined` before any message arrives. */
	T | undefined,
	/** `send` — broadcasts `data` to all other contexts subscribed to the same channel name. */
	(data: T) => void
];