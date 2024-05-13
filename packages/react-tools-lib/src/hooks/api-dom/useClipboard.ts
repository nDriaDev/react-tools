import { RefObject, useCallback, useRef } from "react";
import { useSyncExternalStore } from "../state";

const askPermission = (type: "clipboard-read" | "clipboard-write") => {
	return navigator.permissions.query({
		name: type as PermissionName
	})
		.then(permission => {
			if (permission.state === "denied") {
				throw Error(`Permission to ${type.includes("read") ? "copy to" : "paste from"} Clipboard denied.`);
			}
		})
		.catch(err => {
			throw err
		});
}

const isFirefox = () => navigator.clipboard.read === undefined;

/**
 * **`useClipboard`**: Hook to handle Clipboard. Refers to [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). __N.B.__: The hook has the same compatibility issues as the Clipboard API for Firefox, i.e. it is currently impossible to read from the clipboard. [See demo](https://react-tools.ndria.dev/#/hooks/api-dom/useClipboard)
 * @param {Object} param
 * @param {boolean} param.useValue - return a value with current clipboard value or not.
 * @param {RefObject<HTMLElement>|HTMLElement} [param.target] - target on which delimiter handling.
 * @param {"text"|"any"} [param.dataType] - data type handling. Based on it, Hook will return the functions for writing or reading text only or any type of data.
 * @returns {[string, (text: string) => Promise<void>, () => Promise<string>] | [string|Blob|(string|Blob)[], (blob: Blob|Blob[]) => Promise<void>, () => Promise<string|Blob|(string|Blob)[]>] | [(text: string) => Promise<void>, () => Promise<string>] | [(blob: Blob|Blob[]) => Promise<void>, () => Promise<string|Blob|(string|Blob)[]>]} array - elements depends on _useValue_ and _dataType_ values: if _dataType_ equals __text__ there will are only function to writing and reading text data type, otherwise any data type. If _useValue_ is true the first element will be _clipboard current value_.
 */
