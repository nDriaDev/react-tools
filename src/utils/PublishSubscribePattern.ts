/**
 * A lightweight, channel-based publish/subscribe message bus. Each channel is
 * identified by a topic of type `E` and holds an ordered list of listener
 * functions that are invoked synchronously (via {@link PublishSubscribePattern.publish})
 * or asynchronously (via {@link PublishSubscribePattern.publishAsync}) when a
 * message is published.
 *
 * @template E - The type used to identify channels (e.g. `string`, a union of
 *   string literals, or a custom enum).
 *
 * @example
 * ```ts
 * const bus = new PublishSubscribePattern<"user" | "order">();
 * bus.subscribe("user", val => console.log("user:", val));
 * bus.publish("user", { id: 1 });
 * ```
 */
export class PublishSubscribePattern<E> {
	#channels;
	constructor() {
		this.#channels = new Map<E, ((val?: any) => void | Promise<void>)[]>();
	}

	/**
	 * Registers `listener` on the given `topic`. Multiple listeners can be
	 * registered on the same topic — they are invoked in registration order.
	 *
	 * @template T - The type of the value published to this topic.
	 * @param topic - The channel identifier.
	 * @param listener - The callback invoked when a value is published on
	 *   `topic`. May return a `Promise` — synchronous publishing ignores it,
	 *   while {@link PublishSubscribePattern.publishAsync} awaits it.
	 */
	subscribe<T>(topic: E, listener: (val?: T) => void | Promise<void>) {
		if (!this.#channels.has(topic)) {
			this.#channels.set(topic, []);
		}
		const listeners = this.#channels.get(topic)!;
		listeners.push(listener);
		this.#channels.set(topic, listeners);
	}

	/**
	 * Removes a previously registered `listener` from the given `topic`.
	 *
	 * @template T - The type of the value published to this topic.
	 * @param topic - The channel identifier.
	 * @param listener - The exact listener reference to remove (referential
	 *   equality). Returns `false` when the topic does not exist.
	 * @returns `true` if the listener was found and removed, `false` if the
	 *   topic did not exist.
	 */
	unsubscribe<T>(topic: E, listener: (val?: T) => void | Promise<void>) {
		if (!this.#channels.has(topic)) {
			return false;
		}
		const listeners = this.#channels.get(topic)!.filter(l => l !== listener);
		this.#channels.set(topic, listeners);
		return true;
	}

	/**
	 * Synchronously invokes all listeners registered on `topic`, passing
	 * `value` as the argument. Listener return values (including `Promise`s)
	 * are ignored — use {@link PublishSubscribePattern.publishAsync} to await them.
	 *
	 * @template T - The type of the value to publish.
	 * @param topic - The channel identifier.
	 * @param value - The value forwarded to each listener.
	 */
	publish<T>(topic: E, value?: T) {
		const listeners = this.#channels.get(topic) ?? [];
		listeners.forEach(listener => listener(value));
	}

	/**
	 * Asynchronously invokes all listeners registered on `topic`, passing
	 * `value` as the argument. Awaits all returned `Promise`s via
	 * `Promise.allSettled`, so all listeners run concurrently and individual
	 * rejections do not prevent others from completing.
	 *
	 * @template T - The type of the value to publish.
	 * @param topic - The channel identifier.
	 * @param value - The value forwarded to each listener.
	 */
	async publishAsync<T>(topic: E, value?: T) {
		const listeners = this.#channels.get(topic) ?? [],
			promises: (void | Promise<void>)[] = [];
		listeners.forEach(listener => promises.push(listener(value)));
		await Promise.allSettled(promises);
	}
}