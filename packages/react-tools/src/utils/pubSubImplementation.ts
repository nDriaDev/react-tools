export class PubSubImplementation {
	dispatcher;
	constructor() {
		this.dispatcher = new Map<string, ((val?: any) => void | Promise<void>)[]>;
	}

	subscribe<T=unknown>(topic: string, listener: (val?: T) => void | Promise<void>) {
		if (!this.dispatcher.has(topic)) {
			this.dispatcher.set(topic, []);
		}
		const listeners = this.dispatcher.get(topic)!;
		listeners.push(listener);
		this.dispatcher.set(topic, listeners);
	}

	unsubscribe<T=unknown>(topic: string, listener: (val?: T) => void | Promise<void>) {
		if (!this.dispatcher.has(topic)) {
			return false;
		}
		const listeners = this.dispatcher.get(topic)!.filter(l => l !== listener);
		this.dispatcher.set(topic, listeners);
		return true;
	}

	async publish<T=unknown>(topic: string, value?: T) {
		const listeners = this.dispatcher.get(topic) ?? [], promises: (void|Promise<void>)[] = [];
		listeners.forEach(listener => promises.push(listener(value)));
		await Promise.all(promises);
	}
}