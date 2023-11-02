export class EventsPattern extends EventTarget {
	constructor() {
		super();
	}

	dispatch(event: Event) {
		this.dispatchEvent(event);
	}

	listen(type: string, callback: (evt: Event) => void, options?: boolean | AddEventListenerOptions) {
		this.addEventListener(type, callback, options);
		return () => {
			this.removeEventListener(type, callback, options);
		}
	}
}