function useClipboard({ useValue, dataType, target }: { useValue: true, dataType: "text", target?: RefObject<HTMLElement> | HTMLElement }): [string, (text: string) => Promise<void>, () => Promise<string>];
function useClipboard({ useValue, dataType, target }: { useValue: true, dataType: "any", target?: RefObject<HTMLElement> | HTMLElement }): [string | Blob | (string | Blob)[], (blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>];
function useClipboard({ useValue, dataType, target }: { useValue: false, dataType: "text", target?: RefObject<HTMLElement> | HTMLElement }): [(text: string) => Promise<void>, () => Promise<string>];
function useClipboard({ useValue, dataType, target }: { useValue: false, dataType: "any", target?: RefObject<HTMLElement> | HTMLElement }): [(blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>];
function useClipboard({ useValue, dataType, target }: { useValue: boolean, dataType: "text" | "any", target?: RefObject<HTMLElement> | HTMLElement }): [string, (text: string) => Promise<void>, () => Promise<string>] | [string | Blob | (string | Blob)[], (blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>] | [(text: string) => Promise<void>, () => Promise<string>] | [(blob: Blob | Blob[]) => Promise<void>, () => Promise<string | Blob | (string | Blob)[]>] {
	const valueRef = useRef<string | Blob | (string | Blob)[]>("");
	const cacheValueRef = useRef<typeof valueRef.current>();
	const notifRef = useRef<() => void>();

	const write = useRef((blob: Blob | Blob[]) => (
		navigator.clipboard.write(
			Array.isArray(blob)
				? blob.map(el => new ClipboardItem({ [el.type]: el }))
					: [new ClipboardItem({ [blob.type]: blob })]
		)
			.then(() => {
				valueRef.current = blob;
				notifRef.current && notifRef.current();
			})
			.catch(err => {
				throw err;
			})
	));

	const writeText = useRef((text: string) => (
		navigator.clipboard.writeText(text)
			.then(() => {
				valueRef.current = text;
				notifRef.current && notifRef.current();
			})
			.catch(err => {
				throw err;
			})
	));

	const read = useRef(() => {
		if (valueRef.current || isFirefox()) {
			return Promise.resolve(valueRef.current)
		} else {
			return askPermission("clipboard-read")
				.then(() => navigator.clipboard.read())
				.then(items => {
					const promises = [];
					for (const item of items) {
						for (let i = 0, size = item.types.length; i < size; i++) {
							promises.push(item.getType(item.types[i]));
						}
					}
					return Promise.all(promises);
				})
				.then(results => {
					return Promise.all(results.map(el => {
						if (el.type.includes("text")) {
							return el.text()
						} else {
							return Promise.resolve(el)
						}
					}))
				})
				.then(data => {
					valueRef.current = data;
					return data;
				})
				.catch(err => {
					throw err;
				});
		}
	});

	const readText = useRef<()=>Promise<string>>(() => {
		if (valueRef.current || isFirefox()) {
			return Promise.resolve(valueRef.current as string)
		} else {
			return askPermission("clipboard-read")
				.then(() => navigator.clipboard.read())
				.then(items => {
					const promises = [];
					for (const item of items) {
						for (let i = 0, size = item.types.length; i < size; i++) {
							item.types[i] === "text/plain" && promises.push(item.getType(item.types[i]));
						}
					}
					return Promise.all(promises);
				})
				.then(results => {
					return Promise.all(results.map(el => {
						return el.text()
					}))
				})
				.then(data => {
					valueRef.current = data[0];
					return valueRef.current as string;
				})
				.catch(err => {
					throw err;
				});
		}
	});

	const value = useSyncExternalStore(
		useCallback(notif => {
			notifRef.current = notif;
			const element = target
				? (target as RefObject<HTMLElement>)?.current
					? (target as RefObject<HTMLElement>).current
					: target as HTMLElement
				: document;
			const listener = (evt: Event) => {
				if (["cut", "copy"].includes(evt.type)) {
					if (dataType === "text" || isFirefox()) {
						valueRef.current = getSelection()?.toString() ?? "";
						notif();
					} else {
						askPermission("clipboard-read")
							.then(() => navigator.clipboard.read())
							.then(items => {
								const promises = [];
								for (const item of items) {
									for (let i = 0, size = item.types.length; i < size; i++) {
										promises.push(item.getType(item.types[i]));
									}
								}
								return Promise.all(promises);
							})
							.then(results => {
								return Promise.all(results.map(el => {
									if (el.type.includes("text")) {
										return el.text()
									} else {
										return Promise.resolve(el)
									}
								}))
							})
							.then(data => {
								valueRef.current = data;
								notif();
							})
					}
				} else {
					const data: (string | Blob)[] = [];
					const { clipboardData } = (evt as ClipboardEvent);
					if (clipboardData !== null) {
						const items = clipboardData.items;
						for (const item of items) {
							if (dataType === "text") {
								item.type === "text/plain" && data.push(clipboardData.getData(item.type));
							} else {
								if (item.kind === "string") {
									data.push(clipboardData.getData(item.type))
								} else {
									data.push(item.getAsFile() as Blob);
								}
							}
						}
					}
					valueRef.current = data.length === 1 ? data[0] : data;
					notif();
				}
			}
			element?.addEventListener('cut', listener, {passive: true});
			element?.addEventListener('copy', listener, {passive: true});
			element?.addEventListener('cut', listener, {passive: true});
			return () => {
				notifRef.current = undefined;
				element?.removeEventListener('cut', listener);
				element?.removeEventListener('copy', listener);
				element?.removeEventListener('cut', listener);
			}
		}, [target, dataType]),
		useCallback(() => {
			if (!useValue) {
				return "";
			}
			if (cacheValueRef.current !== valueRef.current) {
				cacheValueRef.current = valueRef.current;
			}
			return cacheValueRef.current;
		}, [useValue])
	);

	if (useValue) {
		if (dataType === "text") {
			return [
				value as string,
				writeText.current,
				readText.current,
			]
		} else {
			return [
				value,
				write.current,
				read.current
			]
		}
	}

	if (dataType === "text") {
		return [
			writeText.current,
			readText.current
		]

	}

	return [
		write.current,
		read.current
	]
}

export { useClipboard };