export class PublishSubscribePattern {
	channels;
	constructor() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		this.channels = new Map<string, ((val?: any) => void | Promise<void>)[]>();
	}

	subscribe<T>(topic: string, listener: (val?: T) => void | Promise<void>) {
		if (!this.channels.has(topic)) {
			this.channels.set(topic, []);
		}
		const listeners = this.channels.get(topic)!;
		listeners.push(listener);
		this.channels.set(topic, listeners);
	}

	unsubscribe<T>(topic: string, listener: (val?: T) => void | Promise<void>) {
		if (!this.channels.has(topic)) {
			return false;
		}
		const listeners = this.channels.get(topic)!.filter(l => l !== listener);
		this.channels.set(topic, listeners);
		return true;
	}

	publish<T>(topic: string, value?: T) {
		const listeners = this.channels.get(topic) ?? [];
		listeners.forEach(listener => listener(value));
	}

	async publishAsync<T>(topic: string, value?: T) {
		const listeners = this.channels.get(topic) ?? [],
			promises: (void | Promise<void>)[] = [];
		listeners.forEach(listener => promises.push(listener(value)));
		await Promise.allSettled(promises);
	}
}