export interface useLongPressCallback<E extends Event = Event> {
	(evt: E):void | Promise<void>
}

export interface useLongPressOptions<E extends Event = Event> {
	duration?: number,
	normalPress?: (evt: E) => void,
	onStart?: (evt: E) => void,
	onFinish?: (evt: E) => void
}