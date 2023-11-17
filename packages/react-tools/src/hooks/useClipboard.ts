import { RefObject, useCallback, useRef } from "react";
import { useSyncExternalStore } from ".";

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

export const useClipboard = ({ useValue, target }: { useValue: boolean, target?: RefObject<HTMLElement> | HTMLElement }) => {
	const valueRef = useRef<string | Blob>("");
	const copy = useRef((blob: Blob | Blob[]) => (
		askPermission("clipboard-write")
			.then(() => navigator.clipboard.write(
				Array.isArray(blob)
					? blob.map(el => new ClipboardItem({ [el.type]: el }))
					: [new ClipboardItem({ [blob.type]: blob })]
			))
			.then(() => {
				const element = target
					? (target as RefObject<HTMLElement>).current
						? (target as RefObject<HTMLElement>).current
						: target as HTMLElement
					: document;
				element!.dispatchEvent(new ClipboardEvent("copy", {
					//TODO
					clipboardData: new DataTransfer()
				}))
			})
			.catch(err => {
				throw err;
			})
	));

	const copyText = useRef((text: string) => (
		askPermission("clipboard-write")
			.then(() => navigator.clipboard.writeText(text))
			.then(() => {
				const element = target
					? (target as RefObject<HTMLElement>).current
						? (target as RefObject<HTMLElement>).current
						: target as HTMLElement
					: document;
				element!.dispatchEvent(new ClipboardEvent("copy", {
					//TODO
					clipboardData: new DataTransfer()
				}))
			})
			.catch(err => {
				throw err;
			})
	));

	const paste = useRef(() => {
		if (isFirefox()) {
			throw Error("Paste from Clipboard isn't allowed in Firefox.");
		}
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
			.then(() => {
				const element = target
					? (target as RefObject<HTMLElement>).current
						? (target as RefObject<HTMLElement>).current
						: target as HTMLElement
					: document;
				element!.dispatchEvent(new ClipboardEvent("paste", {
					//TODO
					clipboardData: new DataTransfer()
				}))
			})
			.catch(err => {
				throw err;
			})
	});

	const pasteText = useRef(() => {
		if (isFirefox()) {
			throw Error("Paste from Clipboard isn't allowed in Firefox.");
		}
		return askPermission("clipboard-read")
			.then(() => navigator.clipboard.readText())
			.then(() => {
				const element = target
					? (target as RefObject<HTMLElement>).current
						? (target as RefObject<HTMLElement>).current
						: target as HTMLElement
					: document;
				element!.dispatchEvent(new ClipboardEvent("paste", {
					//TODO
					clipboardData: new DataTransfer()
				}))
			})
			.catch(err => {
				throw err;
			})
	});

	const value = useSyncExternalStore(
		useCallback(notif => {
			const element = target
				? (target as RefObject<HTMLElement>).current
					? (target as RefObject<HTMLElement>).current
					: target as HTMLElement
				: document;
		}, []),
		useCallback(async () => {
			if (isFirefox()) {
				return valueRef.current;
			}
			return paste.current();
		}, [])
	);

	if (useValue) {
		return [
			value,
			copyText.current,
			pasteText.current,
			copy.current,
			paste.current
		]
	}

	return [
		copyText.current,
		pasteText.current,
		copy.current,
		paste.current
	]
}