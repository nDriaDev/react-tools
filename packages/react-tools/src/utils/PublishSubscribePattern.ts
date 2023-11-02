export class PublishSubscribePattern {
	topics;
	constructor() {
		this.topics = new Map<string, ((val?: any) => void | Promise<void>)[]>;
	}

	subscribe<T=unknown>(topic: string, listener: (val?: T) => void | Promise<void>) {
		if (!this.topics.has(topic)) {
			this.topics.set(topic, []);
		}
		const listeners = this.topics.get(topic)!;
		listeners.push(listener);
		this.topics.set(topic, listeners);
	}

	unsubscribe<T=unknown>(topic: string, listener: (val?: T) => void | Promise<void>) {
		if (!this.topics.has(topic)) {
			return false;
		}
		const listeners = this.topics.get(topic)!.filter(l => l !== listener);
		this.topics.set(topic, listeners);
		return true;
	}

	async publish<T=unknown>(topic: string, value?: T) {
		const listeners = this.topics.get(topic) ?? [], promises: (void|Promise<void>)[] = [];
		listeners.forEach(listener => promises.push(listener(value)));
		await Promise.allSettled(promises);
	}
}